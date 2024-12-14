/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Vector3 } from "../../common/vectors.gen";
import { RaycastHit } from "./common/raycast_hit.gen";
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBRaycastResult() {
    return { timestamp: undefined, globalOrigin: undefined, direction: undefined, hits: [], tickNumber: 0 };
}
/**
 * @public
 */
export var PBRaycastResult;
(function (PBRaycastResult) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.timestamp !== undefined) {
            writer.uint32(8).uint32(message.timestamp);
        }
        if (message.globalOrigin !== undefined) {
            Vector3.encode(message.globalOrigin, writer.uint32(18).fork()).ldelim();
        }
        if (message.direction !== undefined) {
            Vector3.encode(message.direction, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.hits) {
            RaycastHit.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.tickNumber !== 0) {
            writer.uint32(40).uint32(message.tickNumber);
        }
        return writer;
    }
    PBRaycastResult.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBRaycastResult();
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
                    message.globalOrigin = Vector3.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.direction = Vector3.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.hits.push(RaycastHit.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 40) {
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
    PBRaycastResult.decode = decode;
})(PBRaycastResult || (PBRaycastResult = {}));
