"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioEventSchema = void 0;
const audio_event_gen_1 = require("./pb/decentraland/sdk/components/audio_event.gen");
/**
 * @internal
 */
exports.AudioEventSchema = {
    COMPONENT_ID: 1105,
    serialize(value, builder) {
        const writer = audio_event_gen_1.PBAudioEvent.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return audio_event_gen_1.PBAudioEvent.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return audio_event_gen_1.PBAudioEvent.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBAudioEvent"
    }
};
