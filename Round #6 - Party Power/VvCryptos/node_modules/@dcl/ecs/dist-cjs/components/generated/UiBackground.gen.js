"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiBackgroundSchema = void 0;
const ui_background_gen_1 = require("./pb/decentraland/sdk/components/ui_background.gen");
/**
 * @internal
 */
exports.UiBackgroundSchema = {
    COMPONENT_ID: 1053,
    serialize(value, builder) {
        const writer = ui_background_gen_1.PBUiBackground.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return ui_background_gen_1.PBUiBackground.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return ui_background_gen_1.PBUiBackground.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBUiBackground"
    }
};
