import { PBUiDropdown } from './pb/decentraland/sdk/components/ui_dropdown.gen';
/**
 * @internal
 */
export const UiDropdownSchema = {
    COMPONENT_ID: 1094,
    serialize(value, builder) {
        const writer = PBUiDropdown.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBUiDropdown.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBUiDropdown.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBUiDropdown"
    }
};
