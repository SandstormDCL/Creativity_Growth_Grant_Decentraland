import _m0 from "protobufjs/minimal";
/**
 * GltfContainer loads a GLTF file (and any additional files packaged inside) attached to an Entity.
 *
 * This allows the use of custom models, materials, collision boundaries and shapes that can't be
 * achieved using MeshRenderer, MeshCollider and other standard components.
 */
/**
 * @public
 */
export interface PBGltfContainer {
    /** the GLTF file path as listed in the scene's manifest. */
    src: string;
    /** default: 0 */
    visibleMeshesCollisionMask?: number | undefined;
    /** default: CL_POINTER | CL_PHYSICS */
    invisibleMeshesCollisionMask?: number | undefined;
}
/**
 * @public
 */
export declare namespace PBGltfContainer {
    function encode(message: PBGltfContainer, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBGltfContainer;
}
