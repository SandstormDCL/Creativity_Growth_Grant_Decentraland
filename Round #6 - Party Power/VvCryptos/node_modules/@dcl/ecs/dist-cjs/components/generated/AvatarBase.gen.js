"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarBaseSchema = void 0;
const avatar_base_gen_1 = require("./pb/decentraland/sdk/components/avatar_base.gen");
/**
 * @internal
 */
exports.AvatarBaseSchema = {
    COMPONENT_ID: 1087,
    serialize(value, builder) {
        const writer = avatar_base_gen_1.PBAvatarBase.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return avatar_base_gen_1.PBAvatarBase.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return avatar_base_gen_1.PBAvatarBase.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBAvatarBase"
    }
};
