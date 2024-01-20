import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { NpcUtilsUi } from 'dcl-npc-toolkit'



const SceneOwnedUi = () => [
	NpcUtilsUi(),

	// other UI elements
]

export function setupUi() {
	ReactEcsRenderer.setUiRenderer(SceneOwnedUi)
}


