import _m0 from "protobufjs/minimal";
import { Color3 } from "../../common/colors.gen";
/** NftFrameType is a predefined framing style for the image. */
/**
 * @public
 */
export declare const enum NftFrameType {
    NFT_CLASSIC = 0,
    NFT_BAROQUE_ORNAMENT = 1,
    NFT_DIAMOND_ORNAMENT = 2,
    NFT_MINIMAL_WIDE = 3,
    NFT_MINIMAL_GREY = 4,
    NFT_BLOCKY = 5,
    NFT_GOLD_EDGES = 6,
    NFT_GOLD_CARVED = 7,
    NFT_GOLD_WIDE = 8,
    NFT_GOLD_ROUNDED = 9,
    NFT_METAL_MEDIUM = 10,
    NFT_METAL_WIDE = 11,
    NFT_METAL_SLIM = 12,
    NFT_METAL_ROUNDED = 13,
    NFT_PINS = 14,
    NFT_MINIMAL_BLACK = 15,
    NFT_MINIMAL_WHITE = 16,
    NFT_TAPE = 17,
    NFT_WOOD_SLIM = 18,
    NFT_WOOD_WIDE = 19,
    NFT_WOOD_TWIGS = 20,
    NFT_CANVAS = 21,
    NFT_NONE = 22
}
/**
 * The NftShape component renders a framed picture from an NFT. It supports PNG, JPEG and GIF files.
 *
 * The `urn` field is the URI of the NFT, and must follow the format 'urn:decentraland:<CHAIN>:<CONTRACT_STANDARD>:<CONTRACT_ADDRESS>:<TOKEN_ID>'
 * Example: 'urn:decentraland:ethereum:erc721:0x00000000:123'
 *
 * The picture frame can have several different styles, plus a background color for images that have
 * transparent pixels.
 */
/**
 * @public
 */
export interface PBNftShape {
    /** the URI of the NFT */
    urn: string;
    /** the frame style (default NFT_CLASSIC) */
    style?: NftFrameType | undefined;
    /** RGB background (default [0.6404918, 0.611472, 0.8584906]) */
    color?: Color3 | undefined;
}
/**
 * @public
 */
export declare namespace PBNftShape {
    function encode(message: PBNftShape, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBNftShape;
}
