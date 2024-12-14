import _m0 from "protobufjs/minimal";
import { Color3 } from "../../common/colors.gen";
/** AvatarBase sets all modifiers over the avatar's apparence. */
/**
 * @public
 */
export interface PBAvatarBase {
    skinColor: Color3 | undefined;
    eyesColor: Color3 | undefined;
    hairColor: Color3 | undefined;
    bodyShapeUrn: string;
    name: string;
}
/**
 * @public
 */
export declare namespace PBAvatarBase {
    function encode(message: PBAvatarBase, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBAvatarBase;
}
