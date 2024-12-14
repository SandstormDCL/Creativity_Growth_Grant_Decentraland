"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBUiText = exports.TextWrap = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const colors_gen_1 = require("../../common/colors.gen");
const protobufPackageSarasa = "decentraland.sdk.components";
/**
 * @public
 */
var TextWrap;
(function (TextWrap) {
    TextWrap[TextWrap["TW_WRAP"] = 0] = "TW_WRAP";
    TextWrap[TextWrap["TW_NO_WRAP"] = 1] = "TW_NO_WRAP";
})(TextWrap = exports.TextWrap || (exports.TextWrap = {}));
function createBasePBUiText() {
    return {
        value: "",
        color: undefined,
        textAlign: undefined,
        font: undefined,
        fontSize: undefined,
        textWrap: undefined,
    };
}
/**
 * @public
 */
var PBUiText;
(function (PBUiText) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.value !== "") {
            writer.uint32(10).string(message.value);
        }
        if (message.color !== undefined) {
            colors_gen_1.Color4.encode(message.color, writer.uint32(18).fork()).ldelim();
        }
        if (message.textAlign !== undefined) {
            writer.uint32(24).int32(message.textAlign);
        }
        if (message.font !== undefined) {
            writer.uint32(32).int32(message.font);
        }
        if (message.fontSize !== undefined) {
            writer.uint32(40).int32(message.fontSize);
        }
        if (message.textWrap !== undefined) {
            writer.uint32(48).int32(message.textWrap);
        }
        return writer;
    }
    PBUiText.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBUiText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.value = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.color = colors_gen_1.Color4.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.textAlign = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.font = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.fontSize = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.textWrap = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBUiText.decode = decode;
})(PBUiText = exports.PBUiText || (exports.PBUiText = {}));
