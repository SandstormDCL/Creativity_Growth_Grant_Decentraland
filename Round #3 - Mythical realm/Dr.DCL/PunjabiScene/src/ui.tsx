import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Button, Input, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import * as npc from 'dcl-npc-toolkit'
import { sharedState } from './sharedState'
import { EndCoinGame } from './coins'
import { Click, Pageflip } from './soundManager'
export enum GameState {
  Find,
  Food,
  Story,
  Quiz,
  Idle
}
export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}
var currentStory = 0
var coins = 0
var infovis = false;
var StoryImages = [
  'images/Story1.png',
  'images/Story2.png',
  'images/Story3.png',
  'images/Story4.png',
  'images/Story5.png'
]
const uiComponent = () => [Info(), TopBar(), Stories(), Dialogues(), CollectCoins()]

var currentState = GameState.Idle
var StateText = new Map<GameState, string>([
  [GameState.Find, 'Scavenger Hunt: Find All Coins'],
  [GameState.Food, 'Food: Learn About Local Foods'],
  [GameState.Story, 'Folk Lore: Read Old Folk Tales'],
  [GameState.Idle, 'Look Around And Enjoy The Culture']
])
function SetupSharedState() {
  sharedState.ChangeState = (value: GameState) => {
    currentState = value
    if (currentState == GameState.Idle) {
      coins = 0;
      infovis = false;
    }else{
      infovis = false;
    }
  }
  sharedState.UpdateCoins = (value: number) => {
    coins = value
  }
}
function NextStory() {
  Pageflip()
  currentStory++
  if (currentStory >= StoryImages.length) {
    currentStory = 0
    return
  }
}

function PrevStory() {
  Pageflip()
  currentStory--
  if (currentStory < 0) {
    currentStory = StoryImages.length - 1
    return
  }
}

function Dialogues() {
  return <npc.NpcUtilsUi />
}
function TopBar() {
  return (
    <UiEntity
      uiTransform={{
        width: '100%',
        height: '100%',
        positionType: 'absolute',
        justifyContent: 'center'
      }}
    >
      <UiEntity
        uiTransform={{
          width: '30vw',
          height: '5vw',
          positionType: 'absolute',
          position: { top: '1vw' }
        }}
      >
        <UiEntity
          uiTransform={{
            width: '18%',
            height: '100%',
            positionType: 'absolute',
            display: currentState == GameState.Idle ? 'none' : 'flex'
          }}
          uiBackground={{ texture: { src: 'images/Leave.png' }, textureMode: 'stretch' }}
          onMouseUp={() => {
            Click()
            if (currentState === GameState.Find) {
              EndCoinGame()
            }
            sharedState.ChangeState(GameState.Idle)
            sharedState.GoIdle()
          }}
        />
        <UiEntity
          uiTransform={{
            width: '18%',
            height: '100%',
            positionType: 'absolute',
            display: currentState == GameState.Idle ? 'flex' : 'none'
          }}
          uiBackground={{ texture: { src: 'images/Info.png' }, textureMode: 'stretch' }}
          onMouseUp={()=>{
            Click()
            infovis = !infovis
          }}
        />
        <UiEntity
          uiTransform={{
            width: '82%',
            height: '100%',
            positionType: 'absolute',
            position: { left: '18%' }
          }}
          uiBackground={{ texture: { src: 'images/TopBar.png' }, textureMode: 'stretch' }}
        >
          <Label
            uiTransform={{
              width: '100%',
              height: '100%',
              positionType: 'absolute',
              position: { bottom: '5%' }
            }}
            //uiBackground={{ color: Color4.fromHexString('#ffffff') }}
            color={Color4.fromHexString('#00000')}
            fontSize={'1.1vw'}
            value={StateText.get(currentState)!}
            textAlign="middle-center"
          />
        </UiEntity>
      </UiEntity>
    </UiEntity>
  )
}
function CollectCoins() {
  return (
    <UiEntity
      uiTransform={{
        width: '100%',
        height: '100%',
        positionType: 'absolute',
        alignItems: 'center'
      }}
    >
      <UiEntity
        uiTransform={{
          width: '13vw',
          height: '6vw',
          positionType: 'absolute',
          display: currentState == GameState.Find ? 'flex' : 'none'
        }}
        uiBackground={{ texture: { src: 'images/CoinUI.png' }, textureMode: 'stretch' }}
      >
        <Label
          uiTransform={{
            width: '50%',
            height: '100%',
            positionType: 'absolute',
            position: { left: '40%' }
          }}
          color={Color4.fromHexString('#00000')}
          fontSize={'3vh'}
          value={`${coins} / 5`}
        />
      </UiEntity>
    </UiEntity>
  )
}
function Stories() {
  SetupSharedState()
  return (
    <UiEntity
      uiTransform={{
        width: '100%',
        height: '100%',
        display: currentState === GameState.Story ? 'flex' : 'none',
        alignContent: 'center',
        justifyContent: 'flex-end'
      }}
    >
      <UiEntity
        uiTransform={{
          width: '36vw',
          height: '45vw',
          positionType: 'absolute',
          display: 'flex',
          alignSelf: 'center'
        }}
      >
        <StoryBlocks />
        <Label
          uiTransform={{
            width: '25%',
            height: '6%',
            position: { top: '85.8%', left: '37%' },
            positionType: 'absolute'
          }}
          color={Color4.fromHexString('#BDA578')}
          fontSize={'1.2vw'}
          value={`${currentStory + 1}   /   ${StoryImages.length}`}
        />

        <UiEntity
          //Back
          uiTransform={{
            width: '10%',
            height: '6%',
            position: { top: '85.8%', left: '18%' },
            positionType: 'absolute'
          }}
          uiBackground={{ color: Color4.create(1, 1, 1, 0.001) }}
          onMouseUp={PrevStory}
        />
        <UiEntity
          //Forward
          uiTransform={{
            width: '10%',
            height: '6%',
            position: { top: '85.8%', left: '71%' },
            positionType: 'absolute'
          }}
          uiBackground={{ color: Color4.create(1, 1, 1, 0.001) }}
          onMouseUp={NextStory}
        />
      </UiEntity>
    </UiEntity>
  )
}

