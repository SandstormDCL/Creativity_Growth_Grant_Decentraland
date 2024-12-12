"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBAnimationState = exports.PBAnimator = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBAnimator() {
    return { states: [] };
}
/**
 * @public
 */
var PBAnimator;
(function (PBAnimator) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.states) {
            PBAnimationState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    }
    PBAnimator.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBAnimator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.states.push(PBAnimationState.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBAnimator.decode = decode;
})(PBAnimator = exports.PBAnimator || (exports.PBAnimator = {}));
function createBasePBAnimationState() {
    return { clip: "", playing: undefined, weight: undefined, speed: undefined, loop: undefined, shouldReset: undefined };
}
/**
 * @public
 */
var PBAnimationState;
(function (PBAnimationState) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.clip !== "") {
            writer.uint32(18).string(message.clip);
        }
        if (message.playing !== undefined) {
            writer.uint32(24).bool(message.playing);
        }
        if (message.weight !== undefined) {
            writer.uint32(37).float(message.weight);
        }
        if (message.speed !== undefined) {
            writer.uint32(45).float(message.speed);
        }
        if (message.loop !== undefined) {
            writer.uint32(48).bool(message.loop);
        }
        if (message.shouldReset !== undefined) {
            writer.uint32(56).bool(message.shouldReset);
        }
        return writer;
    }
    PBAnimationState.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBAnimationState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.clip = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.playing = reader.bool();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }
                    message.weight = reader.float();
                    continue;
                case 5:
                    if (tag !== 45) {
                        break;
                    }
                    message.speed = reader.float();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.loop = reader.bool();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.shouldReset = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBAnimationState.decode = decode;
})(PBAnimationState = exports.PBAnimationState || (exports.PBAnimationState = {}));
