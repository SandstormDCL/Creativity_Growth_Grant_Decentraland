import { Animator, CameraMode, CameraType, GltfContainer, InputAction, MeshCollider, MeshRenderer, PointerEventType, RaycastHit, RaycastResult, Transform, engine, executeTask, inputSystem, pointerEventsSystem, raycastSystem } from "@dcl/sdk/ecs";
import { Button, Input, ReactEcsRenderer,UiEntity } from "@dcl/react-ecs";
import * as ui from "dcl-ui-toolkit";
import { Color4, Quaternion, Vector3 } from "@dcl/sdk/math";
import * as utils from "@dcl-sdk/utils"
import * as npc from "dcl-npc-toolkit"
import { Arth1, Deer2, SeaHorse3 } from "./Dialogs/Artemis_Dialog";
import { setupUi } from "./uiComp";

ReactEcsRenderer.setUiRenderer(ui.render)

const mainweapon = "models/Hunt_Weapon.glb"
const testweapon = "models/Weapon.glb"

const full1 = engine.addEntity()
GltfContainer.create(full1,{src:"models/Main.glb"})
const trans1 = Transform.create(full1 ,{
    position: Vector3.create(35,0,30.5)
})


const full2 = engine.addEntity()
GltfContainer.create(full2,{src:"models/Level_1_Part1.glb"})
const trans2 = Transform.create(full2 ,{
    position: Vector3.create(35,0,30.5)
})


const full3 = engine.addEntity()
GltfContainer.create(full3,{src:"models/Level1_Swing.glb"})
const trans3 = Transform.create(full3 ,{
    position: Vector3.create(35,0,30.5)
})

const full4 = engine.addEntity()
GltfContainer.create(full4,{src:"models/Level_2.glb"})
const trans4 = Transform.create(full4 ,{
    position: Vector3.create(35,0,30.5)
})

const full5 = engine.addEntity()
GltfContainer.create(full5,{src:"models/Level_3.glb"})
const trans5 = Transform.create(full5 ,{
    position: Vector3.create(35,0,30.5)
})




const Medusa = engine.addEntity()
GltfContainer.create(Medusa,{src:"models/Medusa.glb"})
Transform.create(Medusa ,{
    position: Vector3.create(35,0,30.5)
})

const Carpet = engine.addEntity()
GltfContainer.create(Carpet,{src:"models/Carpet.glb"})
Transform.create(Carpet ,{
    position: Vector3.create(35,0,30.5)
})


Animator.create(Carpet, {
    states: [
      {
        clip: 'Carpet',
        playing: false,
        loop: false,
      },
    ],
  })





const stone = engine.addEntity()
GltfContainer.create(stone,{src:"models/Stone_plat.glb"})
Transform.create(stone ,{
    position: Vector3.create(35,0,30.5)
})

Animator.create(stone, {
    states: [
      {
        clip: 'Stone',
        playing: false,
        loop: false,
      },
    ],
  })

const stoneanim = Animator.getClip(stone,"Stone")



const shark = engine.addEntity()
GltfContainer.create(shark,{src:"models/Shark2.glb"})
Transform.create(shark ,{
    position: Vector3.create(35,0,30.5)
})

Animator.create(shark, {
    states: [
      {
        clip: 'Shark_Action1',
        playing: true,
        loop: true,
      },
      {
        clip: 'Shark_metarig.001',
        playing: false,
        loop: false,
      }
    ],
  })



const weapon = engine.addEntity()
GltfContainer.create(weapon,{src:testweapon})
const wep = Transform.create(weapon ,{
    position: Vector3.create(35,0,30.5),
})



pointerEventsSystem.onPointerDown({
    entity:weapon,
    opts:{
        button : InputAction.IA_PRIMARY,
        hoverText:"Collect"
    }
},function(){
    GltfContainer.deleteFrom(weapon)
    GltfContainer.create(weapon,{src:mainweapon})
    wep.rotation = Quaternion.fromEulerDegrees(0,60,0)
    collection.show(3)
    health.show()
    newi()
    Quest5.show()
    Quest4.hide()
})



const deer = engine.addEntity()
GltfContainer.create(deer,{src:"models/Deer.glb"})
Transform.create(deer,{
    position: Vector3.create(35,0,30.5)
})

pointerEventsSystem.onPointerDown({entity:deer,opts:{
    button:InputAction.IA_POINTER,
    hoverText: "Talk"
}},function(){
    let myNPC2 = npc.create(
        { position: Vector3.create(35, 0, 30.5), rotation: Quaternion.Zero(), scale: Vector3.create(1, 1, 1) },
        {
            type: npc.NPCType.CUSTOM,
            model: 'models/Deer.glb',
            onActivate: () => {
                npc.talk(myNPC2,Deer2)
                const stoneanim  = Animator.getClip(stone,"Stone")
                stoneanim.playing = true;
                stoneanim.loop = true;
                Quest3.show()
                Quest2.hide()
            },
            coolDownDuration:1,
            onlyClickTrigger:true,
        }
    )

    GltfContainer.deleteFrom(deer)

    
})


const seahorse = engine.addEntity()
GltfContainer.create(seahorse,{src:"models/Seahorse2.glb"})
Transform.create(seahorse,{
    position: Vector3.create(35,0,30.5)
})

