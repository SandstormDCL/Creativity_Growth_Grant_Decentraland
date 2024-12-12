"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBVideoEvent = exports.VideoState = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const protobufPackageSarasa = "decentraland.sdk.components";
/**
 * @public
 */
var VideoState;
(function (VideoState) {
    VideoState[VideoState["VS_NONE"] = 0] = "VS_NONE";
    VideoState[VideoState["VS_ERROR"] = 1] = "VS_ERROR";
    VideoState[VideoState["VS_LOADING"] = 2] = "VS_LOADING";
    VideoState[VideoState["VS_READY"] = 3] = "VS_READY";
    VideoState[VideoState["VS_PLAYING"] = 4] = "VS_PLAYING";
    VideoState[VideoState["VS_BUFFERING"] = 5] = "VS_BUFFERING";
    VideoState[VideoState["VS_SEEKING"] = 6] = "VS_SEEKING";
    VideoState[VideoState["VS_PAUSED"] = 7] = "VS_PAUSED";
})(VideoState = exports.VideoState || (exports.VideoState = {}));
function createBasePBVideoEvent() {
    return { timestamp: 0, tickNumber: 0, currentOffset: 0, videoLength: 0, state: 0 };
}
/**
 * @public
 */
var PBVideoEvent;
(function (PBVideoEvent) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timestamp !== 0) {
            writer.uint32(8).uint32(message.timestamp);
        }
        if (message.tickNumber !== 0) {
            writer.uint32(16).uint32(message.tickNumber);
        }
        if (message.currentOffset !== 0) {
            writer.uint32(29).float(message.currentOffset);
        }
        if (message.videoLength !== 0) {
            writer.uint32(37).float(message.videoLength);
        }
        if (message.state !== 0) {
            writer.uint32(40).int32(message.state);
        }
        return writer;
    }
    PBVideoEvent.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBVideoEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.timestamp = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.tickNumber = reader.uint32();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.currentOffset = reader.float();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }
                    message.videoLength = reader.float();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBVideoEvent.decode = decode;
})(PBVideoEvent = exports.PBVideoEvent || (exports.PBVideoEvent = {}));
