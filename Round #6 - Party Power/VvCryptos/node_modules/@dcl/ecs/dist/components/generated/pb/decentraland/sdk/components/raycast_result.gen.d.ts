import _m0 from "protobufjs/minimal";
import { Vector3 } from "../../common/vectors.gen";
import { RaycastHit } from "./common/raycast_hit.gen";
/**
 * The PBRaycast component and PBRaycastResult are defined in https://adr.decentraland.org/adr/ADR-200
 *
 * The RaycastResult component is added to an Entity when the results of a previously attached
 * Raycast component are available. It contains information about the ray and any objects it
 * collided with.
 */
/**
 * @public
 */
export interface PBRaycastResult {
    /** timestamp is a correlation id, copied from the PBRaycast */
    timestamp?: number | undefined;
    /** the starting point of the ray in global coordinates */
    globalOrigin: Vector3 | undefined;
    /** the direction vector of the ray in global coordinates */
    direction: Vector3 | undefined;
    /** zero or more hits */
    hits: RaycastHit[];
    /** number of tick in which the event was produced, equals to EngineInfo.tick_number */
    tickNumber: number;
}
/**
 * @public
 */
export declare namespace PBRaycastResult {
    function encode(message: PBRaycastResult, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBRaycastResult;
}
