"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarEmoteCommandSchema = void 0;
const avatar_emote_command_gen_1 = require("./pb/decentraland/sdk/components/avatar_emote_command.gen");
/**
 * @internal
 */
exports.AvatarEmoteCommandSchema = {
    COMPONENT_ID: 1088,
    serialize(value, builder) {
        const writer = avatar_emote_command_gen_1.PBAvatarEmoteCommand.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return avatar_emote_command_gen_1.PBAvatarEmoteCommand.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return avatar_emote_command_gen_1.PBAvatarEmoteCommand.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBAvatarEmoteCommand"
    }
};
