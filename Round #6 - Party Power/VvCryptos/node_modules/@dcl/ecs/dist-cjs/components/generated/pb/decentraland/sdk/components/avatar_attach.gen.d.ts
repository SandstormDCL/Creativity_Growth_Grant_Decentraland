import _m0 from "protobufjs/minimal";
/** AvatarAnchorPointType determines the part of the avatar's body that anchors the Entity. */
/**
 * @public
 */
export declare const enum AvatarAnchorPointType {
    /** AAPT_POSITION - @deprecated consider parenting to `engine.PlayerEntity`, this will attach to player position with an arbitrary offset */
    AAPT_POSITION = 0,
    AAPT_NAME_TAG = 1,
    AAPT_HEAD = 4,
    AAPT_NECK = 5,
    AAPT_SPINE = 6,
    AAPT_SPINE1 = 7,
    AAPT_SPINE2 = 8,
    AAPT_HIP = 9,
    AAPT_LEFT_SHOULDER = 10,
    AAPT_LEFT_ARM = 11,
    AAPT_LEFT_FOREARM = 12,
    AAPT_LEFT_HAND = 2,
    AAPT_LEFT_HAND_INDEX = 13,
    AAPT_RIGHT_SHOULDER = 14,
    AAPT_RIGHT_ARM = 15,
    AAPT_RIGHT_FOREARM = 16,
    AAPT_RIGHT_HAND = 3,
    AAPT_RIGHT_HAND_INDEX = 17,
    AAPT_LEFT_UP_LEG = 18,
    AAPT_LEFT_LEG = 19,
    AAPT_LEFT_FOOT = 20,
    AAPT_LEFT_TOE_BASE = 21,
    AAPT_RIGHT_UP_LEG = 22,
    AAPT_RIGHT_LEG = 23,
    AAPT_RIGHT_FOOT = 24,
    AAPT_RIGHT_TOE_BASE = 25
}
/**
 * The AvatarAttach component automatically repositions an Entity to maintain the same position and
 * rotation relative to some part of an avatar, called the "anchor point". The Entity
 * will follow this anchor as it moves.
 *
 * The Entity's own Transform is overridden by this component. To offset position and adjust scale,
 * add a child to the anchored Entity and set a Transform on it instead.
 *
 * AvatarAnchorPointType indicates which part of the avatar the Entity must follow.
 */
/**
 * @public
 */
export interface PBAvatarAttach {
    /** the user ID of the avatar (default: local user) */
    avatarId?: string | undefined;
    /** the anchor point. */
    anchorPointId: AvatarAnchorPointType;
}
/**
 * @public
 */
export declare namespace PBAvatarAttach {
    function encode(message: PBAvatarAttach, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBAvatarAttach;
}
