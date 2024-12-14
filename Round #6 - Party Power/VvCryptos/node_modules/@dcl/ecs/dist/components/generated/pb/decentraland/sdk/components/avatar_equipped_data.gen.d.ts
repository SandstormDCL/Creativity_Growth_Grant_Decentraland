import _m0 from "protobufjs/minimal";
/**
 * AvatarEquipData is used to read the information about the avatar's owneables.
 * this component is written by the engine using the communications transports'
 * data.
 */
/**
 * @public
 */
export interface PBAvatarEquippedData {
    wearableUrns: string[];
    emoteUrns: string[];
}
/**
 * @public
 */
export declare namespace PBAvatarEquippedData {
    function encode(message: PBAvatarEquippedData, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBAvatarEquippedData;
}
