import _m0 from "protobufjs/minimal";
import { Color3, Color4 } from "../../common/colors.gen";
import { Font, TextAlignMode } from "./common/texts.gen";
/**
 * The TextShape component renders customizable floating text.
 *
 * The position and rotation of the text are defined by the Entity's Transform, while its size
 * can either scale with the Transform or be fixed by a font size.
 *
 * Several options can be configured, including color, padding, line spacing and drop shadows.
 */
/**
 * @public
 */
export interface PBTextShape {
    /** the content */
    text: string;
    /** the font (default F_SANS_SERIF) */
    font?: Font | undefined;
    /** the font size (default 10) */
    fontSize?: number | undefined;
    /** override `font_size` to automatically fit in `width`/`height` */
    fontAutoSize?: boolean | undefined;
    /** X and Y alignment (default TAM_CENTER_CENTER) */
    textAlign?: TextAlignMode | undefined;
    /** available horizontal space (default 1) */
    width?: number | undefined;
    /** available vertical space (default 1) */
    height?: number | undefined;
    /** distance from text to top border (default 0) */
    paddingTop?: number | undefined;
    /** distance from text to right border (default 0) */
    paddingRight?: number | undefined;
    /** distance from text to bottom border (default 0) */
    paddingBottom?: number | undefined;
    /** distance from text to left border (default 0) */
    paddingLeft?: number | undefined;
    /** extra distance between lines (default 0) */
    lineSpacing?: number | undefined;
    /** maximum number of lines to display */
    lineCount?: number | undefined;
    /** wrap text when the border is reached (default false) */
    textWrapping?: boolean | undefined;
    /** blurriness of the drop shadow (default 0) */
    shadowBlur?: number | undefined;
    /** horizontal length of the shadow (default 0) */
    shadowOffsetX?: number | undefined;
    /** vertical length of the shadow (default 0) */
    shadowOffsetY?: number | undefined;
    /** width of the stroke outlining each letter (default 0) */
    outlineWidth?: number | undefined;
    /** drop shadow color (default [1.0, 1.0, 1.0]) */
    shadowColor?: Color3 | undefined;
    /** outline stroke color (default [1.0, 1.0, 1.0]) */
    outlineColor?: Color3 | undefined;
    /** text color (default [1.0, 1.0, 1.0]) */
    textColor?: Color4 | undefined;
}
/**
 * @public
 */
export declare namespace PBTextShape {
    function encode(message: PBTextShape, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBTextShape;
}
