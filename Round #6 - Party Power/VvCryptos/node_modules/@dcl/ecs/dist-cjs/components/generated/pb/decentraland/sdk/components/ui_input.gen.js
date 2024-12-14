"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBUiInput = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const colors_gen_1 = require("../../common/colors.gen");
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBUiInput() {
    return {
        placeholder: "",
        color: undefined,
        placeholderColor: undefined,
        disabled: false,
        textAlign: undefined,
        font: undefined,
        fontSize: undefined,
        value: undefined,
    };
}
/**
 * @public
 */
var PBUiInput;
(function (PBUiInput) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.placeholder !== "") {
            writer.uint32(10).string(message.placeholder);
        }
        if (message.color !== undefined) {
            colors_gen_1.Color4.encode(message.color, writer.uint32(18).fork()).ldelim();
        }
        if (message.placeholderColor !== undefined) {
            colors_gen_1.Color4.encode(message.placeholderColor, writer.uint32(26).fork()).ldelim();
        }
        if (message.disabled === true) {
            writer.uint32(32).bool(message.disabled);
        }
        if (message.textAlign !== undefined) {
            writer.uint32(80).int32(message.textAlign);
        }
        if (message.font !== undefined) {
            writer.uint32(88).int32(message.font);
        }
        if (message.fontSize !== undefined) {
            writer.uint32(96).int32(message.fontSize);
        }
        if (message.value !== undefined) {
            writer.uint32(106).string(message.value);
        }
        return writer;
    }
    PBUiInput.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBUiInput();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.placeholder = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.color = colors_gen_1.Color4.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.placeholderColor = colors_gen_1.Color4.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.disabled = reader.bool();
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.textAlign = reader.int32();
                    continue;
                case 11:
                    if (tag !== 88) {
                        break;
                    }
                    message.font = reader.int32();
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.fontSize = reader.int32();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.value = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBUiInput.decode = decode;
})(PBUiInput = exports.PBUiInput || (exports.PBUiInput = {}));
