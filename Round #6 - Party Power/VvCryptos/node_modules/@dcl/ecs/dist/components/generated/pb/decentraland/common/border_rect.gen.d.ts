import _m0 from "protobufjs/minimal";
/** Defines indents from respective edges */
/**
 * @public
 */
export interface BorderRect {
    top: number;
    left: number;
    right: number;
    bottom: number;
}
/** Defines a rect with x, y, width and height */
/**
 * @public
 */
export interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}
/**
 * @public
 */
export declare namespace BorderRect {
    function encode(message: BorderRect, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): BorderRect;
}
/**
 * @public
 */
export declare namespace Rect {
    function encode(message: Rect, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): Rect;
}
