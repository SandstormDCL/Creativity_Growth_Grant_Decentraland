import { Entity, IEngine } from '../../engine';
import { LastWriteWinElementSetComponentDefinition } from '../../engine/component';
import { PBAnimationState, PBAnimator } from '../generated/pb/decentraland/sdk/components/animator.gen';
/**
 * @public
 */
export interface AnimatorComponentDefinitionExtended extends LastWriteWinElementSetComponentDefinition<PBAnimator> {
    /**
     * @public
     *
     * Get a `mutable` version of animator clip
     * @param entity - entity with Animator component
     * @param clipName - the field `clip` of the component
     * @returns the clip or fails if it isn't found
     */
    getClip(entity: Entity, clipName: string): PBAnimationState;
    /**
     * @public
     *
     * Get a `mutable` version of animator clip
     * @param entity - entity with Animator component
     * @param clipName - the field `clip` of the component
     * @returns the clip or null if it isn't found
     */
    getClipOrNull(entity: Entity, clipName: string): PBAnimationState | null;
    /**
     * @public
     *
     * Set playing=true the animation `$name`
     * @param entity - entity with Animator component
     * @param clipName - animation name
     * @param resetCursor - the animation starts at 0 or continues from the current cursor position
     * @returns true in successful playing, false if it doesn't find the Animator or clip
     */
    playSingleAnimation(entity: Entity, clipName: string, resetCursor?: boolean): boolean;
    /**
     * @public
     *
     * Set playing=false all animations
     * @param entity - entity with Animator component
     * @param resetCursor - the animation stops at 0 or at the current cursor position
     * @returns true in successful playing, false if it doesn't find the Animator
     */
    stopAllAnimations(entity: Entity, resetCursor?: boolean): boolean;
}
export declare function defineAnimatorComponent(engine: Pick<IEngine, 'defineComponentFromSchema'>): AnimatorComponentDefinitionExtended;
