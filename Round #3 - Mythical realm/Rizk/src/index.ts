// /*
//   IMPORTANT: The tsconfig.json has been configured to include "node_modules/cannon/build/cannon.js"
//   Code is adapted from: https://github.com/schteppe/cannon.js/blob/master/examples/threejs_mousepick.html
// */

import { _inputSystem, setupMarker, updateMarkerSystem } from "./marker";
import { createBoxBody, setupCannon, updatePhysicsSystem } from "./world";
import { testscript } from './dialogs'
import * as npc from 'dcl-npc-toolkit'
import { setupUi } from './setupUI'
import './atlas-analytics-service';
import { setupAtlasAnalytics } from "./atlas-analytics-service";

import {
  Animator,
  AudioSource,
  AvatarAttach,
  ColliderLayer,
  engine,
  GltfContainer,
  InputAction,
  Material,
  MeshRenderer,
  NftShape,
  pointerEventsSystem,
  Transform,
  VideoPlayer,
  VisibilityComponent,
} from "@dcl/sdk/ecs";
import { Quaternion, Vector3 } from "@dcl/sdk/math";

import { initAssetPacks } from "@dcl/asset-packs/dist/scene-entrypoint";

import { createBasicDanceArea } from "./autoDance";
//import { setupUi } from "./ui";
import { openExternalUrl } from "~system/RestrictedActions";

initAssetPacks(engine, pointerEventsSystem, {
  Animator,
  AudioSource,
  AvatarAttach,
  Transform,
  VisibilityComponent,
  GltfContainer,
  Material: undefined,
  VideoPlayer: undefined,
  UiTransform: undefined,
  UiText: undefined,
  UiBackground: undefined
});

