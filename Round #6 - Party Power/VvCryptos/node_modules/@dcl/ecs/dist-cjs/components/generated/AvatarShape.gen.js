"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarShapeSchema = void 0;
const avatar_shape_gen_1 = require("./pb/decentraland/sdk/components/avatar_shape.gen");
/**
 * @internal
 */
exports.AvatarShapeSchema = {
    COMPONENT_ID: 1080,
    serialize(value, builder) {
        const writer = avatar_shape_gen_1.PBAvatarShape.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return avatar_shape_gen_1.PBAvatarShape.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return avatar_shape_gen_1.PBAvatarShape.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBAvatarShape"
    }
};
