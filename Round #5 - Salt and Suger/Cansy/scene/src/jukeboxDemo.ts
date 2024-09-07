import { engine, GltfContainer, Transform } from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'
import { PlaylistPlayer, PlaylistPlayerSettings } from './playlistPlayer/playlistPlayer'
import { playlist } from './playlistPlayer/playlist'
import { ButtonConfig, createPlaylistButtons } from './playlistPlayer/playlistButtons'

export function createJukeboxDemo() {
  const settings: PlaylistPlayerSettings = {
    playlist: playlist,
    autoplay: true, // defines wheter next trac is played automaticaly
    isPlaying: false, // defines if music is autoplaying on scene start
    global: false, // whether the audio plays at constant volume across the scene.
    volume: 1, // a number between 0 - 1
    currentTrackIndex: 2, // the starting track
    loopPlaylist: true,
    loopTrack: false,
    shufflePlaylist: false,
    synced: true // defines if jukebox is multiplayer
  }

  // Place jukebox model in scene
  const jukeboxPanel = engine.addEntity()
  GltfContainer.create(jukeboxPanel, {
    src: 'models/demo/Body.glb'
  })
  Transform.create(jukeboxPanel, {
    position: Vector3.create(13, 1, 8)
  })

  // Attach playlist player to jukebox model
  const sugarPlaylistPlayer = new PlaylistPlayer(settings, jukeboxPanel)

  // Define buttons
  const demoJukeboxButtons: ButtonConfig[] = [
    {
      modelPath: 'models/demo/Button_Play.glb',
      hoverText: 'Play',
      animation: 'PushAndPop',
      action: () => sugarPlaylistPlayer.play()
    },
    {
      modelPath: 'models/demo/Button_Pause.glb',
      hoverText: 'Pause',
      animation: 'PushAndPop',
      action: () => sugarPlaylistPlayer.pause()
    },
    {
      modelPath: 'models/demo/Button_PlayPause.glb',
      hoverText: 'Play/Pause',
      animation: 'PushAndPop',
      action: () => sugarPlaylistPlayer.playPause()
    },
    {
      modelPath: 'models/demo/Button_Stop.glb',
      hoverText: 'Stop',
      animation: 'PushAndPop',
      action: () => sugarPlaylistPlayer.stop()
    },
    {
      modelPath: 'models/demo/Button_Next.glb',
      hoverText: 'Next',
      animation: 'PushAndPop',
      action: () => sugarPlaylistPlayer.nextTrack()
    },
    {
      modelPath: 'models/demo/Button_Previous.glb',
      hoverText: 'Back',
      animation: 'PushAndPop',
      action: () => sugarPlaylistPlayer.previousTrack()
    },
    {
      modelPath: 'models/demo/Button_Forward.glb',
      hoverText: 'Fast Forward',
      animation: 'PushAndPop',
      action: () => sugarPlaylistPlayer.windForward()
    },
    {
      modelPath: 'models/demo/Button_Global.glb',
      hoverText: 'Global Audio',
      animation: 'PushAndPop',
      action: () => sugarPlaylistPlayer.toggleGlobal()
    },
    {
      modelPath: 'models/demo/Button_Loop.glb',
      hoverText: 'Loop',
      animation: 'PushAndPop',
      action: () => sugarPlaylistPlayer.toggleLoop()
    },
    {
      modelPath: 'models/demo/Button_LoopTrack.glb',
      hoverText: 'Loop Track',
      animation: 'PushAndPop',
      action: () => sugarPlaylistPlayer.toggleLoopTrack()
    },
    {
      modelPath: 'models/demo/Button_Shuffle.glb',
      hoverText: 'Shuffle',
      animation: 'PushAndPop',
      action: () => sugarPlaylistPlayer.toggleShuffle()
    },
    {
      modelPath: 'models/demo/Button_VolumeUp.glb',
      hoverText: 'Volume Up',
      animation: 'PushAndPop',
      action: () => sugarPlaylistPlayer.volumeUp()
    },
    {
      modelPath: 'models/demo/Button_VolumeDown.glb',
      hoverText: 'Volume Down',
      animation: 'PushAndPop',
      action: () => sugarPlaylistPlayer.volumeDown()
    }
  ]

  // Attach buttons to playlist player
  createPlaylistButtons(sugarPlaylistPlayer, jukeboxPanel, demoJukeboxButtons)
}
