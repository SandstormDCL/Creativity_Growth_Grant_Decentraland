"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeshRendererSchema = void 0;
const mesh_renderer_gen_1 = require("./pb/decentraland/sdk/components/mesh_renderer.gen");
/**
 * @internal
 */
exports.MeshRendererSchema = {
    COMPONENT_ID: 1018,
    serialize(value, builder) {
        const writer = mesh_renderer_gen_1.PBMeshRenderer.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return mesh_renderer_gen_1.PBMeshRenderer.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return mesh_renderer_gen_1.PBMeshRenderer.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBMeshRenderer"
    }
};
