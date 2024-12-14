import { PBTween } from './pb/decentraland/sdk/components/tween.gen';
/**
 * @internal
 */
export const TweenSchema = {
    COMPONENT_ID: 1102,
    serialize(value, builder) {
        const writer = PBTween.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBTween.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBTween.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBTween"
    }
};
