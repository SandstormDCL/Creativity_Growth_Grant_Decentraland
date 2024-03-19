import { engine, GltfContainer, MeshCollider, Transform } from '@dcl/sdk/ecs'
import { SetupTags } from './tags'
import { SetupSystems } from './systems'
import { setupUi } from './ui'
import { SetupNPC } from './npc'
import { SetupCoins } from './coins'
import { AmbientSound } from './soundManager'

const lookat = {}
//// component
export const LookAtPlayer = engine.defineComponent('LookAtPlayer', lookat)

export function main() {
  setupUi()
  const Entity = engine.addEntity()

  GltfContainer.create(Entity, {
    src: 'models/Map.glb'
  })

  Transform.create(Entity, {
    position: { x: 40, y: 2.75, z: 40 },
    scale: { x: 0.995, y: 0.995, z: 0.995 }
  })
  SetupTags()
  SetupSystems()
  SetupNPC()
  AmbientSound()
}
