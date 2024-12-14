"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBPointerLock = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBPointerLock() {
    return { isPointerLocked: false };
}
/**
 * @public
 */
var PBPointerLock;
(function (PBPointerLock) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.isPointerLocked === true) {
            writer.uint32(8).bool(message.isPointerLocked);
        }
        return writer;
    }
    PBPointerLock.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBPointerLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.isPointerLocked = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBPointerLock.decode = decode;
})(PBPointerLock = exports.PBPointerLock || (exports.PBPointerLock = {}));
