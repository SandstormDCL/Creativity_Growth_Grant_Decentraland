import _m0 from "protobufjs/minimal";
import { MediaState } from "./common/media_state.gen";
/**
 * @public
 */
export interface PBAudioEvent {
    state: MediaState;
    /** monotonic counter */
    timestamp: number;
}
/**
 * @public
 */
export declare namespace PBAudioEvent {
    function encode(message: PBAudioEvent, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBAudioEvent;
}
