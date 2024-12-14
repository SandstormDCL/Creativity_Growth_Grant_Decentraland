import _m0 from "protobufjs/minimal";
import { PBTween } from "./tween.gen";
/**
 * @public
 */
export declare const enum TweenLoop {
    TL_RESTART = 0,
    TL_YOYO = 1
}
/**
 * @public
 */
export interface PBTweenSequence {
    sequence: PBTween[];
    loop?: TweenLoop | undefined;
}
/**
 * @public
 */
export declare namespace PBTweenSequence {
    function encode(message: PBTweenSequence, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBTweenSequence;
}