function Info() {
  return (
    <UiEntity
      uiTransform={{
        width: '100%',
        height: '100%',
        alignContent: 'center',
        display: infovis? 'flex': 'none',
        justifyContent: 'flex-end'
      }}
    >
      <UiEntity
        uiTransform={{
          width: '36vw',
          height: '45vw',
          positionType: 'absolute',
          display: 'flex',
          alignSelf: 'center',
        }}
      >
        <UiEntity
          uiTransform={{
            width: '100%',
            height: '100%',
            positionType: 'absolute',
          }}
          uiBackground={{ texture: { src: 'images/About.png' }, textureMode: 'stretch' }}
          onMouseUp={() => {
            Click()
            infovis = false;
          }}
        />
      </UiEntity>
    </UiEntity>
  )
}

const StoryBlocks = () => {
  return (
    <UiEntity
      uiTransform={{
        width: '100%',
        height: '100%',
        positionType: 'absolute'
      }}
    >
      <UiEntity
        uiTransform={{
          width: '100%',
          height: '100%',
          positionType: 'absolute',
          display: currentStory == 0 ? 'flex' : 'none'
        }}
        uiBackground={{ texture: { src: StoryImages[0] }, textureMode: 'stretch' }}
      />
      <UiEntity
        uiTransform={{
          width: '100%',
          height: '100%',
          positionType: 'absolute',
          display: currentStory == 1 ? 'flex' : 'none'
        }}
        uiBackground={{ texture: { src: StoryImages[1] }, textureMode: 'stretch' }}
      />
      <UiEntity
        uiTransform={{
          width: '100%',
          height: '100%',
          positionType: 'absolute',
          display: currentStory == 2 ? 'flex' : 'none'
        }}
        uiBackground={{ texture: { src: StoryImages[2] }, textureMode: 'stretch' }}
      />
      <UiEntity
        uiTransform={{
          width: '100%',
          height: '100%',
          positionType: 'absolute',
          display: currentStory == 3 ? 'flex' : 'none'
        }}
        uiBackground={{ texture: { src: StoryImages[3] }, textureMode: 'stretch' }}
      />
      <UiEntity
        uiTransform={{
          width: '100%',
          height: '100%',
          positionType: 'absolute',
          display: currentStory == 4 ? 'flex' : 'none'
        }}
        uiBackground={{ texture: { src: StoryImages[4] }, textureMode: 'stretch' }}
      />
    </UiEntity>
  )
}
