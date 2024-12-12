import _m0 from "protobufjs/minimal";
import { Vector3 } from "../../../common/vectors.gen";
/** RaycastHit contains information about the intersection of a ray with a mesh. */
/**
 * @public
 */
export interface RaycastHit {
    /** Position will be relative to the scene */
    position: Vector3 | undefined;
    /** the starting point of the ray in global coordinates */
    globalOrigin: Vector3 | undefined;
    /** the direction vector of the ray in global coordinates */
    direction: Vector3 | undefined;
    /** normal of the hit surface in global coordinates */
    normalHit: Vector3 | undefined;
    /** the distance between the ray origin and the hit position */
    length: number;
    /** mesh name, if collision happened inside a GltfContainer */
    meshName?: string | undefined;
    /** the ID of the Entity that has the impacted mesh attached */
    entityId?: number | undefined;
}
/**
 * @public
 */
export declare namespace RaycastHit {
    function encode(message: RaycastHit, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): RaycastHit;
}
