"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiTextSchema = void 0;
const ui_text_gen_1 = require("./pb/decentraland/sdk/components/ui_text.gen");
/**
 * @internal
 */
exports.UiTextSchema = {
    COMPONENT_ID: 1052,
    serialize(value, builder) {
        const writer = ui_text_gen_1.PBUiText.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return ui_text_gen_1.PBUiText.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return ui_text_gen_1.PBUiText.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBUiText"
    }
};
