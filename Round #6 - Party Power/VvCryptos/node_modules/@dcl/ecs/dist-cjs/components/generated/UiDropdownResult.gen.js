"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiDropdownResultSchema = void 0;
const ui_dropdown_result_gen_1 = require("./pb/decentraland/sdk/components/ui_dropdown_result.gen");
/**
 * @internal
 */
exports.UiDropdownResultSchema = {
    COMPONENT_ID: 1096,
    serialize(value, builder) {
        const writer = ui_dropdown_result_gen_1.PBUiDropdownResult.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return ui_dropdown_result_gen_1.PBUiDropdownResult.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return ui_dropdown_result_gen_1.PBUiDropdownResult.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBUiDropdownResult"
    }
};
