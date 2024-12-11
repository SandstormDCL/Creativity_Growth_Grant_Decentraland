import { PBTweenSequence } from './pb/decentraland/sdk/components/tween_sequence.gen';
/**
 * @internal
 */
export const TweenSequenceSchema = {
    COMPONENT_ID: 1104,
    serialize(value, builder) {
        const writer = PBTweenSequence.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBTweenSequence.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBTweenSequence.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBTweenSequence"
    }
};
