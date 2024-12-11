import { Entity, IEngine } from '../engine';
export type TweenSystem = {
    tweenCompleted(entity: Entity): boolean;
};
/**
 * @public
 * @returns tween helper to be used on the scene
 */
export declare function createTweenSystem(engine: IEngine): TweenSystem;
