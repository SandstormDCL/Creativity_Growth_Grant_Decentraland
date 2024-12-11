import { PBGltfContainerLoadingState } from './pb/decentraland/sdk/components/gltf_container_loading_state.gen';
/**
 * @internal
 */
export const GltfContainerLoadingStateSchema = {
    COMPONENT_ID: 1049,
    serialize(value, builder) {
        const writer = PBGltfContainerLoadingState.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBGltfContainerLoadingState.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBGltfContainerLoadingState.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBGltfContainerLoadingState"
    }
};
