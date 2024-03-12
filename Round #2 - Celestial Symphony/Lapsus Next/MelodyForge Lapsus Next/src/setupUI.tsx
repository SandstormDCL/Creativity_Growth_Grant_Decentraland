import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Label, ReactEcsRenderer, UiEntity,  } from '@dcl/sdk/react-ecs'
import { NpcUtilsUi } from 'dcl-npc-toolkit'
import { getCollectedShapes, getTotalShapes } from './index'






const SceneOwnedUi = () => [
	NpcUtilsUi(),
	setupUi2(),
	

	// other UI elements
]

export function setupUi() {
	ReactEcsRenderer.setUiRenderer(SceneOwnedUi,)
}


//Quest UI

 function setupUi2() {
  
	return <UiEntity
	uiTransform={{
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: 'row',
		alignSelf: 'center',
		positionType: "absolute",
		flexShrink: 1,
		maxWidth: 600,
		maxHeight: 300,
		minWidth: 100,
		padding: 4,
		position: { right: "3%", bottom: '20%' }
	}}
	uiBackground={{ texture: {
		src: "images/img.png",
		wrapMode: 'repeat'} }}
	>
		<UiEntity
			uiTransform={{
				width: "300",
				height: "150",
				alignSelf: "center",
				padding: 4,
				justifyContent: 'center',
				alignContent: 'center',
			}}
			uiBackground={{ 
				texture: {
					src: "images/img.png",
					wrapMode: 'repeat'}}}
	
    >
      <Label
        value= {getCollectedShapes() === 4 ? 'Congratulations! You have collected all the Notes' : `Collected Notes: ${getCollectedShapes()}/${getTotalShapes()}`}
        color={Color4.White()}
        fontSize={20}
      />
    </UiEntity>
	</UiEntity>
  
}

