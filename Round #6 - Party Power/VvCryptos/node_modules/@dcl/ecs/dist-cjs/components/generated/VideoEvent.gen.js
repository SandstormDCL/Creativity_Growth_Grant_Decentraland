"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoEventSchema = void 0;
const video_event_gen_1 = require("./pb/decentraland/sdk/components/video_event.gen");
/**
 * @internal
 */
exports.VideoEventSchema = {
    COMPONENT_ID: 1044,
    serialize(value, builder) {
        const writer = video_event_gen_1.PBVideoEvent.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return video_event_gen_1.PBVideoEvent.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return video_event_gen_1.PBVideoEvent.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBVideoEvent"
    }
};
