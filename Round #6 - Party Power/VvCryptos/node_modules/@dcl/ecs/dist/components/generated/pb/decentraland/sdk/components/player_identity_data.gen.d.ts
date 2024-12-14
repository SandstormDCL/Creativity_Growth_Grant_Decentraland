import _m0 from "protobufjs/minimal";
/**
 * PlayerIdentityData is used to read the information about the avatar's
 * identity. this component is written by the engine using the communications
 * transports' data.
 */
/**
 * @public
 */
export interface PBPlayerIdentityData {
    /** ethereum address of this player */
    address: string;
    isGuest: boolean;
}
/**
 * @public
 */
export declare namespace PBPlayerIdentityData {
    function encode(message: PBPlayerIdentityData, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBPlayerIdentityData;
}
