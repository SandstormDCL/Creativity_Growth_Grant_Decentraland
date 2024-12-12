import _m0 from "protobufjs/minimal";
/**
 * @public
 */
export declare const enum VideoState {
    VS_NONE = 0,
    VS_ERROR = 1,
    VS_LOADING = 2,
    VS_READY = 3,
    VS_PLAYING = 4,
    VS_BUFFERING = 5,
    VS_SEEKING = 6,
    VS_PAUSED = 7
}
/**
 * @public
 */
export interface PBVideoEvent {
    /** monotonic counter */
    timestamp: number;
    /** number of tick in which the event was produced, equals to EngineInfo.tick_number */
    tickNumber: number;
    currentOffset: number;
    videoLength: number;
    state: VideoState;
}
/**
 * @public
 */
export declare namespace PBVideoEvent {
    function encode(message: PBVideoEvent, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBVideoEvent;
}