pointerEventsSystem.onPointerDown({entity:seahorse,opts:{
    button:InputAction.IA_POINTER,
    hoverText: "Talk"
}},function(){
    let myNPC3 = npc.create(
        { position: Vector3.create(35, 0, 30.5), rotation: Quaternion.Zero(), scale: Vector3.create(1, 1, 1) },
        {
            type: npc.NPCType.CUSTOM,
            model: 'models/Seahorse2.glb',
            onActivate: () => {
                npc.talk(myNPC3,SeaHorse3)
                const sharkanim = Animator.getClip(shark,"Shark_metarig.001")
                const sharkanim2 = Animator.getClip(shark,"Shark_Action1")
                sharkanim.playing = true;
                sharkanim.loop = true;
                sharkanim2.playing = false;
                sharkanim2.loop = false;
                Quest4.show()
                Quest3.hide()
            },
            coolDownDuration:1,
            onlyClickTrigger:true
        }
    )

    GltfContainer.deleteFrom(seahorse)

    
})


//Weapon Throw

function Hunt(){
    let credit = 100


    //RayCast
    raycastSystem.registerLocalDirectionRaycast({
        entity:weapon,
        opts : {direction: Vector3.Forward()}
    },function(RaycastResult){
        for(const hit of RaycastResult.hits){
            if(hit.meshName == "Med_collider"){
                console.log(hit.entityId)
                Transform.getMutable(Medusa).scale.x -= 0.03;
                Transform.getMutable(Medusa).scale.y -= 0.03;
                Transform.getMutable(Medusa).scale.z -= 0.03;
                Transform.getMutable(Medusa).position.y += 0.08;
                health.decrease(0.05)
                console.log(health.read);
                
                if(health.read()<=0){
                    congratulations.show()
                    Quest6.show()
                    Quest5.hide()
                }
            }
        }
    })




    //moving OBJECT
    let moving = false
    let x = 105
    


    if(inputSystem.isTriggered(InputAction.IA_PRIMARY,PointerEventType.PET_DOWN)){
        moving = true
        x = 0
        console.log("Chan")
            const forwardVec = Vector3.rotate(Vector3.Forward(),Transform.getMutable(engine.CameraEntity).rotation)
            const campos = Transform.getMutable(engine.CameraEntity).position
            Transform.getMutable(weapon).position.y = campos.y-2;
            wep.rotation = Transform.getMutable(engine.CameraEntity).rotation;
            console.log("player",campos);
            console.log(forwardVec);
            let x1 = campos.x
            let x2 = campos.y
            let x3 = campos.z
            preserve(x1,x2,x3)
            const movementspeed = 1.5;
            
            executeTask(async () => {
            while(x<20){
                if(moving){
                    if(Transform.getMutable(weapon).position=campos){
                wep.position.x += forwardVec.x*movementspeed;
                wep.position.y += forwardVec.y*movementspeed;
                wep.position.z += forwardVec.z*movementspeed;
                }
                x+=1
            }
                await delay(20)
            }
            
        })
            

            function delay(ms: number) {
                return new Promise(resolve => utils.timers.setTimeout(resolve, ms))
              }
            
        }
    }

function preserve(x:number,y:number,z:number){
    Transform.getMutable(engine.CameraEntity).position = Vector3.create(x,y,z)
    return Transform.get(engine.CameraEntity).position
}

function newi(){
    engine.addSystem(Hunt)
}



//UI-Elements

let collection = ui.createComponent(ui.CenterImage,{image:"images/Weapon_collect.png",xOffset:0,yOffset:0,height:351,width:592,startHidden:true,duration:5})
let Quest1 = ui.createComponent(ui.LargeIcon,{image:"images/Quest1.png",xOffset:-1100,yOffset:0,height:375,width:227,startHidden:true})
utils.timers.setTimeout(() => {
  Quest1.show()
  intro.hide()
}, 5000);
let Quest2 = ui.createComponent(ui.LargeIcon,{image:"images/Quest2.png",xOffset:-1100,yOffset:0,height:375,width:227,startHidden:true})
let Quest3 = ui.createComponent(ui.LargeIcon,{image:"images/Quest3.png",xOffset:-1100,yOffset:0,height:375,width:227,startHidden:true})
let Quest4 = ui.createComponent(ui.LargeIcon,{image:"images/Quest4.png",xOffset:-1100,yOffset:0,height:375,width:227,startHidden:true})
let Quest5 = ui.createComponent(ui.LargeIcon,{image:"images/Quest5.png",xOffset:-1100,yOffset:0,height:375,width:227,startHidden:true})
let Quest6 = ui.createComponent(ui.LargeIcon,{image:"images/Quest6.png",xOffset:-1100,yOffset:0,height:375,width:227,startHidden:true})
let intro = ui.createComponent(ui.CenterImage,{image:"images/Intro.png",xOffset:0,yOffset:0,height:500,width:900,startHidden:true,duration:5})
intro.show()
let congratulations = ui.createComponent(ui.LargeIcon,{image:"images/Congrates.png",xOffset:-180,yOffset:50,height:650,width:1100,startHidden:true})
const health = ui.createComponent(ui.UIBar, {
    value: 1,
    xOffset: -60,
    yOffset: 650,
    color: Color4.Green(),
    style: ui.BarStyles.ROUNDSILVER,
    scale: 1,
  })

// NPCs

export function main() {

    setupUi()

    let myNPC = npc.create(
        { position: Vector3.create(35, 0, 30.5), rotation: Quaternion.Zero(), scale: Vector3.create(1, 1, 1) },
        {
            type: npc.NPCType.CUSTOM,
            model: 'models/ForArth.glb',
            onActivate: () => {
                npc.talk(myNPC,Arth1)
                const anim  = Animator.getClip(Carpet,"Carpet")
                anim.playing = true;
                anim.loop = true;
                Quest2.show()
                Quest1.hide()
                
            },
            coolDownDuration:1,
            onlyClickTrigger:true
        }
    )

    

}










