"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaycastHit = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const vectors_gen_1 = require("../../../common/vectors.gen");
const protobufPackageSarasa = "decentraland.sdk.components.common";
function createBaseRaycastHit() {
    return {
        position: undefined,
        globalOrigin: undefined,
        direction: undefined,
        normalHit: undefined,
        length: 0,
        meshName: undefined,
        entityId: undefined,
    };
}
/**
 * @public
 */
var RaycastHit;
(function (RaycastHit) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.position !== undefined) {
            vectors_gen_1.Vector3.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        if (message.globalOrigin !== undefined) {
            vectors_gen_1.Vector3.encode(message.globalOrigin, writer.uint32(18).fork()).ldelim();
        }
        if (message.direction !== undefined) {
            vectors_gen_1.Vector3.encode(message.direction, writer.uint32(26).fork()).ldelim();
        }
        if (message.normalHit !== undefined) {
            vectors_gen_1.Vector3.encode(message.normalHit, writer.uint32(34).fork()).ldelim();
        }
        if (message.length !== 0) {
            writer.uint32(45).float(message.length);
        }
        if (message.meshName !== undefined) {
            writer.uint32(50).string(message.meshName);
        }
        if (message.entityId !== undefined) {
            writer.uint32(56).uint32(message.entityId);
        }
        return writer;
    }
    RaycastHit.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRaycastHit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.position = vectors_gen_1.Vector3.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.globalOrigin = vectors_gen_1.Vector3.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.direction = vectors_gen_1.Vector3.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.normalHit = vectors_gen_1.Vector3.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 45) {
                        break;
                    }
                    message.length = reader.float();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.meshName = reader.string();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.entityId = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    RaycastHit.decode = decode;
})(RaycastHit = exports.RaycastHit || (exports.RaycastHit = {}));
