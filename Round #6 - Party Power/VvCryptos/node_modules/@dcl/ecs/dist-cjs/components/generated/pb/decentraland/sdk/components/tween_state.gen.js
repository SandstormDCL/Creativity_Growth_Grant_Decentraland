"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBTweenState = exports.TweenStateStatus = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const protobufPackageSarasa = "decentraland.sdk.components";
/**
 * @public
 */
var TweenStateStatus;
(function (TweenStateStatus) {
    TweenStateStatus[TweenStateStatus["TS_ACTIVE"] = 0] = "TS_ACTIVE";
    TweenStateStatus[TweenStateStatus["TS_COMPLETED"] = 1] = "TS_COMPLETED";
    TweenStateStatus[TweenStateStatus["TS_PAUSED"] = 2] = "TS_PAUSED";
})(TweenStateStatus = exports.TweenStateStatus || (exports.TweenStateStatus = {}));
function createBasePBTweenState() {
    return { state: 0, currentTime: 0 };
}
/**
 * @public
 */
var PBTweenState;
(function (PBTweenState) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        if (message.currentTime !== 0) {
            writer.uint32(21).float(message.currentTime);
        }
        return writer;
    }
    PBTweenState.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBTweenState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.currentTime = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBTweenState.decode = decode;
})(PBTweenState = exports.PBTweenState || (exports.PBTweenState = {}));
