import { createJukeboxSugar } from './jukeboxSugar'
import { createJukeboxSalt } from './jukeboxSalt'
import { createHeadlessPlayer } from './jukeboxHeadless'
import { createJukeboxDemo } from './jukeboxDemo'
import { engine, GltfContainer, Transform } from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'

export function main() {
  // Playlist is in playlistPlayer/playlist.ts

  // Jukebox sugar
  createJukeboxSugar()

  // Jukebox salt
  createJukeboxSalt()

  // Jukebox demo with all button options
  // createJukeboxDemo()

  // Jukebox headless mode (invisible player)
  // createHeadlessPlayer()

  const grass = engine.addEntity()
  Transform.create(grass, {
    position: Vector3.create(8, 0, 8)
  })
  GltfContainer.create(grass, {
    src: 'models/grass.glb'
  })
}
