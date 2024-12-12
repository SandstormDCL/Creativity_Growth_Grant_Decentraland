import _m0 from "protobufjs/minimal";
import { Color4 } from "../../common/colors.gen";
import { Font, TextAlignMode } from "./common/texts.gen";
/**
 * @public
 */
export interface PBUiInput {
    placeholder: string;
    /** default=(0.0,0.0,0.0,1.0) */
    color?: Color4 | undefined;
    /** default=(0.3,0.3,0.3,1.0) */
    placeholderColor?: Color4 | undefined;
    disabled: boolean;
    /** default='center' */
    textAlign?: TextAlignMode | undefined;
    /** default=0 */
    font?: Font | undefined;
    /** default=10 */
    fontSize?: number | undefined;
    value?: string | undefined;
}
/**
 * @public
 */
export declare namespace PBUiInput {
    function encode(message: PBUiInput, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBUiInput;
}
