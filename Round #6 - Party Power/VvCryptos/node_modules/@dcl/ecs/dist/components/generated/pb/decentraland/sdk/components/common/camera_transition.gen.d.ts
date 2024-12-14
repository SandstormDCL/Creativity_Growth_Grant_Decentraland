import _m0 from "protobufjs/minimal";
/**
 * Defines the transition used towards the camera that contains the CameraTransition.
 * This structure may be updated in the future to specify from/to entities and to have easing functions.
 */
/**
 * @public
 */
export interface CameraTransition {
    transitionMode?: {
        $case: "time";
        time: number;
    } | {
        $case: "speed";
        speed: number;
    } | undefined;
}
/**
 * @public
 */
export declare namespace CameraTransition {
    function encode(message: CameraTransition, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): CameraTransition;
}
