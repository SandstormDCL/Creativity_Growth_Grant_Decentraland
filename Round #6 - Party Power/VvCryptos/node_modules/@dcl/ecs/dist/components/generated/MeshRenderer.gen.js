import { PBMeshRenderer } from './pb/decentraland/sdk/components/mesh_renderer.gen';
/**
 * @internal
 */
export const MeshRendererSchema = {
    COMPONENT_ID: 1018,
    serialize(value, builder) {
        const writer = PBMeshRenderer.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBMeshRenderer.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBMeshRenderer.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBMeshRenderer"
    }
};
