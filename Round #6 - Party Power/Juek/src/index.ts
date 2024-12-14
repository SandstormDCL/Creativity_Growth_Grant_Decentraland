// We define the empty imports so the auto-complete feature works as expected.
import { Quaternion, Vector3 } from '@dcl/sdk/math'
import { engine, GltfContainer, Material, MeshRenderer, Scale, Transform, VideoPlayer } from '@dcl/sdk/ecs'

import { changeColorSystem, circularSystem } from './systems'
import { setupUi } from './ui'


const main_scene = engine.addEntity()

Transform.create(main_scene,{
  position: Vector3.create(26,0,30),
  scale: Vector3.create(1,1,1)
});

GltfContainer.create(main_scene,{
  src:"models/DCL_PArty.glb"
});

const screen = engine.addEntity()

MeshRenderer.setPlane(screen)

Transform.create(screen, { 
  position: { x: 18.6, y: 5, z: 22},
  scale: Vector3.create(10.7,6,7), 
  rotation: Quaternion.fromEulerDegrees(0,-130,0)
})

VideoPlayer.create(screen,{
  src:"videos/Pary.mp4",
  playing:true,
  loop:true
})

const video_texture = Material.Texture.Video({videoPlayerEntity:screen})

Material.setBasicMaterial(screen,{
  texture:video_texture,
})