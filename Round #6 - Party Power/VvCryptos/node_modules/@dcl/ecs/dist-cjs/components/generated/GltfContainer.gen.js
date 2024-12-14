"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GltfContainerSchema = void 0;
const gltf_container_gen_1 = require("./pb/decentraland/sdk/components/gltf_container.gen");
/**
 * @internal
 */
exports.GltfContainerSchema = {
    COMPONENT_ID: 1041,
    serialize(value, builder) {
        const writer = gltf_container_gen_1.PBGltfContainer.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return gltf_container_gen_1.PBGltfContainer.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return gltf_container_gen_1.PBGltfContainer.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBGltfContainer"
    }
};
