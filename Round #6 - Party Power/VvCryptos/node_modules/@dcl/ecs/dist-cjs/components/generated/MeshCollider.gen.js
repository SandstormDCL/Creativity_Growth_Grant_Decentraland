"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeshColliderSchema = void 0;
const mesh_collider_gen_1 = require("./pb/decentraland/sdk/components/mesh_collider.gen");
/**
 * @internal
 */
exports.MeshColliderSchema = {
    COMPONENT_ID: 1019,
    serialize(value, builder) {
        const writer = mesh_collider_gen_1.PBMeshCollider.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return mesh_collider_gen_1.PBMeshCollider.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return mesh_collider_gen_1.PBMeshCollider.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBMeshCollider"
    }
};
