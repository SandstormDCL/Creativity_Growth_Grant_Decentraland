"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBAvatarEquippedData = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBAvatarEquippedData() {
    return { wearableUrns: [], emoteUrns: [] };
}
/**
 * @public
 */
var PBAvatarEquippedData;
(function (PBAvatarEquippedData) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.wearableUrns) {
            writer.uint32(10).string(v);
        }
        for (const v of message.emoteUrns) {
            writer.uint32(18).string(v);
        }
        return writer;
    }
    PBAvatarEquippedData.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBAvatarEquippedData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.wearableUrns.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.emoteUrns.push(reader.string());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBAvatarEquippedData.decode = decode;
})(PBAvatarEquippedData = exports.PBAvatarEquippedData || (exports.PBAvatarEquippedData = {}));
