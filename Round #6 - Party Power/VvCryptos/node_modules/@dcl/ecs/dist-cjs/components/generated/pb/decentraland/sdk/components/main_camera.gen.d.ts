import _m0 from "protobufjs/minimal";
/**
 * PBMainCamera.virtualCameraEntity defines which VirtualCamera entity is active at the moment.
 * This component may hold 'repeated common.CameraTransition' transitionOverrides in the future
 */
/**
 * @public
 */
export interface PBMainCamera {
    /** current active virtual camera */
    virtualCameraEntity?: number | undefined;
}
/**
 * @public
 */
export declare namespace PBMainCamera {
    function encode(message: PBMainCamera, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBMainCamera;
}
