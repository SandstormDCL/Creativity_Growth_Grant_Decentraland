"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiDropdownSchema = void 0;
const ui_dropdown_gen_1 = require("./pb/decentraland/sdk/components/ui_dropdown.gen");
/**
 * @internal
 */
exports.UiDropdownSchema = {
    COMPONENT_ID: 1094,
    serialize(value, builder) {
        const writer = ui_dropdown_gen_1.PBUiDropdown.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return ui_dropdown_gen_1.PBUiDropdown.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return ui_dropdown_gen_1.PBUiDropdown.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBUiDropdown"
    }
};
