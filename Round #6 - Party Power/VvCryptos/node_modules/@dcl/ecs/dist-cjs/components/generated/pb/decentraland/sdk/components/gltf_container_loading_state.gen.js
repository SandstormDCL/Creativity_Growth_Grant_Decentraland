"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBGltfContainerLoadingState = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBGltfContainerLoadingState() {
    return { currentState: 0 };
}
/**
 * @public
 */
var PBGltfContainerLoadingState;
(function (PBGltfContainerLoadingState) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.currentState !== 0) {
            writer.uint32(8).int32(message.currentState);
        }
        return writer;
    }
    PBGltfContainerLoadingState.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBGltfContainerLoadingState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.currentState = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBGltfContainerLoadingState.decode = decode;
})(PBGltfContainerLoadingState = exports.PBGltfContainerLoadingState || (exports.PBGltfContainerLoadingState = {}));
