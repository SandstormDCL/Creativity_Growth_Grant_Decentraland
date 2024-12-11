/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Color3, Color4 } from "../../common/colors.gen";
import { TextureUnion } from "../../common/texture.gen";
const protobufPackageSarasa = "decentraland.sdk.components";
/**
 * @public
 */
export var MaterialTransparencyMode;
(function (MaterialTransparencyMode) {
    MaterialTransparencyMode[MaterialTransparencyMode["MTM_OPAQUE"] = 0] = "MTM_OPAQUE";
    MaterialTransparencyMode[MaterialTransparencyMode["MTM_ALPHA_TEST"] = 1] = "MTM_ALPHA_TEST";
    MaterialTransparencyMode[MaterialTransparencyMode["MTM_ALPHA_BLEND"] = 2] = "MTM_ALPHA_BLEND";
    MaterialTransparencyMode[MaterialTransparencyMode["MTM_ALPHA_TEST_AND_ALPHA_BLEND"] = 3] = "MTM_ALPHA_TEST_AND_ALPHA_BLEND";
    MaterialTransparencyMode[MaterialTransparencyMode["MTM_AUTO"] = 4] = "MTM_AUTO";
})(MaterialTransparencyMode || (MaterialTransparencyMode = {}));
function createBasePBMaterial() {
    return { material: undefined };
}
/**
 * @public
 */
export var PBMaterial;
(function (PBMaterial) {
    function encode(message, writer = _m0.Writer.create()) {
        switch (message.material?.$case) {
            case "unlit":
                PBMaterial_UnlitMaterial.encode(message.material.unlit, writer.uint32(10).fork()).ldelim();
                break;
            case "pbr":
                PBMaterial_PbrMaterial.encode(message.material.pbr, writer.uint32(18).fork()).ldelim();
                break;
        }
        return writer;
    }
    PBMaterial.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBMaterial();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.material = { $case: "unlit", unlit: PBMaterial_UnlitMaterial.decode(reader, reader.uint32()) };
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.material = { $case: "pbr", pbr: PBMaterial_PbrMaterial.decode(reader, reader.uint32()) };
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBMaterial.decode = decode;
})(PBMaterial || (PBMaterial = {}));
function createBasePBMaterial_UnlitMaterial() {
    return {
        texture: undefined,
        alphaTest: undefined,
        castShadows: undefined,
        diffuseColor: undefined,
        alphaTexture: undefined,
    };
}
/**
 * @public
 */
export var PBMaterial_UnlitMaterial;
(function (PBMaterial_UnlitMaterial) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.texture !== undefined) {
            TextureUnion.encode(message.texture, writer.uint32(10).fork()).ldelim();
        }
        if (message.alphaTest !== undefined) {
            writer.uint32(21).float(message.alphaTest);
        }
        if (message.castShadows !== undefined) {
            writer.uint32(24).bool(message.castShadows);
        }
        if (message.diffuseColor !== undefined) {
            Color4.encode(message.diffuseColor, writer.uint32(34).fork()).ldelim();
        }
        if (message.alphaTexture !== undefined) {
            TextureUnion.encode(message.alphaTexture, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    }
    PBMaterial_UnlitMaterial.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBMaterial_UnlitMaterial();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.texture = TextureUnion.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.alphaTest = reader.float();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.castShadows = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.diffuseColor = Color4.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.alphaTexture = TextureUnion.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBMaterial_UnlitMaterial.decode = decode;
})(PBMaterial_UnlitMaterial || (PBMaterial_UnlitMaterial = {}));
function createBasePBMaterial_PbrMaterial() {
    return {
        texture: undefined,
        alphaTest: undefined,
        castShadows: undefined,
        alphaTexture: undefined,
        emissiveTexture: undefined,
        bumpTexture: undefined,
        albedoColor: undefined,
        emissiveColor: undefined,
        reflectivityColor: undefined,
        transparencyMode: undefined,
        metallic: undefined,
        roughness: undefined,
        specularIntensity: undefined,
        emissiveIntensity: undefined,
        directIntensity: undefined,
    };
}
/**
 * @public
 */
export var PBMaterial_PbrMaterial;
(function (PBMaterial_PbrMaterial) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.texture !== undefined) {
            TextureUnion.encode(message.texture, writer.uint32(10).fork()).ldelim();
        }
        if (message.alphaTest !== undefined) {
            writer.uint32(21).float(message.alphaTest);
        }
        if (message.castShadows !== undefined) {
            writer.uint32(24).bool(message.castShadows);
        }
        if (message.alphaTexture !== undefined) {
            TextureUnion.encode(message.alphaTexture, writer.uint32(34).fork()).ldelim();
        }
        if (message.emissiveTexture !== undefined) {
            TextureUnion.encode(message.emissiveTexture, writer.uint32(42).fork()).ldelim();
        }
        if (message.bumpTexture !== undefined) {
            TextureUnion.encode(message.bumpTexture, writer.uint32(50).fork()).ldelim();
        }
        if (message.albedoColor !== undefined) {
            Color4.encode(message.albedoColor, writer.uint32(58).fork()).ldelim();
        }
        if (message.emissiveColor !== undefined) {
            Color3.encode(message.emissiveColor, writer.uint32(66).fork()).ldelim();
        }
        if (message.reflectivityColor !== undefined) {
            Color3.encode(message.reflectivityColor, writer.uint32(74).fork()).ldelim();
        }
        if (message.transparencyMode !== undefined) {
            writer.uint32(80).int32(message.transparencyMode);
        }
        if (message.metallic !== undefined) {
            writer.uint32(93).float(message.metallic);
        }
        if (message.roughness !== undefined) {
            writer.uint32(101).float(message.roughness);
        }
        if (message.specularIntensity !== undefined) {
            writer.uint32(117).float(message.specularIntensity);
        }
        if (message.emissiveIntensity !== undefined) {
            writer.uint32(125).float(message.emissiveIntensity);
        }
        if (message.directIntensity !== undefined) {
            writer.uint32(133).float(message.directIntensity);
        }
        return writer;
    }
    PBMaterial_PbrMaterial.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBMaterial_PbrMaterial();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.texture = TextureUnion.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.alphaTest = reader.float();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.castShadows = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.alphaTexture = TextureUnion.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.emissiveTexture = TextureUnion.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.bumpTexture = TextureUnion.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.albedoColor = Color4.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.emissiveColor = Color3.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.reflectivityColor = Color3.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.transparencyMode = reader.int32();
                    continue;
                case 11:
                    if (tag !== 93) {
                        break;
                    }
                    message.metallic = reader.float();
                    continue;
                case 12:
                    if (tag !== 101) {
                        break;
                    }
                    message.roughness = reader.float();
                    continue;
                case 14:
                    if (tag !== 117) {
                        break;
                    }
                    message.specularIntensity = reader.float();
                    continue;
                case 15:
                    if (tag !== 125) {
                        break;
                    }
                    message.emissiveIntensity = reader.float();
                    continue;
                case 16:
                    if (tag !== 133) {
                        break;
                    }
                    message.directIntensity = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBMaterial_PbrMaterial.decode = decode;
})(PBMaterial_PbrMaterial || (PBMaterial_PbrMaterial = {}));