export function main() {


  setupAtlasAnalytics (
    "1001 nights 7.01", // use a unique branchName to differentiate different deployments or instances
    5000, // pollingInterval, in milliseconds
    false, // activates/deactivates logging debug messages to the browser console
  )
  // // Base scene

  setupUi();
  setupCannon();
  setupMarker();


  createBoxBody(Vector3.create(16, 5, 82));
 createBoxBody(Vector3.create(8.5, 5, 4));

engine.addSystem(updatePhysicsSystem);
  engine.addSystem(updateMarkerSystem);
  engine.addSystem(_inputSystem);

 let Furniture = engine.addEntity();
Transform.create(Furniture, {
position: Vector3.create(48, 0.01, 48),
});
GltfContainer.create(Furniture, { src: "models/Furniture.glb" });

 let Palace = engine.addEntity();
 Transform.create(Palace, {
   position: Vector3.create(48, 0.01, 48),
 });
GltfContainer.create(Palace, { src: "models/Palace.glb" });

  let fence1 = engine.addEntity();
  Transform.create(fence1, {
    position: Vector3.create(48, 0.01, 48),
  });
  GltfContainer.create(fence1, { src: "models/fence1.glb" });

  let signs = engine.addEntity();
  Transform.create(signs, {
    position: Vector3.create(48, 0.01, 48),
  });
  GltfContainer.create(signs, { src: "models/signs.glb" });

  //////////////////////////////////////////////////////Characters

 // let aladdin_combat_idle_01 = engine.addEntity();
 // Transform.create(aladdin_combat_idle_01, {
 //   position: Vector3.create(44, 0.02, 65.7),
 //   scale: Vector3.create(0.018, 0.018, 0.018),
  //  rotation: Quaternion.fromEulerDegrees(0, -180, 0),
 // });
 // GltfContainer.create(aladdin_combat_idle_01, { src: "models/aladdin_combat_idle_01.glb" });

 // let ariel__combat_idle_01 = engine.addEntity();
 // Transform.create(ariel__combat_idle_01, {
 //   position: Vector3.create(52, 0.02, 65.7),
 //   scale: Vector3.create(0.015, 0.016, 0.016),
 //   rotation: Quaternion.fromEulerDegrees(0, -180, 0),
 // });
 // GltfContainer.create(ariel__combat_idle_01, { src: "models/ariel__combat_idle_01.glb" });



 // let Genie = engine.addEntity();
 // Transform.create(Genie, {
 //   position: Vector3.create(41, 0.02, 65.7),
  //  scale: Vector3.create(0.9, 0.9, 0.9),
  //  rotation: Quaternion.fromEulerDegrees(0, -240, 0),
 // });
 // GltfContainer.create(Genie, { src: "models/Genie.glb" });


  let Woodenship = engine.addEntity();
  Transform.create(Woodenship, {
    position: Vector3.create(60.6, 1, 37.7),
    scale: Vector3.create(0.58, 0.58, 0.58),
    rotation: Quaternion.fromEulerDegrees(0, -130, 0),
  });
  GltfContainer.create(Woodenship, { src: "models/Wooden ship.glb" });



  ////////////////////////////////////////////////////////////////////////Art of Ocean
  

  let sinbadmain = engine.addEntity();
  Transform.create(sinbadmain, {
    position: Vector3.create(48, 0.01, 48),
  });
  GltfContainer.create(sinbadmain, {
    src: "models/sinbadmain.glb",
    visibleMeshesCollisionMask: ColliderLayer.CL_POINTER,
  });

  pointerEventsSystem.onPointerDown(
    {
      entity: sinbadmain,
      opts: {
        button: InputAction.IA_POINTER,
        hoverText: "Art of Ocean",
      },
    },
    function () {
      openExternalUrl({ url: "https://en.wikipedia.org/wiki/Marine_art" });
    }
  );

  ////////////////////////////////////////////////////////////////////////Art of Dance
  
  let scheherazademain = engine.addEntity();
  Transform.create(scheherazademain, {
    position: Vector3.create(48, 0.01, 48),
  });
  GltfContainer.create(scheherazademain, {
    src: "models/scheherazademain.glb",
    visibleMeshesCollisionMask: ColliderLayer.CL_POINTER,
  });

  pointerEventsSystem.onPointerDown(
    {
      entity: scheherazademain,
      opts: {
        button: InputAction.IA_POINTER,
        hoverText: "Art of Dance",
      },
    },
    function () {
      openExternalUrl({ url: "https://en.wikipedia.org/wiki/Dance" });
    }
  );



  ////////////////////////////////////////////////////////////////////////Art of War 
  

  let princeahmadmain = engine.addEntity();
  Transform.create(princeahmadmain, {
    position: Vector3.create(48, 0.01, 48),
  });
  GltfContainer.create(princeahmadmain, {
    src: "models/princeahmadmain.glb",
    visibleMeshesCollisionMask: ColliderLayer.CL_POINTER,
  });

  pointerEventsSystem.onPointerDown(
    {
      entity: princeahmadmain,
      opts: {
        button: InputAction.IA_POINTER,
        hoverText: "Watch The Adventures of Prince Achmed Movie",
      },
    },
    function () {
      openExternalUrl({ url: "Art of War" });
    }
  );

  ////////////////////////////////////////////////////////////////////////Art of Love
 

  let Alaaddinmain = engine.addEntity();
  Transform.create(Alaaddinmain, {
    position: Vector3.create(48, 0.01, 48),
  });
  GltfContainer.create(Alaaddinmain, {
    src: "models/Alaaddinmain.glb",
    visibleMeshesCollisionMask: ColliderLayer.CL_POINTER,
  });

  pointerEventsSystem.onPointerDown(
    {
      entity: Alaaddinmain,
      opts: {
        button: InputAction.IA_POINTER,
        hoverText: "Art of Love",
      },
    },
    function () {
      openExternalUrl({ url: "https://en.wikipedia.org/wiki/The_Art_of_Loving" });
    }
  );

 ////////////////////////////////////////////////////////////////////////Art of Money
 
 let alibabamain = engine.addEntity();
 Transform.create(alibabamain, {
   position: Vector3.create(48, 0.01, 48),
 });
 GltfContainer.create(alibabamain, {
   src: "models/alibabamain.glb",
   visibleMeshesCollisionMask: ColliderLayer.CL_POINTER,
 });

 pointerEventsSystem.onPointerDown(
   {
     entity: alibabamain,
     opts: {
       button: InputAction.IA_POINTER,
       hoverText: "Art of Money",
     },
   },
   function () {
     openExternalUrl({ url: "https://en.wikisource.org/wiki/The_Art_of_Money_Getting" });
   }
 );


 /////////////////////////////////////////////////////////////////reception
// Still NPC
let sully_idle_01 = npc.create(
  {
    position: Vector3.create(50, 0.1, 22),
    rotation: Quaternion.fromEulerDegrees(0,0, 0),
   scale: Vector3.create(1.35, 1.35, 1.35),

  },
  {
   type: npc.NPCType.CUSTOM,
    model: {
      src: 'models/sully_idle_01.glb'

    },
    faceUser: true,
    portrait: { path: 'images/marsha.png' }, 
    idleAnim: `All Animations`,
    reactDistance:5,
    continueOnWalkAway:false, 
    onActivate: () => {
      npc.talk(sully_idle_01, testscript)
   },
  
  }
)

setupUi()


  
  //////////////////////////////////////////////dance floor

  createBasicDanceArea(Vector3.create(20, 1, 40), Vector3.create(11, 1, 58));

  ///////////////////////////////////////////////video

  //screen

  // #1
  const screen = engine.addEntity();
  MeshRenderer.setPlane(screen);
  Transform.create(screen, {
    position: { x: 11.5, y: 7, z: 50 },
    scale: Vector3.create(12, 7, 12),
    rotation: Quaternion.fromEulerDegrees(0, -90, 0),
  });

  // #2
  VideoPlayer.create(screen, {
    src: "https://bafybeieb7wfh46yjzpbdwdqnbx4kiviiub4kihibcdhjt5td4gs5txglwi.ipfs.w3s.link/ipfs/bafybeieb7wfh46yjzpbdwdqnbx4kiviiub4kihibcdhjt5td4gs5txglwi/C1%20(1)%20(1).mp4",
    playing: true,
  });

  // #3
  const videoTexture = Material.Texture.Video({ videoPlayerEntity: screen });

  // #4
  Material.setPbrMaterial(screen, {
    texture: videoTexture,
    roughness: 1.0,
    specularIntensity: 0,
    metallic: 0,
  });
}
