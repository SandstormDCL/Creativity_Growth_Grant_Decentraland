"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBUiBackground = exports.BackgroundTextureMode = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const border_rect_gen_1 = require("../../common/border_rect.gen");
const colors_gen_1 = require("../../common/colors.gen");
const texture_gen_1 = require("../../common/texture.gen");
const protobufPackageSarasa = "decentraland.sdk.components";
/**
 * @public
 */
var BackgroundTextureMode;
(function (BackgroundTextureMode) {
    /**
     * NINE_SLICES - https://docs.unity3d.com/Manual/UIE-USS-SupportedProperties.html (Slicing section)
     * https://forum.unity.com/threads/how-does-slicing-in-ui-tookkit-works.1235863/
     * https://docs.unity3d.com/Manual/9SliceSprites.html
     * https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice
     */
    BackgroundTextureMode[BackgroundTextureMode["NINE_SLICES"] = 0] = "NINE_SLICES";
    /**
     * CENTER - CENTER enables the texture to be rendered centered in relation to the
     * element. If the element is smaller than the texture then the background
     * should use the element as stencil to cut off the out-of-bounds area
     */
    BackgroundTextureMode[BackgroundTextureMode["CENTER"] = 1] = "CENTER";
    /**
     * STRETCH - STRETCH enables the texture to cover all the area of the container,
     * adopting its aspect ratio.
     */
    BackgroundTextureMode[BackgroundTextureMode["STRETCH"] = 2] = "STRETCH";
})(BackgroundTextureMode = exports.BackgroundTextureMode || (exports.BackgroundTextureMode = {}));
function createBasePBUiBackground() {
    return { color: undefined, texture: undefined, textureMode: 0, textureSlices: undefined, uvs: [] };
}
/**
 * @public
 */
var PBUiBackground;
(function (PBUiBackground) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.color !== undefined) {
            colors_gen_1.Color4.encode(message.color, writer.uint32(10).fork()).ldelim();
        }
        if (message.texture !== undefined) {
            texture_gen_1.TextureUnion.encode(message.texture, writer.uint32(18).fork()).ldelim();
        }
        if (message.textureMode !== 0) {
            writer.uint32(24).int32(message.textureMode);
        }
        if (message.textureSlices !== undefined) {
            border_rect_gen_1.BorderRect.encode(message.textureSlices, writer.uint32(34).fork()).ldelim();
        }
        writer.uint32(42).fork();
        for (const v of message.uvs) {
            writer.float(v);
        }
        writer.ldelim();
        return writer;
    }
    PBUiBackground.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBUiBackground();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.color = colors_gen_1.Color4.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.texture = texture_gen_1.TextureUnion.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.textureMode = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.textureSlices = border_rect_gen_1.BorderRect.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag === 45) {
                        message.uvs.push(reader.float());
                        continue;
                    }
                    if (tag === 42) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.uvs.push(reader.float());
                        }
                        continue;
                    }
                    break;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBUiBackground.decode = decode;
})(PBUiBackground = exports.PBUiBackground || (exports.PBUiBackground = {}));
