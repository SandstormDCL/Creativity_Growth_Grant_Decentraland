import {
  Animator,
  AudioSource,
  AvatarAttach,
  engine,
  GltfContainer,
  pointerEventsSystem,
  Transform,
  VisibilityComponent
} from '@dcl/sdk/ecs'
import { initAssetPacks } from '@dcl/asset-packs/dist/scene-entrypoint'

initAssetPacks(engine, pointerEventsSystem, {
  Animator,
  AudioSource,
  AvatarAttach,
  Transform,
  VisibilityComponent,
  GltfContainer
})

export function main() {}
