"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBAvatarAttach = exports.AvatarAnchorPointType = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const protobufPackageSarasa = "decentraland.sdk.components";
/** AvatarAnchorPointType determines the part of the avatar's body that anchors the Entity. */
/**
 * @public
 */
var AvatarAnchorPointType;
(function (AvatarAnchorPointType) {
    /** AAPT_POSITION - @deprecated consider parenting to `engine.PlayerEntity`, this will attach to player position with an arbitrary offset */
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_POSITION"] = 0] = "AAPT_POSITION";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_NAME_TAG"] = 1] = "AAPT_NAME_TAG";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_HEAD"] = 4] = "AAPT_HEAD";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_NECK"] = 5] = "AAPT_NECK";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_SPINE"] = 6] = "AAPT_SPINE";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_SPINE1"] = 7] = "AAPT_SPINE1";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_SPINE2"] = 8] = "AAPT_SPINE2";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_HIP"] = 9] = "AAPT_HIP";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_LEFT_SHOULDER"] = 10] = "AAPT_LEFT_SHOULDER";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_LEFT_ARM"] = 11] = "AAPT_LEFT_ARM";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_LEFT_FOREARM"] = 12] = "AAPT_LEFT_FOREARM";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_LEFT_HAND"] = 2] = "AAPT_LEFT_HAND";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_LEFT_HAND_INDEX"] = 13] = "AAPT_LEFT_HAND_INDEX";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_RIGHT_SHOULDER"] = 14] = "AAPT_RIGHT_SHOULDER";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_RIGHT_ARM"] = 15] = "AAPT_RIGHT_ARM";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_RIGHT_FOREARM"] = 16] = "AAPT_RIGHT_FOREARM";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_RIGHT_HAND"] = 3] = "AAPT_RIGHT_HAND";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_RIGHT_HAND_INDEX"] = 17] = "AAPT_RIGHT_HAND_INDEX";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_LEFT_UP_LEG"] = 18] = "AAPT_LEFT_UP_LEG";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_LEFT_LEG"] = 19] = "AAPT_LEFT_LEG";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_LEFT_FOOT"] = 20] = "AAPT_LEFT_FOOT";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_LEFT_TOE_BASE"] = 21] = "AAPT_LEFT_TOE_BASE";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_RIGHT_UP_LEG"] = 22] = "AAPT_RIGHT_UP_LEG";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_RIGHT_LEG"] = 23] = "AAPT_RIGHT_LEG";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_RIGHT_FOOT"] = 24] = "AAPT_RIGHT_FOOT";
    AvatarAnchorPointType[AvatarAnchorPointType["AAPT_RIGHT_TOE_BASE"] = 25] = "AAPT_RIGHT_TOE_BASE";
})(AvatarAnchorPointType = exports.AvatarAnchorPointType || (exports.AvatarAnchorPointType = {}));
function createBasePBAvatarAttach() {
    return { avatarId: undefined, anchorPointId: 0 };
}
/**
 * @public
 */
var PBAvatarAttach;
(function (PBAvatarAttach) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.avatarId !== undefined) {
            writer.uint32(10).string(message.avatarId);
        }
        if (message.anchorPointId !== 0) {
            writer.uint32(16).int32(message.anchorPointId);
        }
        return writer;
    }
    PBAvatarAttach.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBAvatarAttach();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.avatarId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.anchorPointId = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBAvatarAttach.decode = decode;
})(PBAvatarAttach = exports.PBAvatarAttach || (exports.PBAvatarAttach = {}));
