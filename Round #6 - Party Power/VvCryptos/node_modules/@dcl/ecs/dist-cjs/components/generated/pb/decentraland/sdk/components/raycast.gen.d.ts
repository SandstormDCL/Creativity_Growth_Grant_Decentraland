import _m0 from "protobufjs/minimal";
import { Vector3 } from "../../common/vectors.gen";
/** RaycastQueryType indicates whether the ray should stop on the first collition, or continue. */
/**
 * @public
 */
export declare const enum RaycastQueryType {
    /** RQT_HIT_FIRST - Pick the first (not necessarily the closest) hit within the range */
    RQT_HIT_FIRST = 0,
    /** RQT_QUERY_ALL - Pick all hits within the range */
    RQT_QUERY_ALL = 1,
    /** RQT_NONE - Do not perform the raycast, only set the raycast result with empty hits */
    RQT_NONE = 2
}
/**
 * The PBRaycast component and PBRaycastResult are defined in https://adr.decentraland.org/adr/ADR-200
 *
 * The Raycast component allows scenes to request raycasting from the game engine. The results will
 * be available in a RaycastResult component set later on the same Entity.
 */
/**
 * @public
 */
export interface PBRaycast {
    /** Correlation ID, defined by the scene and used internally by the scene */
    timestamp?: number | undefined;
    /**
     * How much to offset the starting point of the ray, relative to the entity's transform.
     * Defaults to vec3(0,0,0)
     */
    originOffset?: Vector3 | undefined;
    direction?: {
        $case: "localDirection";
        localDirection: Vector3;
    } | {
        $case: "globalDirection";
        globalDirection: Vector3;
    } | {
        $case: "globalTarget";
        globalTarget: Vector3;
    } | {
        $case: "targetEntity";
        targetEntity: number;
    } | undefined;
    /** Maximum length of the ray in virtual meters (global space) */
    maxDistance: number;
    /** the RaycastQueryType behavior */
    queryType: RaycastQueryType;
    /**
     * Indicates the renderer to perform the raycast on every scene tick (ADR-148),
     * otherwise it will be performed only once, defaults to false
     */
    continuous?: boolean | undefined;
    /** Collision mask, by default CL_POINTER | CL_PHYSICS */
    collisionMask?: number | undefined;
}
/**
 * @public
 */
export declare namespace PBRaycast {
    function encode(message: PBRaycast, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBRaycast;
}
