import { PBTextShape } from './pb/decentraland/sdk/components/text_shape.gen';
/**
 * @internal
 */
export const TextShapeSchema = {
    COMPONENT_ID: 1030,
    serialize(value, builder) {
        const writer = PBTextShape.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBTextShape.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBTextShape.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBTextShape"
    }
};
