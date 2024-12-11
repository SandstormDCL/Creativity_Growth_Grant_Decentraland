"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiInputSchema = void 0;
const ui_input_gen_1 = require("./pb/decentraland/sdk/components/ui_input.gen");
/**
 * @internal
 */
exports.UiInputSchema = {
    COMPONENT_ID: 1093,
    serialize(value, builder) {
        const writer = ui_input_gen_1.PBUiInput.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return ui_input_gen_1.PBUiInput.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return ui_input_gen_1.PBUiInput.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBUiInput"
    }
};
