import { PBAudioSource } from './pb/decentraland/sdk/components/audio_source.gen';
/**
 * @internal
 */
export const AudioSourceSchema = {
    COMPONENT_ID: 1020,
    serialize(value, builder) {
        const writer = PBAudioSource.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBAudioSource.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBAudioSource.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBAudioSource"
    }
};
