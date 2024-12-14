"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBUiDropdown = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const colors_gen_1 = require("../../common/colors.gen");
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBUiDropdown() {
    return {
        acceptEmpty: false,
        emptyLabel: undefined,
        options: [],
        selectedIndex: undefined,
        disabled: false,
        color: undefined,
        textAlign: undefined,
        font: undefined,
        fontSize: undefined,
    };
}
/**
 * @public
 */
var PBUiDropdown;
(function (PBUiDropdown) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.acceptEmpty === true) {
            writer.uint32(8).bool(message.acceptEmpty);
        }
        if (message.emptyLabel !== undefined) {
            writer.uint32(18).string(message.emptyLabel);
        }
        for (const v of message.options) {
            writer.uint32(26).string(v);
        }
        if (message.selectedIndex !== undefined) {
            writer.uint32(32).int32(message.selectedIndex);
        }
        if (message.disabled === true) {
            writer.uint32(40).bool(message.disabled);
        }
        if (message.color !== undefined) {
            colors_gen_1.Color4.encode(message.color, writer.uint32(50).fork()).ldelim();
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
        return writer;
    }
    PBUiDropdown.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBUiDropdown();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.acceptEmpty = reader.bool();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.emptyLabel = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.options.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.selectedIndex = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.disabled = reader.bool();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.color = colors_gen_1.Color4.decode(reader, reader.uint32());
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
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBUiDropdown.decode = decode;
})(PBUiDropdown = exports.PBUiDropdown || (exports.PBUiDropdown = {}));
