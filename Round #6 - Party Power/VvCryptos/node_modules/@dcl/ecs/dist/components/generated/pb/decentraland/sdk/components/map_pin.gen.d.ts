import _m0 from "protobufjs/minimal";
import { TextureUnion } from "../../common/texture.gen";
import { Vector2 } from "../../common/vectors.gen";
/**
 * @deprecated
 * Used internally for the game orchestrator PX, not exposed in the SDK
 */
/**
 * @public
 */
export interface PBMapPin {
    position: Vector2 | undefined;
    texture?: TextureUnion | undefined;
    iconSize: number;
    title: string;
    description: string;
}
/**
 * @public
 */
export declare namespace PBMapPin {
    function encode(message: PBMapPin, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBMapPin;
}
