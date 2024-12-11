"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBMapPin = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const texture_gen_1 = require("../../common/texture.gen");
const vectors_gen_1 = require("../../common/vectors.gen");
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBMapPin() {
    return { position: undefined, texture: undefined, iconSize: 0, title: "", description: "" };
}
/**
 * @public
 */
var PBMapPin;
(function (PBMapPin) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.position !== undefined) {
            vectors_gen_1.Vector2.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        if (message.texture !== undefined) {
            texture_gen_1.TextureUnion.encode(message.texture, writer.uint32(18).fork()).ldelim();
        }
        if (message.iconSize !== 0) {
            writer.uint32(29).float(message.iconSize);
        }
        if (message.title !== "") {
            writer.uint32(34).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        return writer;
    }
    PBMapPin.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBMapPin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.position = vectors_gen_1.Vector2.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.texture = texture_gen_1.TextureUnion.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.iconSize = reader.float();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBMapPin.decode = decode;
})(PBMapPin = exports.PBMapPin || (exports.PBMapPin = {}));
