import { PBMeshCollider } from './pb/decentraland/sdk/components/mesh_collider.gen';
/**
 * @internal
 */
export const MeshColliderSchema = {
    COMPONENT_ID: 1019,
    serialize(value, builder) {
        const writer = PBMeshCollider.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBMeshCollider.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBMeshCollider.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBMeshCollider"
    }
};
