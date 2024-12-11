"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioStreamSchema = void 0;
const audio_stream_gen_1 = require("./pb/decentraland/sdk/components/audio_stream.gen");
/**
 * @internal
 */
exports.AudioStreamSchema = {
    COMPONENT_ID: 1021,
    serialize(value, builder) {
        const writer = audio_stream_gen_1.PBAudioStream.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return audio_stream_gen_1.PBAudioStream.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return audio_stream_gen_1.PBAudioStream.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBAudioStream"
    }
};
