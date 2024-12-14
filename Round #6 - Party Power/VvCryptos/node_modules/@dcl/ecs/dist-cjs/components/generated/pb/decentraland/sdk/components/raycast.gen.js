"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBRaycast = exports.RaycastQueryType = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const vectors_gen_1 = require("../../common/vectors.gen");
const protobufPackageSarasa = "decentraland.sdk.components";
/** RaycastQueryType indicates whether the ray should stop on the first collition, or continue. */
/**
 * @public
 */
var RaycastQueryType;
(function (RaycastQueryType) {
    /** RQT_HIT_FIRST - Pick the first (not necessarily the closest) hit within the range */
    RaycastQueryType[RaycastQueryType["RQT_HIT_FIRST"] = 0] = "RQT_HIT_FIRST";
    /** RQT_QUERY_ALL - Pick all hits within the range */
    RaycastQueryType[RaycastQueryType["RQT_QUERY_ALL"] = 1] = "RQT_QUERY_ALL";
    /** RQT_NONE - Do not perform the raycast, only set the raycast result with empty hits */
    RaycastQueryType[RaycastQueryType["RQT_NONE"] = 2] = "RQT_NONE";
})(RaycastQueryType = exports.RaycastQueryType || (exports.RaycastQueryType = {}));
function createBasePBRaycast() {
    return {
        timestamp: undefined,
        originOffset: undefined,
        direction: undefined,
        maxDistance: 0,
        queryType: 0,
        continuous: undefined,
        collisionMask: undefined,
    };
}
/**
 * @public
 */
var PBRaycast;
(function (PBRaycast) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.timestamp !== undefined) {
            writer.uint32(8).uint32(message.timestamp);
        }
        if (message.originOffset !== undefined) {
            vectors_gen_1.Vector3.encode(message.originOffset, writer.uint32(18).fork()).ldelim();
        }
        switch (message.direction?.$case) {
            case "localDirection":
                vectors_gen_1.Vector3.encode(message.direction.localDirection, writer.uint32(50).fork()).ldelim();
                break;
            case "globalDirection":
                vectors_gen_1.Vector3.encode(message.direction.globalDirection, writer.uint32(26).fork()).ldelim();
                break;
            case "globalTarget":
                vectors_gen_1.Vector3.encode(message.direction.globalTarget, writer.uint32(58).fork()).ldelim();
                break;
            case "targetEntity":
                writer.uint32(80).uint32(message.direction.targetEntity);
                break;
        }
        if (message.maxDistance !== 0) {
            writer.uint32(37).float(message.maxDistance);
        }
        if (message.queryType !== 0) {
            writer.uint32(40).int32(message.queryType);
        }
        if (message.continuous !== undefined) {
            writer.uint32(64).bool(message.continuous);
        }
        if (message.collisionMask !== undefined) {
            writer.uint32(72).uint32(message.collisionMask);
        }
        return writer;
    }
    PBRaycast.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBRaycast();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.timestamp = reader.uint32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.originOffset = vectors_gen_1.Vector3.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.direction = { $case: "localDirection", localDirection: vectors_gen_1.Vector3.decode(reader, reader.uint32()) };
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.direction = { $case: "globalDirection", globalDirection: vectors_gen_1.Vector3.decode(reader, reader.uint32()) };
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.direction = { $case: "globalTarget", globalTarget: vectors_gen_1.Vector3.decode(reader, reader.uint32()) };
                    continue;
                case 10:
                    if (tag !== 80) {
                        break;
                    }
                    message.direction = { $case: "targetEntity", targetEntity: reader.uint32() };
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }
                    message.maxDistance = reader.float();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.queryType = reader.int32();
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.continuous = reader.bool();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.collisionMask = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBRaycast.decode = decode;
})(PBRaycast = exports.PBRaycast || (exports.PBRaycast = {}));
