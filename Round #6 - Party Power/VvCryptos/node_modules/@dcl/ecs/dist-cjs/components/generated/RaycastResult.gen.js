"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaycastResultSchema = void 0;
const raycast_result_gen_1 = require("./pb/decentraland/sdk/components/raycast_result.gen");
/**
 * @internal
 */
exports.RaycastResultSchema = {
    COMPONENT_ID: 1068,
    serialize(value, builder) {
        const writer = raycast_result_gen_1.PBRaycastResult.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return raycast_result_gen_1.PBRaycastResult.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return raycast_result_gen_1.PBRaycastResult.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBRaycastResult"
    }
};
