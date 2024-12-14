import { Input, ReactEcsRenderer } from "@dcl/react-ecs";
import { Quaternion, Vector3 } from "@dcl/sdk/math";
import { Animator, engine, GltfContainer, InputAction, pointerEventsSystem, Transform } from "@dcl/sdk/ecs";
import * as ui from "dcl-ui-toolkit"

// Main Scene

const candy = engine.addEntity()

Transform.create(candy,{
  position: Vector3.create(35,0,40),
  scale: Vector3.create(0.9,0.86,0.9)
})

GltfContainer.create(candy,{
  src:'models/Final_Model_Calke.glb'
})

///Coin1

const coin1 = engine.addEntity()

Transform.create(coin1,{
  position: Vector3.create(35,0,40),
  scale: Vector3.create(0.9,0.86,0.9)
})

GltfContainer.create(coin1,{
  src:'models/Coin1.glb'
})

//Coin2 

const coin2 = engine.addEntity()

Transform.create(coin2,{
  position: Vector3.create(35,0,40),
  scale: Vector3.create(0.9,0.86,0.9)
})

GltfContainer.create(coin2,{
  src:'models/Coin2.glb'
})

//Coin3 

const coin3 = engine.addEntity()

Transform.create(coin3,{
  position: Vector3.create(35,0,40),
  scale: Vector3.create(0.9,0.86,0.9)
})

GltfContainer.create(coin3,{
  src:'models/Coin3.glb'
})

//Coin4

const coin4 = engine.addEntity()

Transform.create(coin4,{
  position: Vector3.create(35,0,40),
  scale: Vector3.create(0.9,0.86,0.9)
})

GltfContainer.create(coin4,{
  src:'models/Coin4.glb'
})

//Coin5

const coin5 = engine.addEntity()

Transform.create(coin5,{
  position: Vector3.create(35,0,40),
  scale: Vector3.create(0.9,0.86,0.9)
})

GltfContainer.create(coin5,{
  src:'models/Coin5.glb'
})

// Cake Door 

const cake_door = engine.addEntity()

Transform.create(cake_door,{
  position: Vector3.create(35,0,40),
  scale: Vector3.create(0.9,0.86,0.9)
})

GltfContainer.create(cake_door,{
  src:'models/Cake_Door.glb'
})

// Trophy 

const trophy = engine.addEntity()

Transform.create(trophy,{
  position: Vector3.create(35,0,40),
  scale: Vector3.create(0.9,0.86,0.9)
})

GltfContainer.create(trophy,{
  src:'models/Trophy.glb'
})


// UI Designs 

ReactEcsRenderer.setUiRenderer(ui.render)

const counter = ui.createComponent(ui.UICounter , {value:0 , startHidden:false , xOffset:-90 , yOffset:10})
const icon = ui.createComponent(ui.MediumIcon,{startHidden:false,image:"UIs/Coin.png",width:150,height:80})


// Collecting Coins 

pointerEventsSystem.onPointerDown({
  entity:coin1,
  opts:{
    button:InputAction.IA_PRIMARY,
    hoverText:"Collect"
  }
},function(){
  GltfContainer.deleteFrom(coin1)
  counter.increase(1),
  Finale();
})

pointerEventsSystem.onPointerDown({
  entity:coin2,
  opts:{
    button:InputAction.IA_PRIMARY,
    hoverText:"Collect"
  }
},function(){
  GltfContainer.deleteFrom(coin2)
  counter.increase(1),
  Finale();
})

pointerEventsSystem.onPointerDown({
  entity:coin3,
  opts:{
    button:InputAction.IA_PRIMARY,
    hoverText:"Collect"
  }
},function(){
  GltfContainer.deleteFrom(coin3)
  counter.increase(1),
  Finale();
})

pointerEventsSystem.onPointerDown({
  entity:coin4,
  opts:{
    button:InputAction.IA_PRIMARY,
    hoverText:"Collect"
  }
},function(){
  GltfContainer.deleteFrom(coin4)
  counter.increase(1),
  Finale();
})

pointerEventsSystem.onPointerDown({
  entity:coin5,
  opts:{
    button:InputAction.IA_PRIMARY,
    hoverText:"Collect"
  }
},function(){
  GltfContainer.deleteFrom(coin5),
  counter.increase(1),
  Finale();
})

// Cake Door Opening 

function Finale(){
  console.log("Accessed")
  if(counter.read() == 5){
    Quest1.hide()
    Quest2.show()
    GltfContainer.create(Lever,{src:"models/DCL_Lever.glb"})
  }
}

// Trophy Collection 

pointerEventsSystem.onPointerDown({
  entity:trophy,
  opts:
  {
    button:InputAction.IA_PRIMARY,
    hoverText:"Collect Trophy"
  }
},
function(){
  GltfContainer.deleteFrom(trophy)
  Quest3.hide()
  Quest4.show()
  Quest4.hide()
  Quest5.show()
  Final_Message.show(5)
})

// Quest UI 

const Quest1 = ui.createComponent(ui.LargeIcon,{startHidden:false,image:"UIs/Quest1.png",width:280,height:450,yOffset:150,xOffset:0})
const Quest2 = ui.createComponent(ui.LargeIcon,{startHidden:true,image:"UIs/Quest2.png",width:280,height:450,yOffset:150,xOffset:0})
const Quest3 = ui.createComponent(ui.LargeIcon,{startHidden:true,image:"UIs/Quest3.png",width:280,height:450,yOffset:150,xOffset:0})
const Quest4 = ui.createComponent(ui.LargeIcon,{startHidden:true,image:"UIs/Quest4.png",width:280,height:450,yOffset:150,xOffset:0})
const Quest5 = ui.createComponent(ui.LargeIcon,{startHidden:true,image:"UIs/Quest5.png",width:280,height:450,yOffset:150,xOffset:0})
const Final_Message = ui.createComponent(ui.CenterImage,{startHidden:true,image:"UIs/Final.png",width:800,height:700,duration:5})


// Game Lever

const Lever = engine.addEntity()

Animator.create(Lever,{
  states:[
    {
      clip:'Open',
      playing:false,
      loop:false
    }
  ]
})

Transform.create(Lever,{
  position: Vector3.create(35,0,40),
  scale: Vector3.create(0.9,0.86,0.9)
})

pointerEventsSystem.onPointerDown({
  entity:Lever,
  opts:{
    button:InputAction.IA_PRIMARY,
    hoverText:"Pull Lever"
  }
},function(){
  Quest2.hide()
  Quest3.show()
  const anim_lever = Animator.getClip(Lever,"Open")
  anim_lever.playing = true
  Animator.create(cake_door,{
    states:[
      {
        clip:'Door',
        playing:true,
        loop:false
      }
    ]
  })
})

