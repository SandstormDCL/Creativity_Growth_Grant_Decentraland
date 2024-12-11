"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputModifierSchema = void 0;
const input_modifier_gen_1 = require("./pb/decentraland/sdk/components/input_modifier.gen");
/**
 * @internal
 */
exports.InputModifierSchema = {
    COMPONENT_ID: 1078,
    serialize(value, builder) {
        const writer = input_modifier_gen_1.PBInputModifier.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return input_modifier_gen_1.PBInputModifier.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return input_modifier_gen_1.PBInputModifier.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBInputModifier"
    }
};
