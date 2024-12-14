"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBVirtualCamera = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const camera_transition_gen_1 = require("./common/camera_transition.gen");
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBVirtualCamera() {
    return { defaultTransition: undefined, lookAtEntity: undefined };
}
/**
 * @public
 */
var PBVirtualCamera;
(function (PBVirtualCamera) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.defaultTransition !== undefined) {
            camera_transition_gen_1.CameraTransition.encode(message.defaultTransition, writer.uint32(10).fork()).ldelim();
        }
        if (message.lookAtEntity !== undefined) {
            writer.uint32(16).uint32(message.lookAtEntity);
        }
        return writer;
    }
    PBVirtualCamera.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBVirtualCamera();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.defaultTransition = camera_transition_gen_1.CameraTransition.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.lookAtEntity = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBVirtualCamera.decode = decode;
})(PBVirtualCamera = exports.PBVirtualCamera || (exports.PBVirtualCamera = {}));
