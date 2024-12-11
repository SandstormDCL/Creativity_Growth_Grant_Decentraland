import { PBMaterial } from './pb/decentraland/sdk/components/material.gen';
/**
 * @internal
 */
export const MaterialSchema = {
    COMPONENT_ID: 1017,
    serialize(value, builder) {
        const writer = PBMaterial.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBMaterial.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBMaterial.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBMaterial"
    }
};
