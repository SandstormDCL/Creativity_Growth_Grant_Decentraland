"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBPointerEventsResult = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const raycast_hit_gen_1 = require("./common/raycast_hit.gen");
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBPointerEventsResult() {
    return { button: 0, hit: undefined, state: 0, timestamp: 0, analog: undefined, tickNumber: 0 };
}
/**
 * @public
 */
var PBPointerEventsResult;
(function (PBPointerEventsResult) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.button !== 0) {
            writer.uint32(8).int32(message.button);
        }
        if (message.hit !== undefined) {
            raycast_hit_gen_1.RaycastHit.encode(message.hit, writer.uint32(18).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        if (message.timestamp !== 0) {
            writer.uint32(40).uint32(message.timestamp);
        }
        if (message.analog !== undefined) {
            writer.uint32(53).float(message.analog);
        }
        if (message.tickNumber !== 0) {
            writer.uint32(56).uint32(message.tickNumber);
        }
        return writer;
    }
    PBPointerEventsResult.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBPointerEventsResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.button = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.hit = raycast_hit_gen_1.RaycastHit.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.timestamp = reader.uint32();
                    continue;
                case 6:
                    if (tag !== 53) {
                        break;
                    }
                    message.analog = reader.float();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.tickNumber = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBPointerEventsResult.decode = decode;
})(PBPointerEventsResult = exports.PBPointerEventsResult || (exports.PBPointerEventsResult = {}));
