import { AudioSource, Entity, Schemas, Transform, engine, executeTask } from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'
import { myProfile, syncEntity } from '@dcl/sdk/network'

// This is a multiplayer playlist player that uses syncEntity to syncronize audio between players

const BROADCAST = true
const NO_BROADCAST = false

type EventCallback = () => void

type Track = {
  filename: string
  duration?: number
}

export type Playlist = Track[]

export type PlaylistPlayerSettings = {
  playlist: Playlist
  isPlaying?: boolean // defines if music is autoplaying on scene start
  autoplay?: boolean // if true the next song will play automaticaly
  global?: boolean // whether the audio plays at constant volume across the scene.
  volume?: number
  currentTrackIndex?: number
  loopPlaylist?: boolean
  loopTrack?: boolean
  shufflePlaylist?: boolean
  shuffledPlaylist?: number[]
  synced?: boolean
}

const defaultSettings: PlaylistPlayerSettings = {
  playlist: [],
  isPlaying: true,
  autoplay: true,
  global: false,
  volume: 1,
  currentTrackIndex: 0,
  loopPlaylist: true,
  loopTrack: false,
  shufflePlaylist: false,
  shuffledPlaylist: [],
  synced: true
}

const PlaybackComponent = engine.defineComponent('PlaybackComponent', {
  isPlaying: Schemas.Boolean,
  currentTrackIndex: Schemas.Int,
  loopTrack: Schemas.Boolean,
  globalVolume: Schemas.Boolean // 🚧 🚧 🚧
})

// const VolumeComponent = engine.defineComponent('VolumeComponent', {
//   global: Schemas.Boolean,
//   volume: Schemas.Number
// })

const OptionsComponent = engine.defineComponent('OptionsComponent', {
  loopPlaylist: Schemas.Boolean,
  shufflePlaylist: Schemas.Boolean,
  shuffledPlaylist: Schemas.Array(Schemas.Int),
  autoplay: Schemas.Boolean
})

export let entityEnumId = 100

export class PlaylistPlayer {
  private speaker: Entity
  private playlist: Playlist
  private synced: boolean
  private timer: number = 0
  private currentTrackDuration: number = 0

  private events: { [key: string]: EventCallback[] } = {}

  constructor(settings: PlaylistPlayerSettings, parent?: Entity) {
    settings = this.createPlaylistPlayerSettings(settings)

    this.playlist = settings.playlist
    this.synced = settings.synced ?? true

    this.speaker = engine.addEntity()
    Transform.create(this.speaker, {
      parent: parent ? parent : undefined
    })

    AudioSource.create(this.speaker)
    PlaybackComponent.create(this.speaker, settings)
    //VolumeComponent.create(this.speaker, settings)
    OptionsComponent.create(this.speaker, settings)

    AudioSource.getMutable(this.speaker).volume = settings.volume
    this.shufflePlaylist()

    // Synced cross all player
    if (this.synced) {
      syncEntity(this.speaker, [PlaybackComponent.componentId, OptionsComponent.componentId], entityEnumId++)

      PlaybackComponent.onChange(this.speaker, (playlistPlayer) => {
        if (!playlistPlayer) return

        if (playlistPlayer.isPlaying == true) {
          this.play(NO_BROADCAST)
        } else {
          this.stop(NO_BROADCAST)
        }
      })
    }

    if (PlaybackComponent.get(this.speaker).isPlaying) {
      this.updateCurrentTrackDuration()
      this.play(NO_BROADCAST)
    }

    if (OptionsComponent.get(this.speaker).autoplay) {
      this.startAutoPlaySystem(this)
    }
  }

  //////////////// PLAY/PAUSE ////////////////
  /**
    broadcast == true means this function is synched with other players
  */
  play(broadcast: boolean = true) {
    this.updateCurrentTrackDuration()

    // If player presses button ExecuteTask makes sure,
    // that pause() executes first in the priority order.
    // This fixes the issue, that clicking a buttons pauses audio
    const playback = PlaybackComponent.get(this.speaker)
    executeTask(async () => {
      await this.pause(NO_BROADCAST)

      const audioSource = AudioSource.getMutable(this.speaker)
      audioSource.audioClipUrl = this.getCurrentTrackUrl()
      audioSource.playing = true
      audioSource.global = playback.globalVolume // 🚧 🚧 🚧 Waiting until is updated in SDK7 🚧 🚧 🚧
      audioSource.loop = playback.loopTrack
      // audioSource.currentTime = 5 // 🚧 🚧 🚧 Waiting until is updated in SDK7 🚧 🚧 🚧

      if (broadcast) PlaybackComponent.getMutable(this.speaker).isPlaying = true
    })
  }

