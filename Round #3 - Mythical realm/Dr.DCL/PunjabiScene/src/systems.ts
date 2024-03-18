import { engine } from '@dcl/sdk/ecs'
import { rotate } from './lookat'

export function SetupSystems() {
    engine.addSystem(rotate);
}
