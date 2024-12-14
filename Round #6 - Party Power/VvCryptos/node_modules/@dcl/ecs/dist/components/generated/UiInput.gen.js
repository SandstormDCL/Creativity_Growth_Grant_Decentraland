import { PBUiInput } from './pb/decentraland/sdk/components/ui_input.gen';
/**
 * @internal
 */
export const UiInputSchema = {
    COMPONENT_ID: 1093,
    serialize(value, builder) {
        const writer = PBUiInput.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBUiInput.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBUiInput.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBUiInput"
    }
};
