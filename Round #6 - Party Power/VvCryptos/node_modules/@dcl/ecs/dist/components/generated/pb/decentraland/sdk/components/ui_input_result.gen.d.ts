import _m0 from "protobufjs/minimal";
/**
 * @public
 */
export interface PBUiInputResult {
    value: string;
    /** default: false */
    isSubmit?: boolean | undefined;
}
/**
 * @public
 */
export declare namespace PBUiInputResult {
    function encode(message: PBUiInputResult, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBUiInputResult;
}
