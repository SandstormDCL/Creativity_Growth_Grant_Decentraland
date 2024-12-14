import _m0 from "protobufjs/minimal";
/**
 * EngineInfo provides information about the graphics engine running the scene.
 * The values of this component are written at the "physics" stage of the ADR-148. Meaning
 * the tick_number and frame_number of the same frame could be used as correlation numbers
 * for timestamps in other components.
 */
/**
 * @public
 */
export interface PBEngineInfo {
    /** frame counter of the engine */
    frameNumber: number;
    /** total runtime of this scene in seconds */
    totalRuntime: number;
    /** tick counter of the scene as per ADR-148 */
    tickNumber: number;
}
/**
 * @public
 */
export declare namespace PBEngineInfo {
    function encode(message: PBEngineInfo, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBEngineInfo;
}
