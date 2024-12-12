import { PBAudioStream } from './pb/decentraland/sdk/components/audio_stream.gen';
/**
 * @internal
 */
export const AudioStreamSchema = {
    COMPONENT_ID: 1021,
    serialize(value, builder) {
        const writer = PBAudioStream.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBAudioStream.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBAudioStream.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBAudioStream"
    }
};
