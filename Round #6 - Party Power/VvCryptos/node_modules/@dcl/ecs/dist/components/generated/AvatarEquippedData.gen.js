import { PBAvatarEquippedData } from './pb/decentraland/sdk/components/avatar_equipped_data.gen';
/**
 * @internal
 */
export const AvatarEquippedDataSchema = {
    COMPONENT_ID: 1091,
    serialize(value, builder) {
        const writer = PBAvatarEquippedData.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBAvatarEquippedData.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBAvatarEquippedData.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBAvatarEquippedData"
    }
};
