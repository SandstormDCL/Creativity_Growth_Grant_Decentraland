import { PBAvatarBase } from './pb/decentraland/sdk/components/avatar_base.gen';
/**
 * @internal
 */
export const AvatarBaseSchema = {
    COMPONENT_ID: 1087,
    serialize(value, builder) {
        const writer = PBAvatarBase.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBAvatarBase.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBAvatarBase.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBAvatarBase"
    }
};
