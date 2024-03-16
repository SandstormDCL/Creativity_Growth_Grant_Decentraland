import {
  engine,
  Transform,
} from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'

export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}

const uiComponent = () => (
  <UiEntity
    uiTransform={{
      width: 380, // 380 / 2
      height: 200, // 200 / 2
      margin: '16px 0 4px 250px', // 16px / 2, 8px / 2, 180px / 2
      padding: 3, // 3 / 2
    }}
    uiBackground={{ color: Color4.fromHexString("#0b0649") }}
  >
    <UiEntity
      uiTransform={{
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      uiBackground={{ color: Color4.fromHexString("#0b0649") }}
    >
      <UiEntity
        uiTransform={{
          width: '100%',
          height: 50, // 50 / 2
          margin: '8px 0' // 8px / 2
        }}
        uiBackground={{
          textureMode: 'center',
          texture: {
            src: 'images/scene-thumbnail.png',
          },
        }}
      />
    
      <Label
        onMouseDown={() => {console.log('# Cubes clicked !')}}
        value={`Welcome to The house of houses`}
        fontSize={18} // 18 / 2
        uiTransform={{ width: '100%', height: 30 }} // 30 / 2
      />
      <Label
        value={`
              
        Find the spheres in the houses and 
        create your house music`}
        fontSize={14} // 14 / 2
        uiTransform={{ width: '100%', height: 30 }} // 30 / 2
      />
      
    </UiEntity>
  </UiEntity>
)