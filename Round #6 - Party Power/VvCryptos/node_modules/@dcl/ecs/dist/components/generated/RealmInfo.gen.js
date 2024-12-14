import { PBRealmInfo } from './pb/decentraland/sdk/components/realm_info.gen';
/**
 * @internal
 */
export const RealmInfoSchema = {
    COMPONENT_ID: 1106,
    serialize(value, builder) {
        const writer = PBRealmInfo.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBRealmInfo.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBRealmInfo.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBRealmInfo"
    }
};
