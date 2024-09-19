import { engine, GltfContainer, Transform } from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'
import { PlaylistPlayer, PlaylistPlayerSettings } from './playlistPlayer/playlistPlayer'
import { playlist } from './playlistPlayer/playlist'
import { ButtonConfig, createPlaylistButtons } from './playlistPlayer/playlistButtons'

export function createJukeboxSugar() {
  // Define the jukebox settings
  const settings: PlaylistPlayerSettings = {
    playlist: playlist,
    autoplay: true, // defines wheter next track is played automaticaly
    isPlaying: false, // defines if music is autoplaying on scene start
    volume: 1, // a number between 0 - 1
    currentTrackIndex: 2, // the starting track
    loopPlaylist: true,
    shufflePlaylist: false,
    synced: true // defines if jukebox is multiplayer
  }

  // Place jukebox model in scene
  const sugarJukeboxModel = engine.addEntity()
  GltfContainer.create(sugarJukeboxModel, {
    src: 'models/sugar/sugar-jukebox.glb'
  })
  Transform.create(sugarJukeboxModel, {
    position: Vector3.create(8, 0, 6)
  })

  // Attach playlist player to jukebox model
  const sugarPlaylistPlayer = new PlaylistPlayer(settings, sugarJukeboxModel)

  // Define buttons
  const sugarJukeboxButtons: ButtonConfig[] = [
    {
      modelPath: 'models/sugar/sugar-button-play.glb',
      hoverText: 'Play',
      animation: 'PushAndPop',
      action: () => sugarPlaylistPlayer.play()
    },
    {
      modelPath: 'models/sugar/sugar-button-stop.glb',
      hoverText: 'Stop',
      animation: 'PushAndPop',
      action: () => sugarPlaylistPlayer.stop()
    },
    {
      modelPath: 'models/sugar/sugar-button-next.glb',
      hoverText: 'Next',
      animation: 'PushAndPop',
      action: () => sugarPlaylistPlayer.nextTrack()
    },
    {
      modelPath: 'models/sugar/sugar-button-previous.glb',
      hoverText: 'Back',
      animation: 'PushAndPop',
      action: () => sugarPlaylistPlayer.previousTrack()
    }
  ]

  // Attach buttons to playlist player
  createPlaylistButtons(sugarPlaylistPlayer, sugarJukeboxModel, sugarJukeboxButtons)
}
