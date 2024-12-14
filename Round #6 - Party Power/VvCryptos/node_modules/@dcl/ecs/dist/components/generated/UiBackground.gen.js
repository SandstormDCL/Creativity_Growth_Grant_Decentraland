import { PBUiBackground } from './pb/decentraland/sdk/components/ui_background.gen';
/**
 * @internal
 */
export const UiBackgroundSchema = {
    COMPONENT_ID: 1053,
    serialize(value, builder) {
        const writer = PBUiBackground.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBUiBackground.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBUiBackground.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBUiBackground"
    }
};
