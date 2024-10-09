import { openExternalUrl } from "~system/RestrictedActions"
import ReactEcs, { Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { TextAlignMode, TextureFilterMode, TextureWrapMode } from "@dcl/sdk/ecs"
import { Color4 } from "@dcl/sdk/math"


const projectPath = "enemy-spawner"
const description = "Spawning enemy spaceships from various shaped portals."



const uiComponent = () => (
  [
    GitHubLinkUi(),
   
  ]
)

export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}

function GitHubLinkUi() {

  const fullPath = "https://x.com/Rizkgh" 

  return <UiEntity
    uiTransform={{
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      positionType: 'absolute',
      position: { right: "3%", bottom: '3%' }
    }}
  >
    <UiEntity
      uiTransform={{
        width: '132',
        height: '132',
      }}
      uiBackground={{
        textureMode: 'stretch',
        texture: {
          src: "images/gh.png"
        }
      }}

      onMouseDown={() => {
        console.log("OPENING LINK")
        openExternalUrl({ url: fullPath })
      }}
    />
    <Label
      value="Follow me for more"
      color={Color4.Black()}
      fontSize={15}
      textAlign="middle-center"
    />
  </UiEntity>
}


