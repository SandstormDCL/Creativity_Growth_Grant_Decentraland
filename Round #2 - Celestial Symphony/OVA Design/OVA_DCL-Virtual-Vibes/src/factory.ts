import { Entity, engine, Transform, GltfContainer, TransformType, AudioSource } from '@dcl/sdk/ecs'

// import glft factory
export function createGLTF(transform: Partial<TransformType>, src: string): Entity {
  const meshEntity = engine.addEntity()
  Transform.create(meshEntity, transform)
  // set gltf
  GltfContainer.create(meshEntity, { src })

  return meshEntity
}

// play sound
export function playSound(soundPath: string, volume?: number, transform?: Partial<TransformType>) {
  const soundEntity = engine.addEntity()
  AudioSource.create(soundEntity, {
    audioClipUrl: soundPath,
    loop: true,
    playing: true,
    volume: volume
  })
  Transform.create(soundEntity, transform)
}
