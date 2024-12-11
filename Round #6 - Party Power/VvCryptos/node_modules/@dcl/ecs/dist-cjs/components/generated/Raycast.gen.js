"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaycastSchema = void 0;
const raycast_gen_1 = require("./pb/decentraland/sdk/components/raycast.gen");
/**
 * @internal
 */
exports.RaycastSchema = {
    COMPONENT_ID: 1067,
    serialize(value, builder) {
        const writer = raycast_gen_1.PBRaycast.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return raycast_gen_1.PBRaycast.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return raycast_gen_1.PBRaycast.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBRaycast"
    }
};
