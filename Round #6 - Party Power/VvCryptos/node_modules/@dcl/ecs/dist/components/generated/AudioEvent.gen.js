import { PBAudioEvent } from './pb/decentraland/sdk/components/audio_event.gen';
/**
 * @internal
 */
export const AudioEventSchema = {
    COMPONENT_ID: 1105,
    serialize(value, builder) {
        const writer = PBAudioEvent.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBAudioEvent.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBAudioEvent.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBAudioEvent"
    }
};
