import { PBUiText } from './pb/decentraland/sdk/components/ui_text.gen';
/**
 * @internal
 */
export const UiTextSchema = {
    COMPONENT_ID: 1052,
    serialize(value, builder) {
        const writer = PBUiText.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBUiText.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBUiText.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBUiText"
    }
};