  playPause(broadcast: boolean = true) {
    if (PlaybackComponent.get(this.speaker).isPlaying) {
      this.pause(broadcast)
    } else {
      this.play(broadcast)
    }
  }

  // 🚧 🚧 🚧 will actually pause when SDK7 updates 'currentTime' or 'resetCursor' 🚧 🚧 🚧
  // https://docs.decentraland.org/creator/development-guide/sdk7/sounds/
  pause(broadcast: boolean = true): void {
    // console.log('Stopped at: ' + AudioSource.get(this.speaker).currentTime) 🚧 🚧 🚧 Waiting until is updated in SDK7 🚧 🚧 🚧
    this.stop(broadcast)
  }

  stop(broadcast: boolean = true): void {
    if (broadcast) PlaybackComponent.getMutable(this.speaker).isPlaying = false
    AudioSource.getMutable(this.speaker).playing = false
    this.emit('stop')
  }

  selectTrack(trackIndex: number, broadcast: boolean = true) {
    PlaybackComponent.getOrCreateMutable(this.speaker).currentTrackIndex = trackIndex
    this.pause(broadcast)
    this.play(broadcast)
  }

  nextTrack(): boolean {
    const options = OptionsComponent.get(this.speaker)

    // Check if this playlist should loop
    if (this.isLastTrack() && options.loopPlaylist) {
      if (options.shufflePlaylist) this.shufflePlaylist()
      this.selectTrack(0)
      console.log('Playlist ended, jumping to track[0]')
      return true
    }

    if (!this.isLastTrack()) {
      const index = PlaybackComponent.get(this.speaker).currentTrackIndex + 1
      this.selectTrack(index)
      console.log('Playing track[' + index + ']')
      return true
    } else {
      console.log('This is the last track in this playlist.')
      return false
    }

    // Shuffled track url is handled by this.getCurrentTrackUrl()
  }

  previousTrack() {
    const options = OptionsComponent.get(this.speaker)

    // Check if this is first track in shuffled playlist
    if (this.isFirstTrack() && options.loopPlaylist) {
      this.selectTrack(this.playlist.length - 1) // Go to last track
      console.log('Play last track[' + (this.playlist.length - 1) + '] in playlist')
      return
    }

    if (this.isFirstTrack()) {
      // If this is first track in playlist and not looped -> do nothing
      console.log('This is track[0]')
      return
    } else {
      // If this is not first track in playlist
      const playback = PlaybackComponent.get(this.speaker)
      this.selectTrack(playback.currentTrackIndex - 1)
      return
    }
  }

  /**
   * 🚧 🚧 🚧 Under Construction – soon after SDK update
   *  */
  windForward() {
    AudioSource.getMutable(this.speaker).pitch = 5
    this.play()
  }

  // windBackwards() {
  //   // pitch does not accept negative values
  //   AudioSource.getMutable(this.speaker).pitch = -5
  //   this.play()
  // }

  //////////////// SETTINGS ////////////////

  toggleLoop() {
    const option = OptionsComponent.getMutable(this.speaker)
    option.loopPlaylist = !option.loopPlaylist
    console.log('Is looping: ' + option.loopPlaylist)
  }

  toggleLoopTrack() {
    const options = PlaybackComponent.getMutable(this.speaker)
    options.loopTrack = !options.loopTrack
    console.log('Track is looping: ' + options.loopTrack)
    // NO_BROADCAST because play is already activated by sync
    this.pause(NO_BROADCAST)
    this.play(NO_BROADCAST)
  }

  toggleShuffle() {
    const option = OptionsComponent.getMutable(this.speaker)
    option.shufflePlaylist = !option.shufflePlaylist
    console.log('Is shuffeling: ' + option.shufflePlaylist)
  }

  //////////////// VOLUME ////////////////
  // is always local

  volumeUp() {
    let audio = AudioSource.getMutable(this.speaker)
    if (!audio.volume) audio.volume = 1

    if (audio.volume < 1.1) audio.volume = Math.round((audio.volume + 0.1) * 10) / 10
    console.log(audio.volume)
    this.play(NO_BROADCAST)
  }

  volumeDown() {
    let audio = AudioSource.getMutable(this.speaker)
    if (!audio.volume) audio.volume = 1

    if (audio.volume > -0.1) audio.volume = Math.round((audio.volume - 0.1) * 10) / 10
    console.log(audio.volume)
    this.play(NO_BROADCAST)
  }

  //////////////// AUTOPLAY SYSTEM ////////////////
  // Counter system triggers next track as soon as timer is greater track duration

