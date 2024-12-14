"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBEngineInfo = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBEngineInfo() {
    return { frameNumber: 0, totalRuntime: 0, tickNumber: 0 };
}
/**
 * @public
 */
var PBEngineInfo;
(function (PBEngineInfo) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.frameNumber !== 0) {
            writer.uint32(8).uint32(message.frameNumber);
        }
        if (message.totalRuntime !== 0) {
            writer.uint32(21).float(message.totalRuntime);
        }
        if (message.tickNumber !== 0) {
            writer.uint32(24).uint32(message.tickNumber);
        }
        return writer;
    }
    PBEngineInfo.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBEngineInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.frameNumber = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.totalRuntime = reader.float();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.tickNumber = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBEngineInfo.decode = decode;
})(PBEngineInfo = exports.PBEngineInfo || (exports.PBEngineInfo = {}));
