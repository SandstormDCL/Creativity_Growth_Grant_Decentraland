import { PBInputModifier } from './pb/decentraland/sdk/components/input_modifier.gen';
/**
 * @internal
 */
export const InputModifierSchema = {
    COMPONENT_ID: 1078,
    serialize(value, builder) {
        const writer = PBInputModifier.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBInputModifier.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBInputModifier.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBInputModifier"
    }
};
