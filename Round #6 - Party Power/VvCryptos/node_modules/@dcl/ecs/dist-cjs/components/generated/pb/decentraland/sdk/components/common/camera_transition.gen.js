"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CameraTransition = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const protobufPackageSarasa = "decentraland.sdk.components.common";
function createBaseCameraTransition() {
    return { transitionMode: undefined };
}
/**
 * @public
 */
var CameraTransition;
(function (CameraTransition) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        switch (message.transitionMode?.$case) {
            case "time":
                writer.uint32(13).float(message.transitionMode.time);
                break;
            case "speed":
                writer.uint32(21).float(message.transitionMode.speed);
                break;
        }
        return writer;
    }
    CameraTransition.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCameraTransition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }
                    message.transitionMode = { $case: "time", time: reader.float() };
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.transitionMode = { $case: "speed", speed: reader.float() };
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    CameraTransition.decode = decode;
})(CameraTransition = exports.CameraTransition || (exports.CameraTransition = {}));
