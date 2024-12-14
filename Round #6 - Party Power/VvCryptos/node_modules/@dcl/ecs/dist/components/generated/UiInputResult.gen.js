import { PBUiInputResult } from './pb/decentraland/sdk/components/ui_input_result.gen';
/**
 * @internal
 */
export const UiInputResultSchema = {
    COMPONENT_ID: 1095,
    serialize(value, builder) {
        const writer = PBUiInputResult.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBUiInputResult.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBUiInputResult.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBUiInputResult"
    }
};
