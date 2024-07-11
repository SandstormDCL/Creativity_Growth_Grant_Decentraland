import * as utils from '@dcl-sdk/utils'
import {
  engine,
  Transform,
  MeshRenderer,
  VisibilityComponent,
  Animator,
  AudioSource,
  Entity,
  GltfContainer
} from '@dcl/sdk/ecs'
import { Quaternion, Vector3 } from '@dcl/sdk/math'

let isPlaying = false // Flag to track if the player is dancing

export function createPlayArea(
  position: Vector3,
  scale: Vector3,
  soundPath: string,
  modelPath: string,
  animClip: string,
  modelPath1: string,
  animClip1: string,
  modelPath2: string,
  animClip2: string
) {
  const danceAreaEntity = engine.addEntity()
  Transform.create(danceAreaEntity, {
    position: position,
    scale: scale
  })
  MeshRenderer.setBox(danceAreaEntity)

  VisibilityComponent.create(danceAreaEntity, { visible: false }) ////MAKE TRUE FOR DEBUG

  ////play sound
  const soundEntity = engine.addEntity()
  AudioSource.create(soundEntity, {
    audioClipUrl: soundPath,
    loop: true,
    playing: false,
    volume: 1
  })
  Transform.create(soundEntity, { position: position })

  // Define a play function
  function playSound(entity: Entity) {
    // fetch mutable version of audio source component
    const audioSource = AudioSource.getMutable(entity)
    // modify its playing value
    audioSource.playing = true
  }
  // Define a stop function
  function stopSound(entity: Entity) {
    // fetch mutable version of audio source component
    const audioSource = AudioSource.getMutable(entity)
    audioSource.playing = false
  }

  ////Fetch an animation from model - Wave Bottom
  const AnimatedEntity = engine.addEntity()
  GltfContainer.create(AnimatedEntity, { src: modelPath })
  Transform.create(AnimatedEntity, { position: position })
  Animator.create(AnimatedEntity, {
    states: [{ clip: animClip, loop: true }]
  })
  ////Fetch an animation from model - Wave Top - T
  const AnimatedEntityT = engine.addEntity()
  GltfContainer.create(AnimatedEntityT, { src: modelPath })
  Transform.create(AnimatedEntityT, {
    position: Vector3.create(0, 3, 0),
    rotation: Quaternion.fromEulerDegrees(0, 120, 0),
    parent: AnimatedEntity
  })
  Animator.create(AnimatedEntityT, {
    states: [{ clip: animClip, loop: true }]
  })
  ////Fetch an animation from model - base - 1
  const AnimatedEntity1 = engine.addEntity()
  GltfContainer.create(AnimatedEntity1, { src: modelPath1 })
  Transform.create(AnimatedEntity1, {
    position: Vector3.create(0, 1.5, 0),
    parent: AnimatedEntity
  })
  Animator.create(AnimatedEntity1, {
    states: [{ clip: animClip1, loop: true }]
  })
  ////Fetch an animation from model - base - 2
  const AnimatedEntity2 = engine.addEntity()
  GltfContainer.create(AnimatedEntity2, { src: modelPath2 })
  Transform.create(AnimatedEntity2, {
    position: Vector3.create(0, 1.5, 0),
    parent: AnimatedEntity
  })
  Animator.create(AnimatedEntity2, {
    states: [{ clip: animClip2, loop: true }]
  })

  ////trigger play
  utils.triggers.addTrigger(
    danceAreaEntity,
    1,
    1,
    [{ type: 'box', scale: scale, position: Vector3.create(0, 0, 0) }],
    function (otherEntity) {
      if (!isPlaying) {
        isPlaying = true
        playSound(soundEntity)
        //play the animations
        Animator.playSingleAnimation(AnimatedEntity, animClip)
        Animator.playSingleAnimation(AnimatedEntityT, animClip)
        Animator.playSingleAnimation(AnimatedEntity1, animClip1)
        Animator.playSingleAnimation(AnimatedEntity2, animClip2)
        console.log('playing!')
      }
    },
    ////trigger stop
    function (otherEntity) {
      if (isPlaying) {
        isPlaying = false
        stopSound(soundEntity)
        //stop the animations
        Animator.stopAllAnimations(AnimatedEntity)
        Animator.stopAllAnimations(AnimatedEntityT)
        Animator.stopAllAnimations(AnimatedEntity1)
        Animator.stopAllAnimations(AnimatedEntity2)
        console.log('stopped!')
      }
    }
  )
}
