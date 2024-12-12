"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBAudioSource = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBAudioSource() {
    return {
        playing: undefined,
        volume: undefined,
        loop: undefined,
        pitch: undefined,
        audioClipUrl: "",
        currentTime: undefined,
        global: undefined,
    };
}
/**
 * @public
 */
var PBAudioSource;
(function (PBAudioSource) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.playing !== undefined) {
            writer.uint32(8).bool(message.playing);
        }
        if (message.volume !== undefined) {
            writer.uint32(21).float(message.volume);
        }
        if (message.loop !== undefined) {
            writer.uint32(24).bool(message.loop);
        }
        if (message.pitch !== undefined) {
            writer.uint32(37).float(message.pitch);
        }
        if (message.audioClipUrl !== "") {
            writer.uint32(42).string(message.audioClipUrl);
        }
        if (message.currentTime !== undefined) {
            writer.uint32(53).float(message.currentTime);
        }
        if (message.global !== undefined) {
            writer.uint32(56).bool(message.global);
        }
        return writer;
    }
    PBAudioSource.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBAudioSource();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.playing = reader.bool();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.volume = reader.float();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.loop = reader.bool();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }
                    message.pitch = reader.float();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.audioClipUrl = reader.string();
                    continue;
                case 6:
                    if (tag !== 53) {
                        break;
                    }
                    message.currentTime = reader.float();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.global = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBAudioSource.decode = decode;
})(PBAudioSource = exports.PBAudioSource || (exports.PBAudioSource = {}));
