import {
  Animator,
  AudioSource,
  AvatarAttach,
  engine,
  GltfContainer,
  Material,
  pointerEventsSystem,
  Transform,
  VideoPlayer,
  VisibilityComponent
} from '@dcl/sdk/ecs'
import { initAssetPacks } from '@dcl/asset-packs/dist/scene-entrypoint'
import {} from '@dcl/sdk/math'

initAssetPacks(engine, pointerEventsSystem, {
  Animator,
  AudioSource,
  AvatarAttach,
  Transform,
  VisibilityComponent,
  GltfContainer,
  Material,
  VideoPlayer
})

export function main() {}
