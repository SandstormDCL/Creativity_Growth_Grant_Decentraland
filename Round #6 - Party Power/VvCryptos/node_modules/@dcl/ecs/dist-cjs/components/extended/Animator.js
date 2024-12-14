"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineAnimatorComponent = void 0;
const index_gen_1 = require("../generated/index.gen");
function defineAnimatorComponent(engine) {
    const theComponent = (0, index_gen_1.Animator)(engine);
    /**
     * @returns The tuple [animator, clip]
     */
    function getClipAndAnimator(entity, clipName) {
        const anim = theComponent.getMutableOrNull(entity);
        if (!anim)
            return [null, null];
        const state = anim.states.find((item) => item.clip === clipName);
        if (!state)
            return [anim, null];
        return [anim, state];
    }
    return {
        ...theComponent,
        getClipOrNull(entity, clipName) {
            const [_, state] = getClipAndAnimator(entity, clipName);
            return state;
        },
        getClip(entity, clipName) {
            const [animator, state] = getClipAndAnimator(entity, clipName);
            if (!animator) {
                throw new Error(`There is no Animator found in the entity ${entity}`);
            }
            if (!state) {
                throw new Error(`The Animator component of ${entity} has no the state ${clipName}`);
            }
            return state;
        },
        playSingleAnimation(entity, clipName, shouldReset = true) {
            const [animator, state] = getClipAndAnimator(entity, clipName);
            if (!animator || !state)
                return false;
            // Reset all other animations
            for (const state of animator.states) {
                state.playing = false;
                state.shouldReset = true;
            }
            state.playing = true;
            state.shouldReset = shouldReset;
            return true;
        },
        stopAllAnimations(entity, resetCursor = true) {
            // Get the mutable to modifying
            const animator = theComponent.getMutableOrNull(entity);
            if (!animator)
                return false;
            // Reset all other animations
            for (const state of animator.states) {
                state.playing = false;
                state.shouldReset = resetCursor;
            }
            return true;
        }
    };
}
exports.defineAnimatorComponent = defineAnimatorComponent;
