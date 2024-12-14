import { Animator, ColliderLayer, InputAction, AudioSource, GltfContainer, Transform, VideoPlayer, engine, pointerEventsSystem, PointerEventType, PointerEvents, TextShape, Billboard, Entity, UiTransform, Material,} from '@dcl/sdk/ecs';
import { Quaternion, Vector3, Color4 } from '@dcl/sdk/math';
import * as utils from '@dcl-sdk/utils';
import { setupUi } from './setupUI';
import * as npc from 'dcl-npc-toolkit'
import { movePlayerTo } from '~system/RestrictedActions'
import { Dialog, NpcUtilsUi } from  'dcl-npc-toolkit'
import { Mirror } from './mirror'
import { Selector } from './selector'
import { redrawRays } from './reflectedRay'

let pieSpawned = false; // Flag to track if Pie has been spawned

export function main() {
    // Base
    const base = engine.addEntity();
    GltfContainer.create(base, { src: "models/base 1.glb" });
    Transform.create(base, { position: Vector3.create(24, 0, 24) });

    // Checker Base
    const checkerbase = engine.addEntity();
    GltfContainer.create(checkerbase, {src: "models/baseCheckered.glb"})
    Transform.create(checkerbase, {position: Vector3.create(14,9,9)})
  
    //------------------ Card Quest----------------------
    const cards = [
      { position: Vector3.create(24, 0, 24), model: 'models/Card 1.glb' },
      { position: Vector3.create(24, 0, 24), model: 'models/Card 2.glb' },
      { position: Vector3.create(24, 0, 24), model: 'models/Card 3.glb' },
    ];
  
    cards.forEach((card, index) => {
      const shapeEntity = engine.addEntity();
      Transform.create(shapeEntity, { position: card.position });
      GltfContainer.create(shapeEntity, { src: card.model });
  
      pointerEventsSystem.onPointerDown(
        {
          entity: shapeEntity,
          opts: {
            button: InputAction.IA_PRIMARY,
            hoverText: 'Collect Card'
          }
        },
        function (cmd) {
          engine.removeEntity(shapeEntity);
          // Call collectedShape function
          collectedShape();
  
          const successMessage = engine.addEntity();
          TextShape.create(successMessage, {
            fontSize: 3,
            text: 'Card Collected!'
          });
          Transform.create(successMessage, { position: card.position });
          Billboard.create(successMessage);
          utils.timers.setTimeout(() => {
            engine.removeEntity(successMessage);
          }, 5000);
  
          // Check if all cards are collected
          if (getCollectedShapes() === getTotalShapes()) {
            showPie();
          }
        }
      );
    });
  
    //------------------ Sweets and Gates ----------------------
    const sweets = [
      { name: 'Candy', position: Vector3.create(24, 0, 24), model: 'models/Candy.glb' },
      { name: 'Lollipop', position: Vector3.create(24, 0, 24), model: 'models/Lollipop.glb' },
      { name: 'Muffin', position: Vector3.create(24, 0, 24), model: 'models/Muffin.glb' },
    ];
  
    const gates = [
      { name: 'GateYellow', position: Vector3.create(24, 0, 24), model: 'models/GateYellow.glb' },
      { name: 'GatePink', position: Vector3.create(24, 0, 24), model: 'models/GatePink.glb' },
      { name: 'GateRed', position: Vector3.create(24, 0, 24), model: 'models/GateRed.glb' },
    ];
  
    // Create gate entities
    const gateEntities: Entity[] = [];
    gates.forEach((gate, index) => {
      const gateEntity = engine.addEntity();
      Transform.create(gateEntity, { position: gate.position });
      GltfContainer.create(gateEntity, { src: gate.model });
      gateEntities.push(gateEntity);
  
      pointerEventsSystem.onPointerDown(
        {
          entity: gateEntity,
          opts: {
            button: InputAction.IA_PRIMARY,
            hoverText: 'Collect sweets to unlock the gates',
          },
        },
        () => { }
      );
    });
  
    // Loop through the sweets to create them and set up interactions
    sweets.forEach((sweet, index) => {
      const sweetEntity = engine.addEntity();
      Transform.create(sweetEntity, { position: sweet.position });
      GltfContainer.create(sweetEntity, { src: sweet.model });
  
      // Add interaction to collect sweets and open gates
      pointerEventsSystem.onPointerDown(
        {
          entity: sweetEntity,
          opts: {
            button: InputAction.IA_PRIMARY,
            hoverText: 'Collect',
          },
        },
        () => {
          engine.removeEntity(sweetEntity);
          openGate(gateEntities[index]);
        }
      );
    });


    //-----------------------------------NPC Quest Giver-----------------------------//

	let Doughnut = npc.create(
		{
		  position: Vector3.create(16, 2.2, 46),
		  rotation: Quaternion.fromEulerDegrees(0, 180, 0),
		  scale: Vector3.create(1, 1, 1)
		},
		{
		  type: npc.NPCType.CUSTOM,
		  model: {
			src: 'models/Doughnut.glb'
		  },
		  faceUser: true,
		  reactDistance:  3,
		  onActivate: () => {
			
			  npc.talk(Doughnut, DoughnutDialog)
			
		  },
		  continueOnWalkAway: false
		}
	  )
	

	
	  let DoughnutDialog: Dialog[] = [
	  {
	  text: 'Hello, can you help me rescue our king?',
	  isEndOfDialog: false,
	  },
	  {
		text: 'Salts have attacked this place and have captured our king on the second floor.',
		isEndOfDialog: false,
	  },
	  {
		text: 'To reach second floor, you have to gather all 4 cards from each room.',
		isEndOfDialog: false,
	  },
	  {
		text: 'But doors are closed, so you have to find the correct combination of sweets to open them.',
		isEndOfDialog: false,
	  },
	
	  {
		text: 'Please help us save our king!',
		isEndOfDialog: true,
	  },
	
	  ]
		
 	




    //------------------------MIRROR PUZZLE-------------------------//
      // Mirrors
    //#region
    
      // Boundaries
  const boundaries = engine.addEntity()
  GltfContainer.create(boundaries, {src: 'models/boundaries.glb'})
  Transform.create(boundaries, {position: Vector3.create(14, 9, 9)})
    
  // mirrorA
    new Mirror({
      selectorModelPath: 'models/mirrorSelector.glb',
      mirrorModelPath: 'models/mirrorScaledColliders.glb',
      position: Vector3.create(15.5, 9, 20.5)
    })

    // mirrorB
    new Mirror({
      selectorModelPath: 'models/mirrorSelector.glb',
      mirrorModelPath: 'models/mirrorScaledColliders.glb',
      position: Vector3.create(28.5, 9, 15.5)
    })
    // mirrorC
    new Mirror({
      selectorModelPath: 'models/mirrorSelector.glb',
      mirrorModelPath: 'models/mirrorScaledColliders.glb',
      position: Vector3.create(15.5, 9, 27.5)
    })

    // mirrorD
    new Mirror({
      selectorModelPath: 'models/mirrorSelector.glb',
      mirrorModelPath: 'models/mirrorScaledColliders.glb',
      position: Vector3.create(28.5, 9, 35.5)
    })
    //#endregion

    new Selector()

    redrawRays()


    //--------------------------------MIRROR PUZZLE END-------------------------//


}
  


// Function to open the gate
function openGate(gateEntity: Entity) {
    Transform.getMutable(gateEntity).position.y = -10; // Example: move the gate down
}
  
// Function to show the pie model
function showPie() {
    // Check if Pie is already spawned
    if (!pieSpawned) {
        const playerPos = utils.getPlayerPosition();
        const pieEntity = engine.addEntity();
        GltfContainer.create(pieEntity, { src: 'models/Pie.glb' });
        Transform.create(pieEntity, { position: Vector3.create(playerPos.x, playerPos.y, playerPos.z) }); // Position at player's current location
    
        // Update the flag to indicate that Pie is now spawned
        pieSpawned = true;
    
        // Move the player to the specified position
        movePlayerTo({ newRelativePosition: Vector3.create(27, 11, 41) });
    } else {
        console.log("Pie has already been spawned.");
    }
}
 



let collectedShapes = 0;
export function getCollectedShapes() {
    return collectedShapes;
}
function collectedShape() {
    collectedShapes++;
}
let totalShapes = 3;
export function getTotalShapes() {
    return totalShapes;
}

setupUi()