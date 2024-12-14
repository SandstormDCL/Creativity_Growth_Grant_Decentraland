"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBAvatarBase = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const colors_gen_1 = require("../../common/colors.gen");
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBAvatarBase() {
    return { skinColor: undefined, eyesColor: undefined, hairColor: undefined, bodyShapeUrn: "", name: "" };
}
/**
 * @public
 */
var PBAvatarBase;
(function (PBAvatarBase) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.skinColor !== undefined) {
            colors_gen_1.Color3.encode(message.skinColor, writer.uint32(10).fork()).ldelim();
        }
        if (message.eyesColor !== undefined) {
            colors_gen_1.Color3.encode(message.eyesColor, writer.uint32(18).fork()).ldelim();
        }
        if (message.hairColor !== undefined) {
            colors_gen_1.Color3.encode(message.hairColor, writer.uint32(26).fork()).ldelim();
        }
        if (message.bodyShapeUrn !== "") {
            writer.uint32(34).string(message.bodyShapeUrn);
        }
        if (message.name !== "") {
            writer.uint32(42).string(message.name);
        }
        return writer;
    }
    PBAvatarBase.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBAvatarBase();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.skinColor = colors_gen_1.Color3.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.eyesColor = colors_gen_1.Color3.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.hairColor = colors_gen_1.Color3.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.bodyShapeUrn = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBAvatarBase.decode = decode;
})(PBAvatarBase = exports.PBAvatarBase || (exports.PBAvatarBase = {}));
