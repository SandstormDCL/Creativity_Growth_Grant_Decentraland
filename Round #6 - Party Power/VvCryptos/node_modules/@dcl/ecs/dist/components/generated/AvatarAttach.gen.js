import { PBAvatarAttach } from './pb/decentraland/sdk/components/avatar_attach.gen';
/**
 * @internal
 */
export const AvatarAttachSchema = {
    COMPONENT_ID: 1073,
    serialize(value, builder) {
        const writer = PBAvatarAttach.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBAvatarAttach.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBAvatarAttach.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBAvatarAttach"
    }
};
