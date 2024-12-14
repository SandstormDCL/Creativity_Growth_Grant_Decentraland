import _m0 from "protobufjs/minimal";
import { BorderRect } from "../../common/border_rect.gen";
import { Color4 } from "../../common/colors.gen";
import { TextureUnion } from "../../common/texture.gen";
/**
 * @public
 */
export declare const enum BackgroundTextureMode {
    /**
     * NINE_SLICES - https://docs.unity3d.com/Manual/UIE-USS-SupportedProperties.html (Slicing section)
     * https://forum.unity.com/threads/how-does-slicing-in-ui-tookkit-works.1235863/
     * https://docs.unity3d.com/Manual/9SliceSprites.html
     * https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-slice
     */
    NINE_SLICES = 0,
    /**
     * CENTER - CENTER enables the texture to be rendered centered in relation to the
     * element. If the element is smaller than the texture then the background
     * should use the element as stencil to cut off the out-of-bounds area
     */
    CENTER = 1,
    /**
     * STRETCH - STRETCH enables the texture to cover all the area of the container,
     * adopting its aspect ratio.
     */
    STRETCH = 2
}
/**
 * @public
 */
export interface PBUiBackground {
    /** default=(1.0, 1.0, 1.0, 1.0), pixel = color * sample2D(texture, uv) */
    color?: Color4 | undefined;
    texture?: TextureUnion | undefined;
    textureMode: BackgroundTextureMode;
    /** default=(1/3, 1/3, 1/3, 1/3) */
    textureSlices?: BorderRect | undefined;
    /** default=[0,0,0,1,1,0,1,0]: starting from bottom-left vertex clock-wise */
    uvs: number[];
}
/**
 * @public
 */
export declare namespace PBUiBackground {
    function encode(message: PBUiBackground, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): PBUiBackground;
}
