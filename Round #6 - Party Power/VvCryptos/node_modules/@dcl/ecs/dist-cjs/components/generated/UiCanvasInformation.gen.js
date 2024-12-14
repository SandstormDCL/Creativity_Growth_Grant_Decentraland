"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiCanvasInformationSchema = void 0;
const ui_canvas_information_gen_1 = require("./pb/decentraland/sdk/components/ui_canvas_information.gen");
/**
 * @internal
 */
exports.UiCanvasInformationSchema = {
    COMPONENT_ID: 1054,
    serialize(value, builder) {
        const writer = ui_canvas_information_gen_1.PBUiCanvasInformation.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return ui_canvas_information_gen_1.PBUiCanvasInformation.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return ui_canvas_information_gen_1.PBUiCanvasInformation.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBUiCanvasInformation"
    }
};
