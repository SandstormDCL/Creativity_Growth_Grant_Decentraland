import _m0 from "protobufjs/minimal";
/**
 * @public
 */
export interface Position {
    x: number;
    y: number;
    z: number;
}
/**
 * @public
 */
export interface Vector3 {
    x: number;
    y: number;
    z: number;
}
/**
 * @public
 */
export interface Vector2 {
    x: number;
    y: number;
}
/**
 * @public
 */
export interface Quaternion {
    x: number;
    y: number;
    z: number;
    w: number;
}
/**
 * @public
 */
export declare namespace Position {
    function encode(message: Position, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): Position;
}
/**
 * @public
 */
export declare namespace Vector3 {
    function encode(message: Vector3, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): Vector3;
}
/**
 * @public
 */
export declare namespace Vector2 {
    function encode(message: Vector2, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): Vector2;
}
/**
 * @public
 */
export declare namespace Quaternion {
    function encode(message: Quaternion, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): Quaternion;
}
