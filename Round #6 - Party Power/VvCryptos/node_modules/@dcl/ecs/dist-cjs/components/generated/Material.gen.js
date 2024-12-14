"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialSchema = void 0;
const material_gen_1 = require("./pb/decentraland/sdk/components/material.gen");
/**
 * @internal
 */
exports.MaterialSchema = {
    COMPONENT_ID: 1017,
    serialize(value, builder) {
        const writer = material_gen_1.PBMaterial.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return material_gen_1.PBMaterial.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return material_gen_1.PBMaterial.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBMaterial"
    }
};
