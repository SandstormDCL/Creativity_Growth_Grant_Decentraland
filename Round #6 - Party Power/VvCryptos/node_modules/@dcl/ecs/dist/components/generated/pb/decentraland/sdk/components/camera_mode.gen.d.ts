import _m0 from "protobufjs/minimal";
import { CameraType } from "./common/camera_type.gen";
/**
 * The CameraMode component can be used to determine whether the player is using a first-person o
 * third-person view.
 */
/**
 * @public
 */
export interface PBCameraMode {
    /** the camera type (1st-person or 3rd-person) */
    mode: CameraType;
}
/**
 * @public
 */
export declare namespace PBCameraMode {
    function encode(message: PBCameraMode, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBCameraMode;
}
