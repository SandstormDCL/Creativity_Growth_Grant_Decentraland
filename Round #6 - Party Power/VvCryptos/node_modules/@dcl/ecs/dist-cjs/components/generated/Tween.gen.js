"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweenSchema = void 0;
const tween_gen_1 = require("./pb/decentraland/sdk/components/tween.gen");
/**
 * @internal
 */
exports.TweenSchema = {
    COMPONENT_ID: 1102,
    serialize(value, builder) {
        const writer = tween_gen_1.PBTween.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return tween_gen_1.PBTween.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return tween_gen_1.PBTween.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBTween"
    }
};
