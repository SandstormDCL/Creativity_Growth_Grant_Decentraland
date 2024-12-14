import { PBAnimator } from './pb/decentraland/sdk/components/animator.gen';
/**
 * @internal
 */
export const AnimatorSchema = {
    COMPONENT_ID: 1042,
    serialize(value, builder) {
        const writer = PBAnimator.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBAnimator.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBAnimator.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBAnimator"
    }
};
