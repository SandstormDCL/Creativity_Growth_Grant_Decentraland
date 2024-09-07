import { Animator, Entity, GltfContainer, InputAction, Transform, engine, pointerEventsSystem } from '@dcl/sdk/ecs'
import { PlaylistPlayer } from './playlistPlayer'
import { Vector3 } from '@dcl/sdk/math'
import { syncEntity } from '@dcl/sdk/network'

interface ButtonOptions {
  parent: Entity
  modelPath: string
  hoverText: string
  animation: string
  sync: boolean
  onClick: () => void
}

export interface ButtonConfig {
  modelPath: string
  hoverText: string
  animation: string
  action: (playlistPlayer: PlaylistPlayer) => void
}

let buttonEnumId = 200 // This is used as ID for syncEntity()

export function createPlaylistButtons(playlistPlayer: PlaylistPlayer, parent: Entity, buttonConfigs: ButtonConfig[]) {
  const sync = playlistPlayer.isSynced()

  buttonConfigs.forEach((config) => {
    createButton({
      parent: parent,
      modelPath: config.modelPath,
      hoverText: config.hoverText,
      animation: config.animation,
      sync: sync,
      onClick: () => config.action(playlistPlayer)
    })
  })
}

function createButton(options: ButtonOptions): Entity {
  const { parent, modelPath, hoverText, animation, sync, onClick } = options

  const button = engine.addEntity()

  GltfContainer.create(button, {
    src: modelPath
  })

  Transform.create(button, {
    parent: parent
  })

  Animator.create(button, {
    states: [
      {
        clip: animation,
        playing: true,
        loop: false
      }
    ]
  })

  if (sync) {
    syncEntity(button, [Animator.componentId], buttonEnumId++)
  }

  pointerEventsSystem.onPointerDown(
    {
      entity: button,
      opts: {
        button: InputAction.IA_POINTER,
        hoverText: hoverText
      }
    },
    function () {
      console.log('Clicked button: ' + hoverText)
      Animator.playSingleAnimation(button, animation)
      onClick()
    }
  )
  return button
}
