import { PBUiDropdownResult } from './pb/decentraland/sdk/components/ui_dropdown_result.gen';
/**
 * @internal
 */
export const UiDropdownResultSchema = {
    COMPONENT_ID: 1096,
    serialize(value, builder) {
        const writer = PBUiDropdownResult.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBUiDropdownResult.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBUiDropdownResult.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBUiDropdownResult"
    }
};
