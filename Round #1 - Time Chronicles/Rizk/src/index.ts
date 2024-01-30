// /*
//   IMPORTANT: The tsconfig.json has been configured to include "node_modules/cannon/build/cannon.js"
//   Code is adapted from: https://github.com/schteppe/cannon.js/blob/master/examples/threejs_mousepick.html
// */

import { _inputSystem, setupMarker, updateMarkerSystem } from './marker'
import { createBoxBody, setupCannon, updatePhysicsSystem } from './world'



import {
  Animator,
  AudioSource,
  AvatarAttach,
  engine,
  GltfContainer,
  Material,
  MeshRenderer,
  NftShape,
  pointerEventsSystem,
  Transform,
  VideoPlayer,
  VisibilityComponent,
} from '@dcl/sdk/ecs'
import {  Quaternion, Vector3 } from "@dcl/sdk/math"

import { initAssetPacks } from '@dcl/asset-packs/dist/scene-entrypoint'

import { createBasicDanceArea } from './autoDance'



initAssetPacks(engine, pointerEventsSystem, {
  Animator,
  AudioSource,
  AvatarAttach,
  Transform,
  VisibilityComponent,
  GltfContainer,
  Material: undefined,
  VideoPlayer: undefined
})





export function main() {
  // // Base scene


  setupCannon()
  setupMarker()

  createBoxBody(Vector3.create(48, 5, 7))
  createBoxBody(Vector3.create(62, 5, 27))
  createBoxBody(Vector3.create(69, 5, 54))
  createBoxBody(Vector3.create(67, 5, 75))
  createBoxBody(Vector3.create(14, 5, 41))
  createBoxBody(Vector3.create(16, 5, 47))
  createBoxBody(Vector3.create(16, 5, 82))
  createBoxBody(Vector3.create(8.5, 5, 4))


  engine.addSystem(updatePhysicsSystem)
  engine.addSystem(updateMarkerSystem)
  engine.addSystem(_inputSystem)

  let part22 = engine.addEntity()
  Transform.create(part22,{
      position:Vector3.create(40,0.01,48)
  })
  GltfContainer.create(part22,{src:"models/new_2023C.glb"})

  let part33 = engine.addEntity()
  Transform.create(part33,{
      position:Vector3.create(40,0.01,48)
  })
  GltfContainer.create(part33,{src:"models/new_2023D.glb"})

  const nftPictureFrame = engine.addEntity()

  Transform.create(nftPictureFrame, {
    position: Vector3.create(45, 2.5, 78.9),rotation:Quaternion.fromEulerDegrees(0,-82.9,0),scale:Vector3.create(3.75,3.75,3.75)
  })
  
  NftShape.create(nftPictureFrame, {
    urn: 'urn:decentraland:ethereum:erc721:0x10daa9f4c0f985430fde4959adb2c791ef2ccf83:10004',
  })


  const nftPictureFrame4 = engine.addEntity()

  Transform.create(nftPictureFrame4, {
    position: Vector3.create(43, 2.5, 71.5),rotation:Quaternion.fromEulerDegrees(0,-82.9,0),scale:Vector3.create(3.75,3.75,3.75)
  })
  
  NftShape.create(nftPictureFrame4, {
    urn: 'urn:decentraland:ethereum:erc721:0x10daa9f4c0f985430fde4959adb2c791ef2ccf83:2',
  })


  const nftPictureFrame6 = engine.addEntity()

  Transform.create(nftPictureFrame6, {
    position: Vector3.create(38.5, 2.5, 64),rotation:Quaternion.fromEulerDegrees(0,-45,0),scale:Vector3.create(3.75,3.75,3.75)
  })
  
  NftShape.create(nftPictureFrame6, {
    urn: 'urn:decentraland:ethereum:erc721:0x10daa9f4c0f985430fde4959adb2c791ef2ccf83:1',
  })

  const nftPictureFrame8 = engine.addEntity()

  Transform.create(nftPictureFrame8, {
    position: Vector3.create(32.5, 2.5, 59),rotation:Quaternion.fromEulerDegrees(0,-40,0),scale:Vector3.create(3.75,3.75,3.75)
  })
  
  NftShape.create(nftPictureFrame8, {
    urn: 'urn:decentraland:ethereum:erc721:0x096de8baf03ed34790b4ce3c595b767cff517b6f:14',
  })

  const nftPictureFrame10 = engine.addEntity()

  Transform.create(nftPictureFrame10, {
    position: Vector3.create(26.5, 2.5, 54),rotation:Quaternion.fromEulerDegrees(0,-40,0),scale:Vector3.create(3.75,3.75,3.75)
  })
  
  NftShape.create(nftPictureFrame10, {
    urn: 'urn:decentraland:ethereum:erc721:0xb662f710ef01fc47e7c047fe85d309033e080f41:11',
  })

  const nftPictureFrame11 = engine.addEntity()

  Transform.create(nftPictureFrame11, {
    position: Vector3.create(24, 2.5, 47.5),rotation:Quaternion.fromEulerDegrees(0,-78,0),scale:Vector3.create(3.75,3.75,3.75)
  })
  
  NftShape.create(nftPictureFrame11, {
    urn: 'urn:decentraland:ethereum:erc721:0x3fd36d72f05fb1af76ee7ce9257ca850faba91ed:3689',
  })

  const nftPictureFrame13 = engine.addEntity()

  Transform.create(nftPictureFrame13, {
    position: Vector3.create(23, 2.5, 38.5),rotation:Quaternion.fromEulerDegrees(0,-78,0),scale:Vector3.create(3.75,3.75,3.75)
  })
  
  NftShape.create(nftPictureFrame13, {
    urn: 'urn:decentraland:ethereum:erc721:0x3fd36d72f05fb1af76ee7ce9257ca850faba91ed:1510',
  })

  const nftPictureFrame15 = engine.addEntity()

  Transform.create(nftPictureFrame15, {
    position: Vector3.create(22, 2.5, 31),rotation:Quaternion.fromEulerDegrees(0,-78,0),scale:Vector3.create(3.75,3.75,3.75)
  })
  
  NftShape.create(nftPictureFrame15, {
    urn: 'urn:decentraland:ethereum:erc721:0xb662f710ef01fc47e7c047fe85d309033e080f41:18',
  })

  const nftPictureFrame33 = engine.addEntity()

  Transform.create(nftPictureFrame33, {
    position: Vector3.create(57.5, 2.5, 75.5),rotation:Quaternion.fromEulerDegrees(0,110,0),scale:Vector3.create(3.75,3.75,3.75)
  })
  
  NftShape.create(nftPictureFrame33, {
    urn: 'urn:decentraland:ethereum:erc721:0x3fd36d72f05fb1af76ee7ce9257ca850faba91ed:1008',
  })

  const nftPictureFrame31 = engine.addEntity()

  Transform.create(nftPictureFrame31, {
    position: Vector3.create(54.5, 2.5, 67),rotation:Quaternion.fromEulerDegrees(0,110,0),scale:Vector3.create(3.75,3.75,3.75)
  })
  
  NftShape.create(nftPictureFrame31, {
    urn: 'urn:decentraland:ethereum:erc721:0x3fd36d72f05fb1af76ee7ce9257ca850faba91ed:1007',
  })

  const nftPictureFrame29 = engine.addEntity()

  Transform.create(nftPictureFrame29, {
    position: Vector3.create(51, 2.5, 58),rotation:Quaternion.fromEulerDegrees(0,145,0),scale:Vector3.create(3.75,3.75,3.75)
  })
  
  NftShape.create(nftPictureFrame29, {
    urn: 'urn:decentraland:ethereum:erc721:0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270:216000723',
  })

  const nftPictureFrame27 = engine.addEntity()

  Transform.create(nftPictureFrame27, {
    position: Vector3.create(43.5, 2.5, 54),rotation:Quaternion.fromEulerDegrees(0,145,0),scale:Vector3.create(3.75,3.75,3.75)
  })
  
  NftShape.create(nftPictureFrame27, {
    urn: 'urn:decentraland:ethereum:erc721:0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270:216000055',
  })

  const nftPictureFrame24 = engine.addEntity()

  Transform.create(nftPictureFrame24, {
    position: Vector3.create(36, 2.5, 50),rotation:Quaternion.fromEulerDegrees(0,145,0),scale:Vector3.create(3.75,3.75,3.75)
  })
  
  NftShape.create(nftPictureFrame24, {
    urn: 'urn:decentraland:ethereum:erc721:0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270:216000719',
  })

  const nftPictureFrame20 = engine.addEntity()

  Transform.create(nftPictureFrame20, {
    position: Vector3.create(29, 2.5, 42.5),rotation:Quaternion.fromEulerDegrees(0,101,0),scale:Vector3.create(3.75,3.75,3.75)
  })
  
  NftShape.create(nftPictureFrame20, {
    urn: 'urn:decentraland:ethereum:erc721:0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270:216000100',
  })

  const nftPictureFrame19 = engine.addEntity()

  Transform.create(nftPictureFrame19, {
    position: Vector3.create(26, 2.5, 32.5),rotation:Quaternion.fromEulerDegrees(0,101,0),scale:Vector3.create(3.75,3.75,3.75)
  })
   
  NftShape.create(nftPictureFrame19, {
    urn: 'urn:decentraland:ethereum:erc721:0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270:216000101',
  })

  const nftPictureFrame21 = engine.addEntity()

  Transform.create(nftPictureFrame21, {
    position: Vector3.create(27, 2.5, 25.5),rotation:Quaternion.fromEulerDegrees(0,65,0),scale:Vector3.create(3.75,3.75,3.75)
  })
  
  NftShape.create(nftPictureFrame21, {
    urn: 'urn:decentraland:ethereum:erc721:0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270:216000112',
  })

  const nftPictureFrame23 = engine.addEntity()

  Transform.create(nftPictureFrame23, {
    position: Vector3.create(30.5, 2.5, 18.5),rotation:Quaternion.fromEulerDegrees(0,65,0),scale:Vector3.create(2.7,2.7,2.7)
  })
  
  NftShape.create(nftPictureFrame23, {
    urn: 'urn:decentraland:ethereum:erc721:0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270:216000110',
  })

  const nftPictureFrame43 = engine.addEntity()

  Transform.create(nftPictureFrame43, {
    position: Vector3.create(20, 4, 39),rotation:Quaternion.fromEulerDegrees(0,-80,0),scale:Vector3.create(3.5,3.5,3.5)
  })
  
  NftShape.create(nftPictureFrame43, {
    urn: 'urn:decentraland:ethereum:erc721:0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270:216000117',
  })

  const nftPictureFrame41 = engine.addEntity()

  Transform.create(nftPictureFrame41, {
    position: Vector3.create(21, 4, 47),rotation:Quaternion.fromEulerDegrees(0,-80,0),scale:Vector3.create(3.5,3.5,3.5)
  })
  
  NftShape.create(nftPictureFrame41, {
    urn: 'urn:decentraland:ethereum:erc721:0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270:216000121',
  })

  const nftPictureFrame39 = engine.addEntity()

  Transform.create(nftPictureFrame39, {
    position: Vector3.create(22.5, 4.4, 55),rotation:Quaternion.fromEulerDegrees(0,-45,0),scale:Vector3.create(3.5,3.5,3.5)
  })
  
  NftShape.create(nftPictureFrame39, {
    urn: 'urn:decentraland:ethereum:erc721:0xb662f710ef01fc47e7c047fe85d309033e080f41:1',
  })

  const nftPictureFrame37 = engine.addEntity()

  Transform.create(nftPictureFrame37, {
    position: Vector3.create(28.5, 4.4, 60),rotation:Quaternion.fromEulerDegrees(0,-45,0),scale:Vector3.create(3.5,3.5,3.5)
  })
  
  NftShape.create(nftPictureFrame37, {
    urn: 'urn:decentraland:ethereum:erc721:0x4c7895f454173e976004bda6db1a379a15ebf49e:1',
  })



  const nftPictureFrame35 = engine.addEntity()

  Transform.create(nftPictureFrame35, {
    position: Vector3.create(35, 4.4, 65.5),rotation:Quaternion.fromEulerDegrees(0,-45,0),scale:Vector3.create(3.5,3.5,3.5)
  })
  
  NftShape.create(nftPictureFrame35, {
    urn: 'urn:decentraland:ethereum:erc721:0x4c7895f454173e976004bda6db1a379a15ebf49e:2',
  })



  const nftPictureFrame34 = engine.addEntity()

  Transform.create(nftPictureFrame34, {
    position: Vector3.create(39, 4.4, 71),rotation:Quaternion.fromEulerDegrees(0,-72,0),scale:Vector3.create(3.5,3.5,3.5)
  })
  
  NftShape.create(nftPictureFrame34, {
    urn: 'urn:decentraland:ethereum:erc721:0x4c7895f454173e976004bda6db1a379a15ebf49e:3',
  })



  const nftPictureFrame17 = engine.addEntity()

  Transform.create(nftPictureFrame17, {
    position: Vector3.create(42.5, 5, 39.5),rotation:Quaternion.fromEulerDegrees(0,110,0),scale:Vector3.create(3.75,3.75,3.75)
  })
  
  NftShape.create(nftPictureFrame17, {
    urn: 'urn:decentraland:ethereum:erc721:0x4c7895f454173e976004bda6db1a379a15ebf49e:5',
  })



  const nftPictureFrame18 = engine.addEntity()

  Transform.create(nftPictureFrame18, {
    position: Vector3.create(40, 5, 34.5),rotation:Quaternion.fromEulerDegrees(0,-115,0),scale:Vector3.create(3.75,3.75,3.75)
  })
  
  NftShape.create(nftPictureFrame18, {
    urn: 'urn:decentraland:ethereum:erc721:0xc9a16e8d9e41eaa51e200d9e24d9be81a05fba06:21',
  })


  const nftPictureFrame16 = engine.addEntity()

  Transform.create(nftPictureFrame16, {
    position: Vector3.create(40.5, 5,42),rotation:Quaternion.fromEulerDegrees(0,-10,0),scale:Vector3.create(3.75,3.75,3.75)
  })
  
  NftShape.create(nftPictureFrame16, {
    urn: 'urn:decentraland:ethereum:erc721:0xc9a16e8d9e41eaa51e200d9e24d9be81a05fba06:18',
  })




//////////////////////////////////////////////dance floor

createBasicDanceArea(Vector3.create(12.5, 1, 68), Vector3.create(23, 1,19))


////////////////////////////////////////////////////////////////////////////////////video 

//screen 

  // #1
  const screen = engine.addEntity()
  MeshRenderer.setPlane(screen)
  Transform.create(screen, 
    {
      
      position: { x: 6, y: 6, z: 66 },  scale: Vector3.create(11, 7, 11), rotation: Quaternion.fromEulerDegrees(0, -90, 0)
    }
  )


  // #2
  VideoPlayer.create(screen, {
    src: 'https://bafybeieb7wfh46yjzpbdwdqnbx4kiviiub4kihibcdhjt5td4gs5txglwi.ipfs.w3s.link/ipfs/bafybeieb7wfh46yjzpbdwdqnbx4kiviiub4kihibcdhjt5td4gs5txglwi/C1%20(1)%20(1).mp4',
    playing: true,
  })

  // #3
  const videoTexture = Material.Texture.Video({ videoPlayerEntity: screen })

  // #4
  Material.setPbrMaterial(screen, {
    texture: videoTexture,
    roughness: 1.0,
    specularIntensity: 0,
    metallic: 0,
  })




  
}
