import { PBVideoEvent } from './pb/decentraland/sdk/components/video_event.gen';
/**
 * @internal
 */
export const VideoEventSchema = {
    COMPONENT_ID: 1044,
    serialize(value, builder) {
        const writer = PBVideoEvent.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBVideoEvent.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBVideoEvent.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBVideoEvent"
    }
};
