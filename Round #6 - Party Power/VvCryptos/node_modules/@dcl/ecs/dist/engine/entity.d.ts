/**
 * @public It only defines the type explicitly, no effects.
 */
export type uint32 = number;
/**
 * @public The Entity is a number type, the cast is only for typescript, the final javascript code treat as a number
 *  version  number
 * [31...16][15...0]
 *
 * Convertion from entity to its compound numbers:
 * To get the version => ((entity & MASK_UPPER_16_ON_32) >> 16) & MAX_U16
 * To get the number  => entity & MAX_U16
 *
 * Convertion from its compound numbers to entity:
 * entity = (entityNumber & MAX_U16) | ((entityVersion & MAX_U16) << 16)
 */
export type Entity = number & {
    __entity_type: '';
};
/**
 * This first 512 entities are reserved by the renderer
 */
export declare const RESERVED_STATIC_ENTITIES = 512;
/**
 * @public
 */
export declare namespace EntityUtils {
    /**
     * @returns [entityNumber, entityVersion]
     */
    function fromEntityId(entityId: Entity): [number, number];
    /**
     * @returns compound number from entityNumber and entityVerison
     */
    function toEntityId(entityNumber: number, entityVersion: number): Entity;
}
/**
 * @public
 */
export declare enum EntityState {
    Unknown = 0,
    /**
     * The entity was generated and added to the usedEntities set
     */
    UsedEntity = 1,
    /**
     * The entity was removed from current engine or remotely
     */
    Removed = 2,
    /**
     * The entity is reserved number.
     */
    Reserved = 3
}
/**
 * @public
 */
export type IEntityContainer = {
    generateEntity(networked?: boolean): Entity;
    removeEntity(entity: Entity): boolean;
    getEntityState(entity: Entity): EntityState;
    getExistingEntities(): Set<Entity>;
    releaseRemovedEntities(): Entity[];
    updateRemovedEntity(entity: Entity): boolean;
    updateUsedEntity(entity: Entity): boolean;
};
/**
 * @public
 */
export declare function createEntityContainer(opts?: {
    reservedStaticEntities: number;
}): IEntityContainer;
