import { engine, GltfContainer, InputAction, Material, MeshCollider, MeshRenderer, pointerEventsSystem, Transform, VideoPlayer, VisibilityComponent } from '@dcl/sdk/ecs'
import { Quaternion, Vector3 } from '@dcl/sdk/math'
import { ShipShapes, SpawnerComponent, SpawnerShape } from './components/customComponents'

import { clickedSystem } from './systems/clickable'
import { enemySpawnSystem } from './systems/enemySpawner'
import { expire } from './systems/expire'
import { moveSystem } from './systems/moveEnemy'
import { setupUi } from './ui'
import { movePlayerTo } from '~system/RestrictedActions'

export function main() {
  // --- ground ---
  const ground = engine.addEntity()
  Transform.create(ground, {
   position: Vector3.create(40.1, 5.6, 40)
  })
  GltfContainer.create(ground, {
    src: 'models/1.glb'
  
  })
  
// --- ground2 ---
const ground2 = engine.addEntity()
Transform.create(ground2, {
  position: Vector3.create(40.1, 5.6, 40)  // Adjust the position as needed
})
GltfContainer.create(ground2, {
 src: 'models/2.glb'  // Use a different model if necessary
})

// --- ground3 ---
const ground3 = engine.addEntity()
Transform.create(ground3, {
  position: Vector3.create(40.1, 5.6, 40)  // Adjust the position as needed
})
GltfContainer.create(ground3, {
 src: 'models/3.glb'  // Use a different model if necessary
})


  // Portals
  const POSITION_Z = 75

  // --- green ---
  const greenPortal = engine.addEntity()
  Transform.create(greenPortal, {
    position: Vector3.create(55, 29, POSITION_Z)
  })
  GltfContainer.create(greenPortal, {
    src: 'models/greenPortal.glb'
  })
  SpawnerComponent.create(greenPortal, {
    enemyShape: ShipShapes.GREEN,
    size: 6,
    spawnerShape: SpawnerShape.TRIANGLE,
    timeToNextSpawn: 1
  })

  // --- blue ---
  const bluePortal = engine.addEntity()
  Transform.create(bluePortal, {
    position: Vector3.create(40, 29, POSITION_Z)
  })
  GltfContainer.create(bluePortal, {
    src: 'models/bluePortal.glb'
  })
  SpawnerComponent.create(bluePortal, {
    enemyShape: ShipShapes.BLUE,
    size: 6,
    spawnerShape: SpawnerShape.SQUARE,
    timeToNextSpawn: 1
  })

  // --- red ---
  const redPortal = engine.addEntity()
  Transform.create(redPortal, {
    position: Vector3.create(25, 29, POSITION_Z)
  })
  GltfContainer.create(redPortal, {
    src: 'models/redPortal.glb'
  })
  SpawnerComponent.create(redPortal, {
    enemyShape: ShipShapes.RED,
    size: 1,
    spawnerShape: SpawnerShape.CIRCLE,
    timeToNextSpawn: 1
  })


  
  // A Create the first cylinder entity ( go up G to first floor)
  const cylinder1 = engine.addEntity();
  MeshRenderer.setCylinder(cylinder1); 
  MeshCollider.setCylinder(cylinder1); 

  VisibilityComponent.create(cylinder1, { visible: false }) 

  Transform.create(cylinder1, {
    
    position: Vector3.create(39.9, 1.5, 2.7), scale: Vector3.create(1.3, 1.3, 0.2)
  });

  
  // Add pointer event handlers for both cylinders (you can customize them as needed)
  pointerEventsSystem.onPointerDown(
    {
      entity: cylinder1,
      opts: { button: InputAction.IA_POINTER, hoverText: 'Go Up', maxDistance: 6  },
    },
    function () {
      // Respawn player for the first cylinder
      movePlayerTo({
        newRelativePosition: Vector3.create(40, 23, 4),
        cameraTarget: Vector3.create(40, 19, 40),
      });
    }
  )
  
    // B left Create the first cylinder entity ( go up G to first floor)
    const cylinder2 = engine.addEntity();
    MeshRenderer.setCylinder(cylinder2); 
    MeshCollider.setCylinder(cylinder2); 
  
    VisibilityComponent.create(cylinder2, { visible: false }) 
  
    Transform.create(cylinder2, {
      
      position: Vector3.create(2.5, 1.5, 40.5), scale: Vector3.create(0.2, 1.3, 1.3)
    });
  
    
    // Add pointer event handlers for both cylinders (you can customize them as needed)
    pointerEventsSystem.onPointerDown(
      {
        entity: cylinder2,
        opts: { button: InputAction.IA_POINTER, hoverText: 'Go Up', maxDistance: 6  },
      },
      function () {
        // Respawn player for the first cylinder
        movePlayerTo({
          newRelativePosition: Vector3.create(40, 23, 4),
          cameraTarget: Vector3.create(40, 19, 40),
        });
      }
    )
  
    
     // C left Create the first cylinder entity ( go up G to first floor)
     const cylinder3 = engine.addEntity();
     MeshRenderer.setCylinder(cylinder3); 
     MeshCollider.setCylinder(cylinder3); 
   
     VisibilityComponent.create(cylinder3, { visible: false }) 
   
     Transform.create(cylinder3, {
       
       position: Vector3.create(77.1, 1.5, 39.7), scale: Vector3.create(0.2, 1.3, 1.3)
     });
   
     
     // Add pointer event handlers for both cylinders (you can customize them as needed)
     pointerEventsSystem.onPointerDown(
       {
         entity: cylinder3,
         opts: { button: InputAction.IA_POINTER, hoverText: 'Go Up', maxDistance: 6  },
       },
       function () {
         // Respawn player for the first cylinder
         movePlayerTo({
           newRelativePosition: Vector3.create(40, 23, 4),
           cameraTarget: Vector3.create(40, 19, 40),
         });
       }
     )

// D Create the first cylinder entity ( go up G to first floor)
const cylinder4 = engine.addEntity();
MeshRenderer.setCylinder(cylinder4); 
MeshCollider.setCylinder(cylinder4); 

VisibilityComponent.create(cylinder4, { visible: false }) 

Transform.create(cylinder4, {
  
  position: Vector3.create(40.15, 1.5, 77.1), scale: Vector3.create(1.3, 1.3, 0.2)
});


// Add pointer event handlers for both cylinders (you can customize them as needed)
pointerEventsSystem.onPointerDown(
  {
    entity: cylinder4,
    opts: { button: InputAction.IA_POINTER, hoverText: 'Go Up', maxDistance: 6  },
  },
  function () {
    // Respawn player for the first cylinder
    movePlayerTo({
      newRelativePosition: Vector3.create(40, 23, 4),
      cameraTarget: Vector3.create(40, 19, 40),
    });
  }
)



  //screen 

  // #1
  const screen = engine.addEntity()
  MeshRenderer.setPlane(screen)
  Transform.create(screen, 
    {
      position: { x: 40, y: 19.9, z: 33.5},  scale: Vector3.create(7.8, 4.8, 1), rotation: Quaternion.fromEulerDegrees(0, 0, 0)
    }
  )


  // #2
  VideoPlayer.create(screen, {
    src: 'https://playerservices.streamtheworld.com/api/livestream-redirect/OWR_INTERNATIONAL_ADP.m3u8',
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


  // UI with GitHub link
  setupUi()
}

engine.addSystem(clickedSystem)

engine.addSystem(enemySpawnSystem)

engine.addSystem(moveSystem)

engine.addSystem(expire)



