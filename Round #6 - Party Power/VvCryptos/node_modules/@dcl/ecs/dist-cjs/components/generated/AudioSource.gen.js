"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioSourceSchema = void 0;
const audio_source_gen_1 = require("./pb/decentraland/sdk/components/audio_source.gen");
/**
 * @internal
 */
exports.AudioSourceSchema = {
    COMPONENT_ID: 1020,
    serialize(value, builder) {
        const writer = audio_source_gen_1.PBAudioSource.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return audio_source_gen_1.PBAudioSource.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return audio_source_gen_1.PBAudioSource.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBAudioSource"
    }
};
