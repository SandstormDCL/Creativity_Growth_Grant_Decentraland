"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarEquippedDataSchema = void 0;
const avatar_equipped_data_gen_1 = require("./pb/decentraland/sdk/components/avatar_equipped_data.gen");
/**
 * @internal
 */
exports.AvatarEquippedDataSchema = {
    COMPONENT_ID: 1091,
    serialize(value, builder) {
        const writer = avatar_equipped_data_gen_1.PBAvatarEquippedData.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return avatar_equipped_data_gen_1.PBAvatarEquippedData.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return avatar_equipped_data_gen_1.PBAvatarEquippedData.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBAvatarEquippedData"
    }
};
