import { engine, GltfContainer, Transform } from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'
import { PlaylistPlayer, PlaylistPlayerSettings } from './playlistPlayer/playlistPlayer'
import { playlist } from './playlistPlayer/playlist'
import { ButtonConfig, createPlaylistButtons } from './playlistPlayer/playlistButtons'

export function createJukeboxSalt() {
  const settingsSalt: PlaylistPlayerSettings = {
    playlist: playlist,
    shufflePlaylist: true
  }

  // Place jukebox model in scene
  const saltJukeboxModel = engine.addEntity()
  GltfContainer.create(saltJukeboxModel, {
    src: 'models/salt/salt-jukebox.glb'
  })
  Transform.create(saltJukeboxModel, {
    position: Vector3.create(8, 0, 10)
  })

  // Attach playlist player to jukebox model
  const saltPlaylistPlayer = new PlaylistPlayer(settingsSalt, saltJukeboxModel)

  // Define buttons
  const saltJukeboxButtons: ButtonConfig[] = [
    {
      modelPath: 'models/salt/salt-button-play.glb',
      hoverText: 'Play',
      animation: 'PushAndPopSalt',
      action: () => saltPlaylistPlayer.play()
    },
    {
      modelPath: 'models/salt/salt-button-stop.glb',
      hoverText: 'Stop',
      animation: 'PushAndPopSalt',
      action: () => saltPlaylistPlayer.stop()
    },
    {
      modelPath: 'models/salt/salt-button-next.glb',
      hoverText: 'Next',
      animation: 'PushAndPopSalt',
      action: () => saltPlaylistPlayer.nextTrack()
    },
    {
      modelPath: 'models/salt/salt-button-previous.glb',
      hoverText: 'Back',
      animation: 'PushAndPopSalt',
      action: () => saltPlaylistPlayer.previousTrack()
    },
    {
      modelPath: 'models/salt/salt-button-vol-up.glb',
      hoverText: 'Volume Up',
      animation: 'PushAndPopVolume',
      action: () => saltPlaylistPlayer.volumeUp()
    },
    {
      modelPath: 'models/salt/salt-button-vol-down.glb',
      hoverText: 'Volume Up',
      animation: 'PushAndPopVolume',
      action: () => saltPlaylistPlayer.volumeDown()
    }
  ]

  // Attach buttons to playlist player
  createPlaylistButtons(saltPlaylistPlayer, saltJukeboxModel, saltJukeboxButtons)
}
