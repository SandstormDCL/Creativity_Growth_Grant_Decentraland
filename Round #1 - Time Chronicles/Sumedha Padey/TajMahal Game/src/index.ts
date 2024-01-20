import {
  engine,
  GltfContainer,
  Entity,
  InputAction,
  Transform,
  TextShape,
  pointerEventsSystem,
  Billboard,
  MeshRenderer,
  VideoPlayer,
  Material,
  AudioSource,
  AudioStream,
} from '@dcl/sdk/ecs'
import { Quaternion, Vector3, Color4 } from '@dcl/sdk/math'
import * as utils from '@dcl-sdk/utils'
import  *  as  npc  from  'dcl-npc-toolkit'
import { Dialog, NpcUtilsUi } from  'dcl-npc-toolkit'
import { setupUi } from './setupUI'



export function main() {
 

  // Base
  const base = engine.addEntity()
  GltfContainer.create(base, { src: `models/TAJ.glb` })
  Transform.create(base, { position: Vector3.create(64, 0.1, 64) })








    //-------------------------GATE QUEST--------------//

      // Create entities for book, gate, and text
    const book = engine.addEntity()
    const gate = engine.addEntity()


    // Set initial positions for book and gate
    Transform.create(book, { position: Vector3.create(62, 5, 59), scale: Vector3.create(0.4, 0.4, 0.4) })
    Transform.create(gate, { position: Vector3.create(31.65, 0.05, 32.4) })

    // Add GLTF models to book and gate entities
    GltfContainer.create(book, { src: 'models/book.glb' })
    GltfContainer.create(gate, { src: 'models/Gate.glb' })



    // Set up a click event for the gate
    pointerEventsSystem.onPointerDown(
      {
        entity: gate,
        opts: {
          button: InputAction.IA_PRIMARY,
          hoverText: 'OPEN GATE'
        }
        
      },
      function (cmd) {
        // Display the message
        const gateMessage = engine.addEntity()
        const gateText = TextShape.create(gateMessage, {
          fontSize: 2,
          textColor: Color4.Red(),
          text: 'Collect books to unlock the Gate!'
        })
        Transform.create(gateMessage, { 
          position: Vector3.create(43.5, 3, 31.8), 
          rotation: Quaternion.fromEulerDegrees(0, 90, 0)})

        utils.timers.setTimeout(function () {
          engine.removeEntity(gateMessage)
        }, 10000)
      }
    )



    // Set up a click event for the book
    pointerEventsSystem.onPointerDown(
      {
        entity: book,
        opts: {
          button: InputAction.IA_PRIMARY,
          hoverText: 'PICK BOOK'
        }
      },
      function (cmd) {
        // Remove book and gate entities
        engine.removeEntity(book)
        engine.removeEntity(gate)

        // Display the success message
        const successMessage = engine.addEntity()
        const successText = TextShape.create(successMessage, {
          fontSize: 3,
          text: 'Gates are unlocked!'
        })
        Transform.create(successMessage, { position: Vector3.create(62, 5, 59) })

        utils.timers.setTimeout(function () {
          engine.removeEntity(successMessage)
        }, 10000)
      }
    )


    //-------------------------STONE--------------//

    // Create entities for stones and text
    const stone1 = engine.addEntity()
    const stone2 = engine.addEntity()
    const stone3 = engine.addEntity()
    const stone4 = engine.addEntity()
    const stone5 = engine.addEntity()

    // Create an array of stones
    const stones = [stone1, stone2, stone3, stone4, stone5]

    
    // Define positions
    const positions = [
      Vector3.create(51, 1, 55),
      Vector3.create(21, 1, 60),
      Vector3.create(60, 1, 8),
      Vector3.create(60, 1, 18),
      Vector3.create(60, 3, 47)
    ]

    // Loop through the stones
    for (let i = 0; i < stones.length; i++) {
      // Set initial position for stone
      Transform.create(stones[i], { position: positions[i] })

      // Add GLTF model to stone
      GltfContainer.create(stones[i], { src: `models/Stone_${i + 1}.glb` })

    // Set up a click event for the stone
    pointerEventsSystem.onPointerDown(
      {
        entity: stones[i],
        opts: {
          button: InputAction.IA_PRIMARY,
          hoverText: 'PICK STONE'
        }
      },
      function (cmd) {
        
        // Remove stone entity
        engine.removeEntity(stones[i])
      

        // Display the success message
        const stonesuccessMessage = engine.addEntity()
        const stonesuccessText = TextShape.create(stonesuccessMessage, {
          fontSize: 3,
          text: 'Stone picked!'
        })
        Transform.create(stonesuccessMessage, { position: positions[i] })

        // Add Billboard component to make the text always face the player
      Billboard.create(stonesuccessMessage)

        // Schedule the removal of the message entity after 10 seconds
        utils.timers.setTimeout(function () {
          engine.removeEntity(stonesuccessMessage)
          
        }, 10000)
        
        
      }
    )
    }


//-------------------------NPC--------------//

  let john = npc.create(
    {
      position: Vector3.create(10, 0.2, 10),
      rotation: Quaternion.fromEulerDegrees(0, 180, 0),
      scale: Vector3.create(1, 1, 1)
    },
    {
      type: npc.NPCType.CUSTOM,
      model: {
        src: 'models/NPC.glb'
      },
      faceUser: true,
      reactDistance:  3,
      onActivate: () => {
        
          npc.talk(john, johnDialog)
        
      },
      continueOnWalkAway: false
      // onWalkAway: () => {
      //   npc.closeDialogWindow(john)
      //   console.log('John on walk away function')
      // }
    }
  )





  let johnDialog: Dialog[] = [
  {
  text: 'Welcome to Taj Mahal, player! Let me tell you about this place.',
  isEndOfDialog: false,
  },
  {
    text: 'You stand before the majestic Taj Mahal, a marvel of Mughal architecture. Built by Emperor Shah Jahan in the 17th century, its a symbol of undying love.',
    isEndOfDialog: false,
  },
  {
    text: 'The construction spanned over two decades, involving artisans and craftsmen from across the empire.',
    isEndOfDialog: false,
  },
  {
    text: 'The Taj Mahal is a UNESCO World Heritage Site, recognized for its cultural significance. The mausoleum design is a fusion of Persian, Islamic, and Indian architectural styles, showcasing the rich cultural diversity of the Mughal Empire.',
    isEndOfDialog: false,
  },
  {
    text: 'The four minarets surrounding the main dome arent just decorative—they were strategically placed to protect the Taj from earthquakes.',
    isEndOfDialog: false,
  },
  {
    text: 'Many believe that Shah Jahan intended to build a second Taj Mahal in black marble across the river, but fate had other plans, and the idea remained unrealized.',
    isEndOfDialog: false,
  },
  {
    text: 'Collect the 5 stones to unlock the gate and find a way to enter the Taj Mahal and practice mindfullness.',
    isEndOfDialog: false,
  },
  {
    text: 'Good luck!',
    isEndOfDialog: true,
  },

  ]
      
   setupUi()





   //------------DISPLAY VIDEO----------------//

   // Screen
   const screen = engine.addEntity()
   MeshRenderer.setPlane(screen)
   Transform.create(screen, 
    { position: {x:30, y:3.5, z:2},
      scale: {x: 8, y: 3, z: 1},
      rotation: Quaternion.fromEulerDegrees(0, 180, 0), 
      })
   
   // #2
   VideoPlayer.create(screen, {
     src: "video/guitar.mp4",
     playing: true,
     volume: 0.1,
     loop: true,
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
