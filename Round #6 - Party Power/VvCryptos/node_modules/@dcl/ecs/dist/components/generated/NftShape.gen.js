import { PBNftShape } from './pb/decentraland/sdk/components/nft_shape.gen';
/**
 * @internal
 */
export const NftShapeSchema = {
    COMPONENT_ID: 1040,
    serialize(value, builder) {
        const writer = PBNftShape.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBNftShape.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBNftShape.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBNftShape"
    }
};
