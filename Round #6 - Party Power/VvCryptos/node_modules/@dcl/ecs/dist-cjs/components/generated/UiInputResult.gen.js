"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiInputResultSchema = void 0;
const ui_input_result_gen_1 = require("./pb/decentraland/sdk/components/ui_input_result.gen");
/**
 * @internal
 */
exports.UiInputResultSchema = {
    COMPONENT_ID: 1095,
    serialize(value, builder) {
        const writer = ui_input_result_gen_1.PBUiInputResult.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return ui_input_result_gen_1.PBUiInputResult.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return ui_input_result_gen_1.PBUiInputResult.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBUiInputResult"
    }
};
