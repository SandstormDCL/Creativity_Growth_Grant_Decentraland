import { PBPlayerIdentityData } from './pb/decentraland/sdk/components/player_identity_data.gen';
/**
 * @internal
 */
export const PlayerIdentityDataSchema = {
    COMPONENT_ID: 1089,
    serialize(value, builder) {
        const writer = PBPlayerIdentityData.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBPlayerIdentityData.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBPlayerIdentityData.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBPlayerIdentityData"
    }
};
