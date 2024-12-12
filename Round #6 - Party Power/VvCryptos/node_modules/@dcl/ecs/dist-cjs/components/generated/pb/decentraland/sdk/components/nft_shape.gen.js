"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBNftShape = exports.NftFrameType = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const colors_gen_1 = require("../../common/colors.gen");
const protobufPackageSarasa = "decentraland.sdk.components";
/** NftFrameType is a predefined framing style for the image. */
/**
 * @public
 */
var NftFrameType;
(function (NftFrameType) {
    NftFrameType[NftFrameType["NFT_CLASSIC"] = 0] = "NFT_CLASSIC";
    NftFrameType[NftFrameType["NFT_BAROQUE_ORNAMENT"] = 1] = "NFT_BAROQUE_ORNAMENT";
    NftFrameType[NftFrameType["NFT_DIAMOND_ORNAMENT"] = 2] = "NFT_DIAMOND_ORNAMENT";
    NftFrameType[NftFrameType["NFT_MINIMAL_WIDE"] = 3] = "NFT_MINIMAL_WIDE";
    NftFrameType[NftFrameType["NFT_MINIMAL_GREY"] = 4] = "NFT_MINIMAL_GREY";
    NftFrameType[NftFrameType["NFT_BLOCKY"] = 5] = "NFT_BLOCKY";
    NftFrameType[NftFrameType["NFT_GOLD_EDGES"] = 6] = "NFT_GOLD_EDGES";
    NftFrameType[NftFrameType["NFT_GOLD_CARVED"] = 7] = "NFT_GOLD_CARVED";
    NftFrameType[NftFrameType["NFT_GOLD_WIDE"] = 8] = "NFT_GOLD_WIDE";
    NftFrameType[NftFrameType["NFT_GOLD_ROUNDED"] = 9] = "NFT_GOLD_ROUNDED";
    NftFrameType[NftFrameType["NFT_METAL_MEDIUM"] = 10] = "NFT_METAL_MEDIUM";
    NftFrameType[NftFrameType["NFT_METAL_WIDE"] = 11] = "NFT_METAL_WIDE";
    NftFrameType[NftFrameType["NFT_METAL_SLIM"] = 12] = "NFT_METAL_SLIM";
    NftFrameType[NftFrameType["NFT_METAL_ROUNDED"] = 13] = "NFT_METAL_ROUNDED";
    NftFrameType[NftFrameType["NFT_PINS"] = 14] = "NFT_PINS";
    NftFrameType[NftFrameType["NFT_MINIMAL_BLACK"] = 15] = "NFT_MINIMAL_BLACK";
    NftFrameType[NftFrameType["NFT_MINIMAL_WHITE"] = 16] = "NFT_MINIMAL_WHITE";
    NftFrameType[NftFrameType["NFT_TAPE"] = 17] = "NFT_TAPE";
    NftFrameType[NftFrameType["NFT_WOOD_SLIM"] = 18] = "NFT_WOOD_SLIM";
    NftFrameType[NftFrameType["NFT_WOOD_WIDE"] = 19] = "NFT_WOOD_WIDE";
    NftFrameType[NftFrameType["NFT_WOOD_TWIGS"] = 20] = "NFT_WOOD_TWIGS";
    NftFrameType[NftFrameType["NFT_CANVAS"] = 21] = "NFT_CANVAS";
    NftFrameType[NftFrameType["NFT_NONE"] = 22] = "NFT_NONE";
})(NftFrameType = exports.NftFrameType || (exports.NftFrameType = {}));
function createBasePBNftShape() {
    return { urn: "", style: undefined, color: undefined };
}
/**
 * @public
 */
var PBNftShape;
(function (PBNftShape) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.urn !== "") {
            writer.uint32(10).string(message.urn);
        }
        if (message.style !== undefined) {
            writer.uint32(16).int32(message.style);
        }
        if (message.color !== undefined) {
            colors_gen_1.Color3.encode(message.color, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    }
    PBNftShape.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBNftShape();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.urn = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.style = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.color = colors_gen_1.Color3.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBNftShape.decode = decode;
})(PBNftShape = exports.PBNftShape || (exports.PBNftShape = {}));
