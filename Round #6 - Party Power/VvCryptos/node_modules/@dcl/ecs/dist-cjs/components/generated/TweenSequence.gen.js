"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweenSequenceSchema = void 0;
const tween_sequence_gen_1 = require("./pb/decentraland/sdk/components/tween_sequence.gen");
/**
 * @internal
 */
exports.TweenSequenceSchema = {
    COMPONENT_ID: 1104,
    serialize(value, builder) {
        const writer = tween_sequence_gen_1.PBTweenSequence.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return tween_sequence_gen_1.PBTweenSequence.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return tween_sequence_gen_1.PBTweenSequence.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBTweenSequence"
    }
};
