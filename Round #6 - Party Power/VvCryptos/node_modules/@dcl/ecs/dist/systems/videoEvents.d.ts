import { DeepReadonlyObject, Entity } from '../engine';
import { PBVideoEvent } from '../components';
/**
 * @public
 */
export type VideoEventsSystemCallback = (event: DeepReadonlyObject<PBVideoEvent>) => void;
/**
 * @public
 */
export interface VideoEventsSystem {
    removeVideoEventsEntity(entity: Entity): void;
    registerVideoEventsEntity(entity: Entity, callback: VideoEventsSystemCallback): void;
    hasVideoEventsEntity(entity: Entity): boolean;
    /**
     * Returns the latest state of the VideoEvent
     * @param entity - Entity to retrieve the video status
     */
    getVideoState(entity: Entity): DeepReadonlyObject<PBVideoEvent> | undefined;
}
