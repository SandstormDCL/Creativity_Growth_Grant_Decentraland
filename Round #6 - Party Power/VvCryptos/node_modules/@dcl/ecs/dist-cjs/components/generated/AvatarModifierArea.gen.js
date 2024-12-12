"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarModifierAreaSchema = void 0;
const avatar_modifier_area_gen_1 = require("./pb/decentraland/sdk/components/avatar_modifier_area.gen");
/**
 * @internal
 */
exports.AvatarModifierAreaSchema = {
    COMPONENT_ID: 1070,
    serialize(value, builder) {
        const writer = avatar_modifier_area_gen_1.PBAvatarModifierArea.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return avatar_modifier_area_gen_1.PBAvatarModifierArea.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return avatar_modifier_area_gen_1.PBAvatarModifierArea.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBAvatarModifierArea"
    }
};
