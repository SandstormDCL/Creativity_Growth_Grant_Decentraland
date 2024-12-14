import _m0 from "protobufjs/minimal";
import { Color4 } from "../../common/colors.gen";
import { Font, TextAlignMode } from "./common/texts.gen";
/**
 * @public
 */
export interface PBUiDropdown {
    acceptEmpty: boolean;
    emptyLabel?: string | undefined;
    options: string[];
    /** default=null when accept_empty==true; default=0 when accept_empty==false */
    selectedIndex?: number | undefined;
    disabled: boolean;
    /** default=(0.0,0.0,0.0,1.0) */
    color?: Color4 | undefined;
    /** default='center' */
    textAlign?: TextAlignMode | undefined;
    /** default=0 */
    font?: Font | undefined;
    /** default=10 */
    fontSize?: number | undefined;
}
/**
 * @public
 */
export declare namespace PBUiDropdown {
    function encode(message: PBUiDropdown, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBUiDropdown;
}
