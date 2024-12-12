"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBMainCamera = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBMainCamera() {
    return { virtualCameraEntity: undefined };
}
/**
 * @public
 */
var PBMainCamera;
(function (PBMainCamera) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.virtualCameraEntity !== undefined) {
            writer.uint32(8).uint32(message.virtualCameraEntity);
        }
        return writer;
    }
    PBMainCamera.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBMainCamera();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.virtualCameraEntity = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBMainCamera.decode = decode;
})(PBMainCamera = exports.PBMainCamera || (exports.PBMainCamera = {}));
