import _m0 from "protobufjs/minimal";
import { Vector3 } from "../../common/vectors.gen";
import { CameraType } from "./common/camera_type.gen";
/**
 * The CameraModeArea component can be attached to an Entity to define a region of space where
 * the player's camera mode (1st-person or 3rd-person) is overridden.
 *
 * The Entity's Transform position determines the center-point of the region, while its size is
 * given as a vector in the `area` property below. The Transform rotation is applied, but the scale
 * is ignored.
 *
 * When players leave the region, their previous setting is restored.
 *
 * Note that, while commonly used to delineate a 2D area in a scene (hence the name), the region
 * is actually a 3D volume.
 */
/**
 * @public
 */
export interface PBCameraModeArea {
    /** the 3D size of the region */
    area: Vector3 | undefined;
    /** the camera mode to enforce */
    mode: CameraType;
}
/**
 * @public
 */
export declare namespace PBCameraModeArea {
    function encode(message: PBCameraModeArea, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBCameraModeArea;
}
