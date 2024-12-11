import _m0 from "protobufjs/minimal";
import { LoadingState } from "./common/loading_state.gen";
/**
 * GltfContainerLoadingState is set by the engine and provides information about
 * the current state of the GltfContainer of an entity.
 */
/**
 * @public
 */
export interface PBGltfContainerLoadingState {
    currentState: LoadingState;
}
/**
 * @public
 */
export declare namespace PBGltfContainerLoadingState {
    function encode(message: PBGltfContainerLoadingState, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBGltfContainerLoadingState;
}
