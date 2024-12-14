"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBTextShape = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const colors_gen_1 = require("../../common/colors.gen");
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBTextShape() {
    return {
        text: "",
        font: undefined,
        fontSize: undefined,
        fontAutoSize: undefined,
        textAlign: undefined,
        width: undefined,
        height: undefined,
        paddingTop: undefined,
        paddingRight: undefined,
        paddingBottom: undefined,
        paddingLeft: undefined,
        lineSpacing: undefined,
        lineCount: undefined,
        textWrapping: undefined,
        shadowBlur: undefined,
        shadowOffsetX: undefined,
        shadowOffsetY: undefined,
        outlineWidth: undefined,
        shadowColor: undefined,
        outlineColor: undefined,
        textColor: undefined,
    };
}
/**
 * @public
 */
var PBTextShape;
(function (PBTextShape) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.text !== "") {
            writer.uint32(10).string(message.text);
        }
        if (message.font !== undefined) {
            writer.uint32(16).int32(message.font);
        }
        if (message.fontSize !== undefined) {
            writer.uint32(29).float(message.fontSize);
        }
        if (message.fontAutoSize !== undefined) {
            writer.uint32(32).bool(message.fontAutoSize);
        }
        if (message.textAlign !== undefined) {
            writer.uint32(40).int32(message.textAlign);
        }
        if (message.width !== undefined) {
            writer.uint32(53).float(message.width);
        }
        if (message.height !== undefined) {
            writer.uint32(61).float(message.height);
        }
        if (message.paddingTop !== undefined) {
            writer.uint32(69).float(message.paddingTop);
        }
        if (message.paddingRight !== undefined) {
            writer.uint32(77).float(message.paddingRight);
        }
        if (message.paddingBottom !== undefined) {
            writer.uint32(85).float(message.paddingBottom);
        }
        if (message.paddingLeft !== undefined) {
            writer.uint32(93).float(message.paddingLeft);
        }
        if (message.lineSpacing !== undefined) {
            writer.uint32(101).float(message.lineSpacing);
        }
        if (message.lineCount !== undefined) {
            writer.uint32(104).int32(message.lineCount);
        }
        if (message.textWrapping !== undefined) {
            writer.uint32(112).bool(message.textWrapping);
        }
        if (message.shadowBlur !== undefined) {
            writer.uint32(125).float(message.shadowBlur);
        }
        if (message.shadowOffsetX !== undefined) {
            writer.uint32(133).float(message.shadowOffsetX);
        }
        if (message.shadowOffsetY !== undefined) {
            writer.uint32(141).float(message.shadowOffsetY);
        }
        if (message.outlineWidth !== undefined) {
            writer.uint32(149).float(message.outlineWidth);
        }
        if (message.shadowColor !== undefined) {
            colors_gen_1.Color3.encode(message.shadowColor, writer.uint32(154).fork()).ldelim();
        }
        if (message.outlineColor !== undefined) {
            colors_gen_1.Color3.encode(message.outlineColor, writer.uint32(162).fork()).ldelim();
        }
        if (message.textColor !== undefined) {
            colors_gen_1.Color4.encode(message.textColor, writer.uint32(170).fork()).ldelim();
        }
        return writer;
    }
    PBTextShape.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBTextShape();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.text = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.font = reader.int32();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.fontSize = reader.float();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.fontAutoSize = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.textAlign = reader.int32();
                    continue;
                case 6:
                    if (tag !== 53) {
                        break;
                    }
                    message.width = reader.float();
                    continue;
                case 7:
                    if (tag !== 61) {
                        break;
                    }
                    message.height = reader.float();
                    continue;
                case 8:
                    if (tag !== 69) {
                        break;
                    }
                    message.paddingTop = reader.float();
                    continue;
                case 9:
                    if (tag !== 77) {
                        break;
                    }
                    message.paddingRight = reader.float();
                    continue;
                case 10:
                    if (tag !== 85) {
                        break;
                    }
                    message.paddingBottom = reader.float();
                    continue;
                case 11:
                    if (tag !== 93) {
                        break;
                    }
                    message.paddingLeft = reader.float();
                    continue;
                case 12:
                    if (tag !== 101) {
                        break;
                    }
                    message.lineSpacing = reader.float();
                    continue;
                case 13:
                    if (tag !== 104) {
                        break;
                    }
                    message.lineCount = reader.int32();
                    continue;
                case 14:
                    if (tag !== 112) {
                        break;
                    }
                    message.textWrapping = reader.bool();
                    continue;
                case 15:
                    if (tag !== 125) {
                        break;
                    }
                    message.shadowBlur = reader.float();
                    continue;
                case 16:
                    if (tag !== 133) {
                        break;
                    }
                    message.shadowOffsetX = reader.float();
                    continue;
                case 17:
                    if (tag !== 141) {
                        break;
                    }
                    message.shadowOffsetY = reader.float();
                    continue;
                case 18:
                    if (tag !== 149) {
                        break;
                    }
                    message.outlineWidth = reader.float();
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }
                    message.shadowColor = colors_gen_1.Color3.decode(reader, reader.uint32());
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.outlineColor = colors_gen_1.Color3.decode(reader, reader.uint32());
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.textColor = colors_gen_1.Color4.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBTextShape.decode = decode;
})(PBTextShape = exports.PBTextShape || (exports.PBTextShape = {}));
