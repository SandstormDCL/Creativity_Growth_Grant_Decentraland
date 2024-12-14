import { PBGltfContainer } from './pb/decentraland/sdk/components/gltf_container.gen';
/**
 * @internal
 */
export const GltfContainerSchema = {
    COMPONENT_ID: 1041,
    serialize(value, builder) {
        const writer = PBGltfContainer.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBGltfContainer.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBGltfContainer.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBGltfContainer"
    }
};