  // 🔊 👉 🔊 👉 🔊 👉 🔊 👉 🔊 👉 🔊
  // Start system that plays next song when track is finished
  startAutoPlaySystem(playlistPlayer: PlaylistPlayer) {
    console.log('speaker-' + playlistPlayer.speaker.toString())
    function autoPlayNextTrackSystem(dt: number) {
      playlistPlayer.handleNextTrackPlay(dt)
    }
    engine.addSystem(autoPlayNextTrackSystem, 10, 'speaker-' + playlistPlayer.speaker.toString())
  }

  stopAutoPlaySystem(playlistPlayer: PlaylistPlayer) {
    engine.removeSystem('speaker-' + playlistPlayer.speaker.toString())
  }

  updateCurrentTrackDuration() {
    this.timer = 0
    const playback = PlaybackComponent.get(this.speaker)
    const options = OptionsComponent.get(this.speaker)

    let playlistIndex = playback.currentTrackIndex
    if (options.shufflePlaylist) {
      playlistIndex = options.shuffledPlaylist[playlistIndex]
    }

    const duration = this.playlist[playlistIndex].duration
    if (duration) {
      this.currentTrackDuration = duration
    } else {
      this.currentTrackDuration = 0
    }
  }

  handleNextTrackPlay(dt: number) {
    this.timer += dt

    // If music player is paused
    if (AudioSource.get(this.speaker).playing == false) {
      return
    }

    // If duration is not set in playlist
    if (this.currentTrackDuration == 0) {
      return
    }

    // If player is set to loop just one track
    if (PlaybackComponent.get(this.speaker).loopTrack) {
      // Do nothing
      return
    }

    // check if track is over
    if (this.timer > this.currentTrackDuration) {
      // play next track, if this is last track in playlist, stop
      if (this.nextTrack() == false) {
        this.stop()
      }
    }
  }

  /**
   * 🚧 🚧 🚧 Under Construction – soon after SDK update
   *  */
  toggleGlobal() {
    const volume = PlaybackComponent.getMutable(this.speaker)
    volume.globalVolume = !volume.globalVolume
    this.play()
  }

  //////////////// UTILS ////////////////

  getCurrentTrackUrl(): string {
    const index = PlaybackComponent.get(this.speaker).currentTrackIndex
    const options = OptionsComponent.get(this.speaker)

    let playlistIndex = index
    if (options.shufflePlaylist) {
      // schuffledPlaylist is an array of numbers [3,1,2,0] which maps the current tracks index
      playlistIndex = options.shuffledPlaylist[index]
    }

    return this.playlist[playlistIndex].filename
  }

  isFirstTrack(): boolean {
    const currentTrackIndex = PlaybackComponent.get(this.speaker).currentTrackIndex
    return currentTrackIndex === 0
  }

  isLastTrack(): boolean {
    const currentTrackIndex = PlaybackComponent.get(this.speaker).currentTrackIndex
    const playlistLength = this.playlist.length - 1
    return currentTrackIndex === playlistLength
  }

  shufflePlaylist(): void {
    // Create an array [0,1,2,3…]
    const shuffledPlaylist: number[] = []
    for (let i = 0; i < this.playlist.length; i++) {
      shuffledPlaylist.push(i)
    }

    // Apply the shuffle algorithm to the copied playlist
    for (let i = this.playlist.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledPlaylist[i], shuffledPlaylist[j]] = [shuffledPlaylist[j], shuffledPlaylist[i]]
    }

    // Write new shuffled playlist into component
    OptionsComponent.getOrCreateMutable(this.speaker).shuffledPlaylist = shuffledPlaylist
  }

  isSynced() {
    return this.synced
  }

  getSpeaker() {
    return this.speaker
  }

  getState() {
    const playlistPlayer = PlaybackComponent.get(this.speaker)
    const options = OptionsComponent.get(this.speaker)

    return {
      ...playlistPlayer,
      ...options
    }
  }

  //////////////// UTILS ////////////////
  private createPlaylistPlayerSettings(overrides: Partial<PlaylistPlayerSettings>): PlaylistPlayerSettings {
    return {
      ...defaultSettings,
      ...overrides
    }
  }

  //////////////// EVENT EMISSION ////////////////
  // This are custom events that emit when the player
  // does an action like play, pause, shuffle…

  private emit(event: string) {
    const eventCallbacks = this.events[event]
    if (eventCallbacks) {
      eventCallbacks.forEach((callback) => callback())
    }
  }

  public on(event: string, callback: EventCallback) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(callback)
  }
}
