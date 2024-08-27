// We define the empty imports so the auto-complete feature works as expected.
import { } from '@dcl/sdk/math'
import { Animator, MeshRenderer, MeshCollider, InputAction, AudioSource, GltfContainer, Material, Transform, VideoPlayer, engine, pointerEventsSystem, TextShape, Billboard, Entity, UiTransform } from '@dcl/sdk/ecs'
import { Quaternion, Vector3, Color4 } from '@dcl/sdk/math'
import * as utils from '@dcl-sdk/utils'
import { Dialog, NpcUtilsUi } from  'dcl-npc-toolkit'
import  *  as  npc  from  'dcl-npc-toolkit'
import { setupUi,} from './setupUI'




export function main() {

	

	
    // Base
    const base = engine.addEntity()
    GltfContainer.create(base, { src: `models/base.glb` })
    Transform.create(base, { position: Vector3.create(48, 0, 48), 
    scale: Vector3.create(0.99,0.99,0.99)})
  
	//Planets
	const planet = engine.addEntity()
	GltfContainer.create(planet, { src: `models/planets.glb` })
	Transform.create(planet, { position: Vector3.create(48, 0, 48), 
	scale: Vector3.create(0.99,0.99,0.99)})

	//Clouds
	const clouds = engine.addEntity()
	GltfContainer.create(clouds, { src: `models/cloud1.glb` })
	Transform.create(clouds, { position: Vector3.create(48, 0, 48),
	scale: Vector3.create(0.99,0.99,0.99) })

	//Clouds2
	const clouds2 = engine.addEntity()
	GltfContainer.create(clouds2, { src: `models/cloud2.glb` })
	Transform.create(clouds2, { position: Vector3.create(48, 0, 48),
	scale: Vector3.create(0.99,0.99,0.99) })


	//Clouds3
	const clouds3 = engine.addEntity()
	GltfContainer.create(clouds3, { src: `models/cloud3.glb` })
	Transform.create(clouds3, { position: Vector3.create(48, 0, 48),
	scale: Vector3.create(0.99,0.99,0.99) })

	//Clouds4
	const clouds4 = engine.addEntity()
	GltfContainer.create(clouds4, { src: `models/cloud4.glb` })
	Transform.create(clouds4, { position: Vector3.create(48, 0, 48),
	scale: Vector3.create(0.99,0.99,0.99) })




  //----------------------VIDEO-----------------------//
  const videoPlayerEntity = engine.addEntity()
	VideoPlayer.create(videoPlayerEntity, {
		src: 'video/Main.mp4',
		playing: true,
		volume: 0.1
	})

	const screen = engine.addEntity()
	Transform.create(screen, {
		position: { x: 46.5, y: 8, z: 23 },
		scale: { x: 16, y: 8, z: 1 },
		rotation: Quaternion.fromEulerDegrees(0, 90, 0)
	})
	MeshRenderer.setPlane(screen)
	MeshCollider.setPlane(screen)
	Material.setBasicMaterial(screen, {
		texture: Material.Texture.Video({ videoPlayerEntity: videoPlayerEntity })
	})
	



	pointerEventsSystem.onPointerDown(
		{
			entity: screen,
			opts: {
				button: InputAction.IA_POINTER,
				hoverText: 'Play/pause'
			}
		},
		() => {
			const videoPlayer = VideoPlayer.getMutable(videoPlayerEntity)
			videoPlayer.playing = !videoPlayer.playing
		}
	)




	//-------------------------NPC-----------------------//

	let john = npc.create(
		{
		  position: Vector3.create(1.8, 3, 28),
		  rotation: Quaternion.fromEulerDegrees(0, 180, 0),
		  scale: Vector3.create(1, 1, 1)
		},
		{
		  type: npc.NPCType.CUSTOM,
		  model: {
			src: 'models/marsha.glb'
		  },
		  faceUser: true,
		  reactDistance:  3,
		  onActivate: () => {
			
			  npc.talk(john, johnDialog)
			
		  },
		  continueOnWalkAway: false
		}
	  )
	
	
	
	
	
	  let johnDialog: Dialog[] = [
	  {
	  text: 'Welcome to Celestial Symphony, player! Let me tell you about this place.',
	  isEndOfDialog: false,
	  },
	  {
		text: 'Its a palce to experience music and mindfulness.',
		isEndOfDialog: false,
	  },
	  {
		text: 'In the last events unfortunately the music was stolen and the place is in silence.',
		isEndOfDialog: false,
	  },
	  {
		text: 'Collect all the notes of music and complete the symphony.',
		isEndOfDialog: false,
	  },
	
	  {
		text: 'Good luck!',
		isEndOfDialog: true,
	  },
	
	  ]
		  
	   setupUi()






	//-----------------QUEST-----------------//
	
	const shapes = [
	  { position: Vector3.create(35, 8, 5), model: 'models/Notes_1.glb', sound: 'sounds/audio1.mp3' },
	  { position: Vector3.create(7, 5.2, 40.5), model: 'models/Notes_2.glb', sound: 'sounds/audio2.mp3' },
	  { position: Vector3.create(39, 8.3, 42), model: 'models/Notes_3.glb', sound: 'sounds/audio3.mp3' },
	  { position: Vector3.create(21, 11, 24), model: 'models/Notes_4.glb', sound: 'sounds/audio4.mp3' },
	  // Add more shapes here...
	]
	
	shapes.forEach((shape, index) => {
	  const shapeEntity = engine.addEntity()
	  Transform.create(shapeEntity, { position: shape.position })
	  GltfContainer.create(shapeEntity, { src: shape.model })
	
	  const sourceEntity = engine.addEntity()
	  AudioSource.create(sourceEntity, {
		playing: false,
		volume: 1,
		loop: false,
		audioClipUrl: shape.sound
	  })
	
	  pointerEventsSystem.onPointerDown(
		{
		  entity: shapeEntity,
		  opts: {
			button: InputAction.IA_PRIMARY,
			hoverText: 'Collect Note'
			
		  }
		},
		function (cmd) {
		  engine.removeEntity(shapeEntity)
		  const audioSource = AudioSource.getMutable(sourceEntity)
		  audioSource.playing = true
	
		  // Call collectedShape function
		  collectedShape()
	
		  const successMessage = engine.addEntity()
		  const successText = TextShape.create(successMessage, {
			fontSize: 3,
			text: 'Note Collected!'
		  })
		  Transform.create(successMessage, { position: shape.position })
		  Billboard.create(successMessage)
		  utils.timers.setTimeout(function () {
			engine.removeEntity(successMessage)
		  }, 5000)
		  utils.timers.setTimeout(function () {
			engine.removeEntity(sourceEntity)
		  }, 20000)
		}
	  )
	})
	
	

}


let collectedShapes = 0
export function getCollectedShapes() {
  return collectedShapes
}
function collectedShape(){
	collectedShapes++
}
let totalShapes = 4
export function getTotalShapes() {
  return totalShapes
}


