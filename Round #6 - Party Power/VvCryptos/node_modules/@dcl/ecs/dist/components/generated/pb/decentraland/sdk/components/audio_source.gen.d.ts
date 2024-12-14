import _m0 from "protobufjs/minimal";
/**
 * The AudioSource component can play an audio clips bundled with the scene, controlling some
 * of the behavior.
 *
 * In each AudioSource instance, the sound is spatially located at the associated entity’s position,
 * given by its Transform.
 *
 * Note that the `audio_clip_url` is not actually a URL, but rather the path of a file bundled with
 * the scene and declared in its manifest. The name was chosen because the URL use-case will
 * eventually be supported.
 *
 * `playing=true` when it's previously `playing=true`
 *  a) if clip is playing and `current_time` is NOT SET, the clip remains in the current `current_time`
 *  b) if clip is stopped or `current_time` is set, the clip is played from the `current_time` (if set) or from the beginning
 *
 * If other property (volume, loop, pitch) is changed while playing, the clip is keep playing with the new properties
 * Changing `audio_clip_url` while playing stops the current clip and plays the new one (as a new instance)
 */
/**
 * @public
 */
export interface PBAudioSource {
    /** whether the clip is currently playing. */
    playing?: boolean | undefined;
    /** the audio volume (default: 1.0). */
    volume?: number | undefined;
    /** whether the clip should restart when finished. */
    loop?: boolean | undefined;
    /** the audio pitch (default: 1.0). */
    pitch?: number | undefined;
    /** the clip path as given in the `files` array of the scene's manifest. */
    audioClipUrl: string;
    /** specifies the current playback time of the clip in seconds (default: 0). */
    currentTime?: number | undefined;
    /** whether the audio plays at constant volume across the scene. */
    global?: boolean | undefined;
}
/**
 * @public
 */
export declare namespace PBAudioSource {
    function encode(message: PBAudioSource, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBAudioSource;
}
