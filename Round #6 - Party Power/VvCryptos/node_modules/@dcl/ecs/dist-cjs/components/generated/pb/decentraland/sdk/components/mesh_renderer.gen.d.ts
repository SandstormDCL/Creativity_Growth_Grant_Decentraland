import _m0 from "protobufjs/minimal";
/**
 * The MeshRenderer component renders a basic geometric shape for an Entity. It can be a cube, a
 * plane, a sphere or a cylinder.
 *
 * The cube and plane variants can include a UV texture mapping, so specific areas of a material
 * texture are rendered on different faces of the shape. They are serialized as a sequence of 2D
 * `float` coordinates, one for each corner of each side of each face.
 *
 * More complex shapes require the use of a `GltfContainer` component.
 */
/**
 * @public
 */
export interface PBMeshRenderer {
    mesh?: {
        $case: "box";
        box: PBMeshRenderer_BoxMesh;
    } | {
        $case: "sphere";
        sphere: PBMeshRenderer_SphereMesh;
    } | {
        $case: "cylinder";
        cylinder: PBMeshRenderer_CylinderMesh;
    } | {
        $case: "plane";
        plane: PBMeshRenderer_PlaneMesh;
    } | undefined;
}
/** BoxMesh renders a prism shape. */
/**
 * @public
 */
export interface PBMeshRenderer_BoxMesh {
    /** 96-value texture map (2D * 6 faces * 2 sides * 4 vertices) */
    uvs: number[];
}
/** CylinderMesh renders a truncated cone shape. */
/**
 * @public
 */
export interface PBMeshRenderer_CylinderMesh {
    /** (default 0.5) */
    radiusTop?: number | undefined;
    /** (default 0.5) */
    radiusBottom?: number | undefined;
}
/** PlaneMesh renders a 2D rectangular shape. */
/**
 * @public
 */
export interface PBMeshRenderer_PlaneMesh {
    /** 16-value texture map (2D * 1 face * 2 sides * 4 vertices) */
    uvs: number[];
}
/** SphereMesh renders a spherical shape. */
/**
 * @public
 */
export interface PBMeshRenderer_SphereMesh {
}
/**
 * @public
 */
export declare namespace PBMeshRenderer {
    function encode(message: PBMeshRenderer, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBMeshRenderer;
}
/**
 * @public
 */
export declare namespace PBMeshRenderer_BoxMesh {
    function encode(message: PBMeshRenderer_BoxMesh, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBMeshRenderer_BoxMesh;
}
/**
 * @public
 */
export declare namespace PBMeshRenderer_CylinderMesh {
    function encode(message: PBMeshRenderer_CylinderMesh, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBMeshRenderer_CylinderMesh;
}
/**
 * @public
 */
export declare namespace PBMeshRenderer_PlaneMesh {
    function encode(message: PBMeshRenderer_PlaneMesh, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBMeshRenderer_PlaneMesh;
}
/**
 * @public
 */
export declare namespace PBMeshRenderer_SphereMesh {
    function encode(_: PBMeshRenderer_SphereMesh, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBMeshRenderer_SphereMesh;
}
