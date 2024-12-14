import _m0 from "protobufjs/minimal";
import { CameraTransition } from "./common/camera_transition.gen";
/**
 * PBVirtualCamera represents a camera to be used at some point in time during the scene execution
 * * The defaultTransition represents the transition TOWARDS this camera. If there is none, it's treated as
 * an 'instant' transition (like using speed/time = 0)
 * * The lookAtEntity defines to which entity the Camera has to look at constantly (independent from
 * the holding entity transform).
 */
/**
 * @public
 */
export interface PBVirtualCamera {
    defaultTransition?: CameraTransition | undefined;
    lookAtEntity?: number | undefined;
}
/**
 * @public
 */
export declare namespace PBVirtualCamera {
    function encode(message: PBVirtualCamera, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBVirtualCamera;
}
