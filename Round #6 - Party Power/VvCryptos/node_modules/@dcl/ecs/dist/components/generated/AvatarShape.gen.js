import { PBAvatarShape } from './pb/decentraland/sdk/components/avatar_shape.gen';
/**
 * @internal
 */
export const AvatarShapeSchema = {
    COMPONENT_ID: 1080,
    serialize(value, builder) {
        const writer = PBAvatarShape.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBAvatarShape.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBAvatarShape.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBAvatarShape"
    }
};
