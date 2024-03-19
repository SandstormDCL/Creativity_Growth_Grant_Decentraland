import { Entity, GltfContainer, MeshCollider, Transform, engine } from '@dcl/sdk/ecs'
import * as utils from '@dcl-sdk/utils'
import { sharedState } from './sharedState'
import { GameState } from './ui'
import { CoinCollect } from './soundManager'

var coinsCollected = 0
const collectableCoins = 5

var Coin1: Entity
var Coin2: Entity
var Coin3: Entity
var Coin4: Entity
var Coin5: Entity

export function EndCoinGame() {
  coinsCollected = 0
  engine.removeEntity(Coin1)
  engine.removeEntity(Coin2)
  engine.removeEntity(Coin3)
  engine.removeEntity(Coin4)
  engine.removeEntity(Coin5)
}

export function SetupCoins() {
  Coin1 = engine.addEntity()

  GltfContainer.create(Coin1, {
    src: 'models/Coin.glb'
  })

  Transform.create(Coin1, {
    position: { x: 25, y: 3, z: 9 },
    scale: { x: 0.25, y: 0.25, z: 0.25 }
  })
  MeshCollider.deleteFrom(Coin1)
  utils.triggers.addTrigger(Coin1, utils.NO_LAYERS, utils.LAYER_1, [{ type: 'box' }], function (otherEntity) {
    console.log(`triggered by ${otherEntity}!`)
    Collected()
    sharedState.UpdateCoins(coinsCollected)
    engine.removeEntity(Coin1)
  })

  Coin2 = engine.addEntity()

  GltfContainer.create(Coin2, {
    src: 'models/Coin.glb'
  })

  Transform.create(Coin2, {
    position: { x: 32, y: 3, z: 58 },
    scale: { x: 0.25, y: 0.25, z: 0.25 }
  })
  MeshCollider.deleteFrom(Coin2)
  utils.triggers.addTrigger(Coin2, utils.NO_LAYERS, utils.LAYER_1, [{ type: 'box' }], function (otherEntity) {
    console.log(`triggered by ${otherEntity}!`)
    Collected()
    sharedState.UpdateCoins(coinsCollected)
    engine.removeEntity(Coin2)
  })

  Coin3 = engine.addEntity()

  GltfContainer.create(Coin3, {
    src: 'models/Coin.glb'
  })

  Transform.create(Coin3, {
    position: { x: 26, y: 3, z: 36 },
    scale: { x: 0.25, y: 0.25, z: 0.25 }
  })
  MeshCollider.deleteFrom(Coin3)
  utils.triggers.addTrigger(Coin3, utils.NO_LAYERS, utils.LAYER_1, [{ type: 'box' }], function (otherEntity) {
    console.log(`triggered by ${otherEntity}!`)
    Collected()
    sharedState.UpdateCoins(coinsCollected)
    engine.removeEntity(Coin3)
  })

  Coin4 = engine.addEntity()

  GltfContainer.create(Coin4, {
    src: 'models/Coin.glb'
  })

  Transform.create(Coin4, {
    position: { x: 10, y: 3, z: 38 },
    scale: { x: 0.25, y: 0.25, z: 0.25 }
  })
  MeshCollider.deleteFrom(Coin4)
  utils.triggers.addTrigger(Coin4, utils.NO_LAYERS, utils.LAYER_1, [{ type: 'box' }], function (otherEntity) {
    console.log(`triggered by ${otherEntity}!`)
    Collected()
    sharedState.UpdateCoins(coinsCollected)
    engine.removeEntity(Coin4)
  })

  Coin5 = engine.addEntity()

  GltfContainer.create(Coin5, {
    src: 'models/Coin.glb'
  })

  Transform.create(Coin5, {
    position: { x: 60, y: 2, z: 37 },
    scale: { x: 0.25, y: 0.25, z: 0.25 }
  })
  MeshCollider.deleteFrom(Coin5)
  utils.triggers.addTrigger(Coin5, utils.NO_LAYERS, utils.LAYER_1, [{ type: 'box' }], function (otherEntity) {
    console.log(`triggered by ${otherEntity}!`)
    Collected()
    sharedState.UpdateCoins(coinsCollected)
    engine.removeEntity(Coin5)
  })
}

function Collected() {
  CoinCollect()
  if (coinsCollected >= collectableCoins) {
    EndCoinGame()
    sharedState.ChangeState(GameState.Idle)
    sharedState.GoIdle()
    return
  }
  coinsCollected++
  if (coinsCollected == collectableCoins) {
    EndCoinGame()
    sharedState.ChangeState(GameState.Idle)
    sharedState.GoIdle()
  }
}
