import { RaycastQueryType, PBRaycastResult } from '../components';
import { DeepReadonlyObject, Entity } from '../engine';
import { Vector3 } from '../components/generated/pb/decentraland/common/vectors.gen';
/**
 * @public
 */
export type RaycastSystemCallback = (event: DeepReadonlyObject<PBRaycastResult>) => void;
/**
 * @public
 */
export type RaycastSystemOptions = {
    originOffset?: Vector3 | undefined;
    maxDistance: number;
    queryType: RaycastQueryType;
    continuous?: boolean | undefined;
    collisionMask?: number | undefined;
};
export type LocalDirectionRaycastSystemOptions = {
    direction?: Vector3;
};
export type LocalDirectionRaycastOptions = RaycastSystemOptions & LocalDirectionRaycastSystemOptions;
export type GlobalDirectionRaycastSystemOptions = {
    direction?: Vector3;
};
export type GlobalDirectionRaycastOptions = RaycastSystemOptions & GlobalDirectionRaycastSystemOptions;
export type GlobalTargetRaycastSystemOptions = {
    target?: Vector3;
};
export type GlobalTargetRaycastOptions = RaycastSystemOptions & GlobalTargetRaycastSystemOptions;
export type TargetEntityRaycastSystemOptions = {
    targetEntity?: number;
};
export type TargetEntityRaycastOptions = RaycastSystemOptions & TargetEntityRaycastSystemOptions;
/**
 * @public
 */
export interface RaycastSystem {
    /**
     * @public
     * Remove the callback for raycast event
     * @param entity - Entity where the callback was attached
     */
    removeRaycasterEntity(entity: Entity): void;
    /**
     * @public
     * Execute callback when the entity receives a RaycastResult component update.
     * Uses a Vector3 entity-local direction value to calculate the ray direction
     * @param raycastData -  Entity to attach the callback and Raycast configuration options
     * @param callback - Function to execute when the entity's RaycastResult component is updated
     */
    registerLocalDirectionRaycast(raycastData: {
        entity: Entity;
        opts?: Partial<LocalDirectionRaycastOptions>;
    }, callback: RaycastSystemCallback): void;
    /**
     * @deprecated use registerLocalDirectionRaycast(raycastData, cb) instead
     * @param entity - Entity to attach the callback
     * @param callback - Function to execute when the entity's RaycastResult component is updated
     * @param options - Raycast configuration options
     */
    registerLocalDirectionRaycast(entity: Entity, callback: RaycastSystemCallback, options?: Partial<LocalDirectionRaycastOptions>): void;
    /**
     * @public
     * Execute callback when the entity receives a RaycastResult component update.
     * Uses a Vector3 global direction value to calculate the ray direction
     * @param raycastData - Entity to attach the callback
     * @param callback - Function to execute when the entity's RaycastResult component is updated
     */
    registerGlobalDirectionRaycast(raycastData: {
        entity: Entity;
        opts?: Partial<GlobalDirectionRaycastOptions>;
    }, callback: RaycastSystemCallback): void;
    /**
     * @deprecated use registerGlobalDirectionRaycast(raycastData, cb) instead
     * @param entity - Entity to attach the callback
     * @param callback - Function to execute when the entity's RaycastResult component is updated
     * @param options - Raycast configuration options
     */
    registerGlobalDirectionRaycast(entity: Entity, callback: RaycastSystemCallback, options?: Partial<GlobalDirectionRaycastOptions>): void;
    /**
     * @public
     * Execute callback when the entity receives a RaycastResult component update.
     * Uses a Vector3 global target position to calculate the ray direction
     * @param raycastData - Entity to attach the callback and Raycast configuration options
     * @param callback - Function to execute when the entity's RaycastResult component is updated
     */
    registerGlobalTargetRaycast(raycastData: {
        entity: Entity;
        opts?: Partial<GlobalTargetRaycastOptions>;
    }, callback: RaycastSystemCallback): void;
    /**
     * @deprecated use registerGlobalTargetRaycast(raycastData, cb) instead
     * @param entity - Entity to attach the callback
     * @param callback - Function to execute when the entity's RaycastResult component is updated
     * @param options - Raycast configuration options
     */
    registerGlobalTargetRaycast(entity: Entity, callback: RaycastSystemCallback, options?: Partial<GlobalTargetRaycastOptions>): void;
    /**
     * @public
     * Execute callback when the entity receives a RaycastResult component update.
     * Uses an target Entity value to calculate the ray direction
     * @param raycastData - Entity to attach the callback
     * @param callback - Function to execute when the entity's RaycastResult component is updated
     * @param options - Raycast configuration options
     */
    registerTargetEntityRaycast(raycastData: {
        entity: Entity;
        opts?: Partial<TargetEntityRaycastOptions>;
    }, callback: RaycastSystemCallback): void;
    /**
     * @deprecated use registerTargetEntityRaycast(raycastData, cb) instead
     * @param entity - Entity to attach the callback
     * @param callback - Function to execute when the entity's RaycastResult component is updated
     * @param options - Raycast configuration options
     */
    registerTargetEntityRaycast(entity: Entity, callback: RaycastSystemCallback, options?: Partial<TargetEntityRaycastOptions>): void;
    /**
     * @public
     * Creates Raycast local direction opts with defaults
     */
    localDirectionOptions(options?: Partial<LocalDirectionRaycastOptions>): RaycastSystemOptions;
    /**
     * @public
     * Creates Raycast global direction opts with defaults
     */
    globalDirectionOptions(options?: Partial<GlobalDirectionRaycastOptions>): RaycastSystemOptions;
    /**
     * @public
     * Creates Raycast global target direction opts with defaults
     */
    globalTargetOptions(options?: Partial<GlobalTargetRaycastOptions>): RaycastSystemOptions;
    /**
     * @public
     * Creates Raycast target entity opts with defaults
     */
    targetEntitytOptions(options?: Partial<TargetEntityRaycastOptions>): RaycastSystemOptions;
    /**
     * @public
     * Immediate mode Raycast to be used on a sytem rather than callbacks
     *
     * Use the options helper to create the specified raycast i.e. localDirectionOptions(opts)
     */
    registerRaycast(entity: Entity, options: RaycastSystemOptions): DeepReadonlyObject<PBRaycastResult> | null;
}
