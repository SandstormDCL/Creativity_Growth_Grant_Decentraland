import _m0 from "protobufjs/minimal";
/**
 * The Animator component is a container for multiple potential animations an Entity can display,
 * separately or at the same time. It can be used to start, stop or blend animations; as well as
 * to inspect their playback state.
 *
 * Animations have a `weight` property, which determines how pronounced the animation will be. This
 * can be adjusted to blend animations together, or gracefully transition from one to the next.
 */
/**
 * @public
 */
export interface PBAnimator {
    /** a collection of animations and their current state */
    states: PBAnimationState[];
}
/** AnimationState indicates the status and configuration of one available animation. */
/**
 * @public
 */
export interface PBAnimationState {
    /** the animation path in the `files` array of the scene manifest */
    clip: string;
    /** whether this animation is currently playing */
    playing?: boolean | undefined;
    /** @experimental the "weight" of this animation (see below, default: 1.0) */
    weight?: number | undefined;
    /** the playback speed (default: 1.0) */
    speed?: number | undefined;
    /** whether the animation repeats (**) until is manually stopped (default: true) */
    loop?: boolean | undefined;
    /** whether the animation is restored to the initial state (*) when it changes from stopped to playing (default: false) */
    shouldReset?: boolean | undefined;
}
/**
 * @public
 */
export declare namespace PBAnimator {
    function encode(message: PBAnimator, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBAnimator;
}
/**
 * @public
 */
export declare namespace PBAnimationState {
    function encode(message: PBAnimationState, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBAnimationState;
}
