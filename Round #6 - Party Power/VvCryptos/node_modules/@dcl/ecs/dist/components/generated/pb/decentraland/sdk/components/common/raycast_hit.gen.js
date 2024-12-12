/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Vector3 } from "../../../common/vectors.gen";
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
export var RaycastHit;
(function (RaycastHit) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.position !== undefined) {
            Vector3.encode(message.position, writer.uint32(10).fork()).ldelim();
        }
        if (message.globalOrigin !== undefined) {
            Vector3.encode(message.globalOrigin, writer.uint32(18).fork()).ldelim();
        }
        if (message.direction !== undefined) {
            Vector3.encode(message.direction, writer.uint32(26).fork()).ldelim();
        }
        if (message.normalHit !== undefined) {
            Vector3.encode(message.normalHit, writer.uint32(34).fork()).ldelim();
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRaycastHit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.position = Vector3.decode(reader, reader.uint32());
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
                    message.normalHit = Vector3.decode(reader, reader.uint32());
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
})(RaycastHit || (RaycastHit = {}));
