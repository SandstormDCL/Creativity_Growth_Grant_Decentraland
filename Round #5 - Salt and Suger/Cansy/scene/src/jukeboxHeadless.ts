import { engine, Transform } from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'
import { PlaylistPlayer, PlaylistPlayerSettings } from './playlistPlayer/playlistPlayer'
import { playlist } from './playlistPlayer/playlist'

export function createHeadlessPlayer() {
  // Define the jukebox settings
  const settings: PlaylistPlayerSettings = {
    playlist: playlist,
    autoplay: true, // defines wheter next track is played automaticaly
    isPlaying: true, // defines if music is autoplaying on scene start
    global: false, // whether the audio plays at constant volume across the scene.
    volume: 1, // a number between 0 - 1
    currentTrackIndex: 2, // the starting track
    loopPlaylist: true,
    loopTrack: false,
    shufflePlaylist: true,
    synced: true
  }

  // Place jukebox model in scene
  const headlesPlayer = engine.addEntity()
  Transform.create(headlesPlayer, {
    position: Vector3.create(3, 1, 3)
  })

  // Attach playlist player to jukebox model
  const headlessPlaylistPlayer = new PlaylistPlayer(settings, headlesPlayer)
}
