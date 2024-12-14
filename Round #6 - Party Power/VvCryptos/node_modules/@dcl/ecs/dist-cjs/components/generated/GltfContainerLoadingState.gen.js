"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GltfContainerLoadingStateSchema = void 0;
const gltf_container_loading_state_gen_1 = require("./pb/decentraland/sdk/components/gltf_container_loading_state.gen");
/**
 * @internal
 */
exports.GltfContainerLoadingStateSchema = {
    COMPONENT_ID: 1049,
    serialize(value, builder) {
        const writer = gltf_container_loading_state_gen_1.PBGltfContainerLoadingState.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return gltf_container_loading_state_gen_1.PBGltfContainerLoadingState.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return gltf_container_loading_state_gen_1.PBGltfContainerLoadingState.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBGltfContainerLoadingState"
    }
};
