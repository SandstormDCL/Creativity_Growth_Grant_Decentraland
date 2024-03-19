import { Entity, MeshCollider, VisibilityComponent } from '@dcl/sdk/ecs'
import { Quaternion, Vector3 } from '@dcl/sdk/math'
import * as npc from 'dcl-npc-toolkit'
import { sharedState } from './sharedState'
import { GameState } from './ui';
import { SetupCoins } from './coins';

var currentState = GameState.Idle;
var myNPC : Entity;
var StoryNPC : Entity;
var FindNPC : Entity;
var FoodNPC : Entity;
function SetupSharedState() {
  console.log("Setup")
  sharedState.GoIdle = () => {
    ShowAll();
  }
}

function HideAll(){
  console.log("Hiding")
  VisibilityComponent.getMutable(myNPC).visible = false;
  VisibilityComponent.getMutable(StoryNPC).visible = false;
  VisibilityComponent.getMutable(FindNPC).visible = false;
}

function ShowAll(){
  currentState = GameState.Idle
  VisibilityComponent.getMutable(myNPC).visible = true;
  VisibilityComponent.getMutable(StoryNPC).visible = true;
  VisibilityComponent.getMutable(FindNPC).visible = true;
}
export function SetupNPC() {
  myNPC = npc.create(
    { position: Vector3.create(60, 4, 12), rotation: Quaternion.create(0, 0, 0, 0), scale: Vector3.create(1, 1, 1) },
    {
      type: npc.NPCType.CUSTOM,
      model: 'models/ShovelNPC.glb',
      portrait: { path: 'images/ShovelNPC.png', height: 220, width: 220 },
      idleAnim: 'idle',
      reactDistance: 5,
      hoverText: 'Interact',
      onlyClickTrigger: false,
      onlyExternalTrigger: false,
      onActivate: () => {
        if(currentState != GameState.Idle){
          return
        }
        npc.talk(myNPC, [
          {
            text: `Greetings, explorer! Welcome to our virtual Punjabi village. Feel the breeze, hear the rustling of the fields, and immerse yourself in the rich culture that awaits. Ready to embark on a journey through Punjab?`,
            windowHeight: 100,
            isEndOfDialog: true
          }
        ])
      }
    }
  )
  MeshCollider.setBox(myNPC)
  VisibilityComponent.create(myNPC, {visible: true}) 

  FoodNPC = npc.create(
    { position: Vector3.create(20, 2, 33), rotation: Quaternion.create(0, 0, 0, 0), scale: Vector3.create(1, 1, 1) },
    {
      type: npc.NPCType.CUSTOM,
      portrait: { path: 'images/ShovelNPC.png', height: 220, width: 220 },
      idleAnim: 'idle',
      reactDistance: 5,
      hoverText: 'Interact',
      onlyClickTrigger: false,
      onlyExternalTrigger: false,
      onActivate: () => {
        if(currentState != GameState.Idle){
          return
        }
        npc.talk(FoodNPC, [
          {
            text: `Ah, the aroma of traditional Punjabi cuisine! Let's explore the village foods. Go into each building and Take a look at these visually appealing delights. Which one catches your eye? Perhaps a taste of our virtual delicacies?`,
            windowHeight: 100,
            isEndOfDialog: true
          }
        ])
      }
    }
  )
  MeshCollider.setBox(FoodNPC)
  VisibilityComponent.create(FoodNPC, {visible: true})

  StoryNPC = npc.create(
    { position: Vector3.create(40, 2.7, 40), rotation: Quaternion.create(0, 0, 0, 0), scale: Vector3.create(1, 1, 1) },
    {
      type: npc.NPCType.CUSTOM,
      reactDistance: 4,
      hoverText: 'Interact',
      portrait: { path: 'images/ShovelNPC.png', height: 220, width: 220 },
      onlyClickTrigger: false,
      onlyExternalTrigger: false,
      onActivate: () => {
        if(currentState != GameState.Idle){
          return
        }
        HideAll()
        sharedState.ChangeState(GameState.Story);
        currentState = GameState.Story
        npc.talk(StoryNPC, [
          {
            text: `Now, let's delve into the heart of Punjab – its folklore. Get ready for a storytelling experience like no other. Let the tales transport you to the cultural wonders of our beloved Punjab.`,
            windowHeight: 100,
            isEndOfDialog: true
          }
        ])
      },
      onWalkAway: () => {
      }
    }
  )
  MeshCollider.setBox(StoryNPC)
  VisibilityComponent.create(StoryNPC, {visible: true}) 


  FindNPC = npc.create(
    { position: Vector3.create(58, 2.7, 58), rotation: Quaternion.create(0, 0, 0, 0), scale: Vector3.create(1, 1, 1) },
    {
      type: npc.NPCType.CUSTOM,
      reactDistance: 6,
      hoverText: 'Interact',
      portrait: { path: 'images/ShovelNPC.png', height: 220, width: 220 },
      onlyClickTrigger: false,
      onlyExternalTrigger: false,
      onActivate: () => {
        if(currentState != GameState.Idle){
          return
        }
        HideAll()
        currentState = GameState.Find
        SetupCoins()
        sharedState.ChangeState(GameState.Find);
        npc.talk(FindNPC, [
          {
            text: `Feeling playful? Engage in our coin collection minigame! Challenge yourself to gather as many coins as you can. Ready, set, go! Explore the village, and let the fun begin.`,
            windowHeight: 100,
            isEndOfDialog: true
          }
        ])
      },
    }
  )
  MeshCollider.setBox(FindNPC)
  VisibilityComponent.create(FindNPC, {visible: true}) 

  SetupSharedState()
}
