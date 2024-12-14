import { LastWriteWinElementSetComponentDefinition, Entity, IEngine } from '../../engine';
import { ColliderLayer, PBMeshCollider } from '../generated/index.gen';
/**
 * @public
 */
export interface MeshColliderComponentDefinitionExtended extends LastWriteWinElementSetComponentDefinition<PBMeshCollider> {
    /**
     * @public
     * Set a box in the MeshCollider component
     * @param entity - entity to create or replace the MeshCollider component
     * @param colliderMask - the set of layer where the collider reacts, default: Physics and Pointer
     */
    setBox(entity: Entity, colliderLayers?: ColliderLayer | ColliderLayer[]): void;
    /**
     * @public
     * Set a plane in the MeshCollider component
     * @param entity - entity to create or replace the MeshCollider component
     * @param colliderMask - the set of layer where the collider reacts, default: Physics and Pointer
     */
    setPlane(entity: Entity, colliderLayers?: ColliderLayer | ColliderLayer[]): void;
    /**
     * @public
     * Set a cylinder in the MeshCollider component
     * @param entity - entity to create or replace the MeshCollider component
     * @param radiusBottom - radius of bottom of cylinder
     * @param radiusTop - radius of top of cylinder
     * @param colliderMask - the set of layer where the collider reacts, default: Physics and Pointer
     */
    setCylinder(entity: Entity, radiusBottom?: number, radiusTop?: number, colliderLayers?: ColliderLayer | ColliderLayer[]): void;
    /**
     * @public
     * Set a sphere in the MeshCollider component
     * @param entity - entity to create or replace the MeshCollider component
     * @param colliderMask - the set of layer where the collider reacts, default: Physics and Pointer
     */
    setSphere(entity: Entity, colliderLayers?: ColliderLayer | ColliderLayer[]): void;
}
export declare function defineMeshColliderComponent(engine: Pick<IEngine, 'defineComponentFromSchema'>): MeshColliderComponentDefinitionExtended;
