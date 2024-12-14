"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBCameraModeArea = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const vectors_gen_1 = require("../../common/vectors.gen");
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBCameraModeArea() {
    return { area: undefined, mode: 0 };
}
/**
 * @public
 */
var PBCameraModeArea;
(function (PBCameraModeArea) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.area !== undefined) {
            vectors_gen_1.Vector3.encode(message.area, writer.uint32(10).fork()).ldelim();
        }
        if (message.mode !== 0) {
            writer.uint32(16).int32(message.mode);
        }
        return writer;
    }
    PBCameraModeArea.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBCameraModeArea();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.area = vectors_gen_1.Vector3.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.mode = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBCameraModeArea.decode = decode;
})(PBCameraModeArea = exports.PBCameraModeArea || (exports.PBCameraModeArea = {}));
