import { IEngine, LastWriteWinElementSetComponentDefinition } from '../../engine';
import { PBVirtualCamera } from '../generated/index.gen';
import { CameraTransition } from '../generated/pb/decentraland/sdk/components/common/camera_transition.gen';
/**
 * @public
 */
export interface CameraTransitionHelper {
    /**
     * @returns a CameraTransition speed
     */
    Speed: (speed: number) => CameraTransition['transitionMode'];
    /**
     * @returns a CameraTransition time
     */
    Time: (time: number) => CameraTransition['transitionMode'];
}
/**
 * @public
 */
export interface VirtualCameraComponentDefinitionExtended extends LastWriteWinElementSetComponentDefinition<PBVirtualCamera> {
    /**
     * Camera transition helper for time and speed modes
     */
    Transition: CameraTransitionHelper;
}
export declare function defineVirtualCameraComponent(engine: Pick<IEngine, 'defineComponentFromSchema'>): VirtualCameraComponentDefinitionExtended;
