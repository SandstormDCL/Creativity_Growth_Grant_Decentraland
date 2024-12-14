"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarAttachSchema = void 0;
const avatar_attach_gen_1 = require("./pb/decentraland/sdk/components/avatar_attach.gen");
/**
 * @internal
 */
exports.AvatarAttachSchema = {
    COMPONENT_ID: 1073,
    serialize(value, builder) {
        const writer = avatar_attach_gen_1.PBAvatarAttach.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return avatar_attach_gen_1.PBAvatarAttach.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return avatar_attach_gen_1.PBAvatarAttach.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBAvatarAttach"
    }
};
