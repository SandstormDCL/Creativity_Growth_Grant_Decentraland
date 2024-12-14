"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBTweenSequence = exports.TweenLoop = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const tween_gen_1 = require("./tween.gen");
const protobufPackageSarasa = "decentraland.sdk.components";
/**
 * @public
 */
var TweenLoop;
(function (TweenLoop) {
    TweenLoop[TweenLoop["TL_RESTART"] = 0] = "TL_RESTART";
    TweenLoop[TweenLoop["TL_YOYO"] = 1] = "TL_YOYO";
})(TweenLoop = exports.TweenLoop || (exports.TweenLoop = {}));
function createBasePBTweenSequence() {
    return { sequence: [], loop: undefined };
}
/**
 * @public
 */
var PBTweenSequence;
(function (PBTweenSequence) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.sequence) {
            tween_gen_1.PBTween.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.loop !== undefined) {
            writer.uint32(16).int32(message.loop);
        }
        return writer;
    }
    PBTweenSequence.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBTweenSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sequence.push(tween_gen_1.PBTween.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.loop = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBTweenSequence.decode = decode;
})(PBTweenSequence = exports.PBTweenSequence || (exports.PBTweenSequence = {}));
