"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextShapeSchema = void 0;
const text_shape_gen_1 = require("./pb/decentraland/sdk/components/text_shape.gen");
/**
 * @internal
 */
exports.TextShapeSchema = {
    COMPONENT_ID: 1030,
    serialize(value, builder) {
        const writer = text_shape_gen_1.PBTextShape.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return text_shape_gen_1.PBTextShape.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return text_shape_gen_1.PBTextShape.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBTextShape"
    }
};
