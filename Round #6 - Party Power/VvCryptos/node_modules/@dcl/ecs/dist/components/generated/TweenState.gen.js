import { PBTweenState } from './pb/decentraland/sdk/components/tween_state.gen';
/**
 * @internal
 */
export const TweenStateSchema = {
    COMPONENT_ID: 1103,
    serialize(value, builder) {
        const writer = PBTweenState.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBTweenState.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBTweenState.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBTweenState"
    }
};
