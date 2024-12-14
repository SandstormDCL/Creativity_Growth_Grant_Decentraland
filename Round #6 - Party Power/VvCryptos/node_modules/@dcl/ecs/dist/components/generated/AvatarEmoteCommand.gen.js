import { PBAvatarEmoteCommand } from './pb/decentraland/sdk/components/avatar_emote_command.gen';
/**
 * @internal
 */
export const AvatarEmoteCommandSchema = {
    COMPONENT_ID: 1088,
    serialize(value, builder) {
        const writer = PBAvatarEmoteCommand.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBAvatarEmoteCommand.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBAvatarEmoteCommand.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBAvatarEmoteCommand"
    }
};
