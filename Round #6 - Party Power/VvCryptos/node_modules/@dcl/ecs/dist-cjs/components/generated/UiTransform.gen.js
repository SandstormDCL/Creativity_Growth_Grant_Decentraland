"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiTransformSchema = void 0;
const ui_transform_gen_1 = require("./pb/decentraland/sdk/components/ui_transform.gen");
/**
 * @internal
 */
exports.UiTransformSchema = {
    COMPONENT_ID: 1050,
    serialize(value, builder) {
        const writer = ui_transform_gen_1.PBUiTransform.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return ui_transform_gen_1.PBUiTransform.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return ui_transform_gen_1.PBUiTransform.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBUiTransform"
    }
};
