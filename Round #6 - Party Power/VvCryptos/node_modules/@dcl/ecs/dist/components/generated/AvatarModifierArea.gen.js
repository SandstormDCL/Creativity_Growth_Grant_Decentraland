import { PBAvatarModifierArea } from './pb/decentraland/sdk/components/avatar_modifier_area.gen';
/**
 * @internal
 */
export const AvatarModifierAreaSchema = {
    COMPONENT_ID: 1070,
    serialize(value, builder) {
        const writer = PBAvatarModifierArea.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBAvatarModifierArea.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBAvatarModifierArea.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBAvatarModifierArea"
    }
};
