import _m0 from "protobufjs/minimal";
/**
 * @public
 */
export declare const enum TweenStateStatus {
    TS_ACTIVE = 0,
    TS_COMPLETED = 1,
    TS_PAUSED = 2
}
/**
 * @public
 */
export interface PBTweenState {
    state: TweenStateStatus;
    /** between 0 and 1 */
    currentTime: number;
}
/**
 * @public
 */
export declare namespace PBTweenState {
    function encode(message: PBTweenState, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBTweenState;
}
