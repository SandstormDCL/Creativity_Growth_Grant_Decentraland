import _m0 from "protobufjs/minimal";
/**
 * PointerLock indicates whether the mouse pointer is automatically following the camera’s point of
 * focus (locked), or can move freely on the screen (unlocked).
 */
/**
 * @public
 */
export interface PBPointerLock {
    /** whether the pointer is locked */
    isPointerLocked: boolean;
}
/**
 * @public
 */
export declare namespace PBPointerLock {
    function encode(message: PBPointerLock, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBPointerLock;
}
