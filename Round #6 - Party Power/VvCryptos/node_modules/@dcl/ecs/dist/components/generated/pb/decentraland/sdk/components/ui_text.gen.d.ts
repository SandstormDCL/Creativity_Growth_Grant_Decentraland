import _m0 from "protobufjs/minimal";
import { Color4 } from "../../common/colors.gen";
import { Font, TextAlignMode } from "./common/texts.gen";
/**
 * @public
 */
export declare const enum TextWrap {
    TW_WRAP = 0,
    TW_NO_WRAP = 1
}
/**
 * @public
 */
export interface PBUiText {
    /** the text content, tag <b> and <i> are supported */
    value: string;
    /** RGBA color (default: opaque white) */
    color?: Color4 | undefined;
    /** alignment within the bounds (default: center) */
    textAlign?: TextAlignMode | undefined;
    /** font for the text (default: sans-serif) */
    font?: Font | undefined;
    /** size of the text (default: 10) */
    fontSize?: number | undefined;
    /** wrap text when the border is reached (default: TW_WRAP) */
    textWrap?: TextWrap | undefined;
}
/**
 * @public
 */
export declare namespace PBUiText {
    function encode(message: PBUiText, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBUiText;
}
