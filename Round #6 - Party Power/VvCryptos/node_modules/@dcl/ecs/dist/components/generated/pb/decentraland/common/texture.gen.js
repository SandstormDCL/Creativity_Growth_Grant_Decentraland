/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Vector2 } from "./vectors.gen";
const protobufPackageSarasa = "decentraland.common";
/**
 * @public
 */
export var TextureWrapMode;
(function (TextureWrapMode) {
    TextureWrapMode[TextureWrapMode["TWM_REPEAT"] = 0] = "TWM_REPEAT";
    TextureWrapMode[TextureWrapMode["TWM_CLAMP"] = 1] = "TWM_CLAMP";
    TextureWrapMode[TextureWrapMode["TWM_MIRROR"] = 2] = "TWM_MIRROR";
})(TextureWrapMode || (TextureWrapMode = {}));
/**
 * @public
 */
export var TextureFilterMode;
(function (TextureFilterMode) {
    TextureFilterMode[TextureFilterMode["TFM_POINT"] = 0] = "TFM_POINT";
    TextureFilterMode[TextureFilterMode["TFM_BILINEAR"] = 1] = "TFM_BILINEAR";
    TextureFilterMode[TextureFilterMode["TFM_TRILINEAR"] = 2] = "TFM_TRILINEAR";
})(TextureFilterMode || (TextureFilterMode = {}));
function createBaseTexture() {
    return { src: "", wrapMode: undefined, filterMode: undefined, offset: undefined, tiling: undefined };
}
/**
 * @public
 */
export var Texture;
(function (Texture) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.src !== "") {
            writer.uint32(10).string(message.src);
        }
        if (message.wrapMode !== undefined) {
            writer.uint32(16).int32(message.wrapMode);
        }
        if (message.filterMode !== undefined) {
            writer.uint32(24).int32(message.filterMode);
        }
        if (message.offset !== undefined) {
            Vector2.encode(message.offset, writer.uint32(34).fork()).ldelim();
        }
        if (message.tiling !== undefined) {
            Vector2.encode(message.tiling, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    }
    Texture.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTexture();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.src = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.wrapMode = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.filterMode = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.offset = Vector2.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.tiling = Vector2.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    Texture.decode = decode;
})(Texture || (Texture = {}));
function createBaseAvatarTexture() {
    return { userId: "", wrapMode: undefined, filterMode: undefined };
}
/**
 * @public
 */
export var AvatarTexture;
(function (AvatarTexture) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.wrapMode !== undefined) {
            writer.uint32(16).int32(message.wrapMode);
        }
        if (message.filterMode !== undefined) {
            writer.uint32(24).int32(message.filterMode);
        }
        return writer;
    }
    AvatarTexture.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAvatarTexture();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.wrapMode = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.filterMode = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    AvatarTexture.decode = decode;
})(AvatarTexture || (AvatarTexture = {}));
function createBaseVideoTexture() {
    return { videoPlayerEntity: 0, wrapMode: undefined, filterMode: undefined };
}
/**
 * @public
 */
export var VideoTexture;
(function (VideoTexture) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.videoPlayerEntity !== 0) {
            writer.uint32(8).uint32(message.videoPlayerEntity);
        }
        if (message.wrapMode !== undefined) {
            writer.uint32(16).int32(message.wrapMode);
        }
        if (message.filterMode !== undefined) {
            writer.uint32(24).int32(message.filterMode);
        }
        return writer;
    }
    VideoTexture.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVideoTexture();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.videoPlayerEntity = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.wrapMode = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.filterMode = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    VideoTexture.decode = decode;
})(VideoTexture || (VideoTexture = {}));
function createBaseTextureUnion() {
    return { tex: undefined };
}
/**
 * @public
 */
export var TextureUnion;
(function (TextureUnion) {
    function encode(message, writer = _m0.Writer.create()) {
        switch (message.tex?.$case) {
            case "texture":
                Texture.encode(message.tex.texture, writer.uint32(10).fork()).ldelim();
                break;
            case "avatarTexture":
                AvatarTexture.encode(message.tex.avatarTexture, writer.uint32(18).fork()).ldelim();
                break;
            case "videoTexture":
                VideoTexture.encode(message.tex.videoTexture, writer.uint32(26).fork()).ldelim();
                break;
        }
        return writer;
    }
    TextureUnion.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTextureUnion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tex = { $case: "texture", texture: Texture.decode(reader, reader.uint32()) };
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.tex = { $case: "avatarTexture", avatarTexture: AvatarTexture.decode(reader, reader.uint32()) };
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.tex = { $case: "videoTexture", videoTexture: VideoTexture.decode(reader, reader.uint32()) };
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    TextureUnion.decode = decode;
})(TextureUnion || (TextureUnion = {}));
