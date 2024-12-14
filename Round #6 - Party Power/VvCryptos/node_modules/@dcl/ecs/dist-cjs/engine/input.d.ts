import { InputAction } from '../components/generated/pb/decentraland/sdk/components/common/input_action.gen';
import { PointerEventType } from '../components/generated/pb/decentraland/sdk/components/common/input_action.gen';
import { PBPointerEventsResult } from '../components/generated/pb/decentraland/sdk/components/pointer_events_result.gen';
import { Entity } from './entity';
import { IEngine } from './types';
/**
 * @public
 */
export type IInputSystem = {
    /**
     * @public
     * Check if a pointer event has been emitted in the last tick-update.
     * @param inputAction - the input action to query
     * @param pointerEventType - the pointer event type to query
     * @param entity - the entity to query, ignore for global
     * @returns boolean
     */
    isTriggered: (inputAction: InputAction, pointerEventType: PointerEventType, entity?: Entity) => boolean;
    /**
     * @public
     * Check if an input action is currently being pressed.
     * @param inputAction - the input action to query
     * @returns boolean
     */
    isPressed: (inputAction: InputAction) => boolean;
    /**
     * @public
     * Get the input command info if a pointer event has been emitted in the last tick-update.
     * @param inputAction - the input action to query
     * @param pointerEventType - the pointer event type to query
     * @param entity - the entity to query, ignore for global
     * @returns the input command info or undefined if there is no command in the last tick-update
     */
    getInputCommand: (inputAction: InputAction, pointerEventType: PointerEventType, entity?: Entity) => PBPointerEventsResult | null;
};
/**
 * @public
 * ____DO NOT USE ____ use inputSystem instead
 */
export declare function createInputSystem(engine: IEngine): IInputSystem;
