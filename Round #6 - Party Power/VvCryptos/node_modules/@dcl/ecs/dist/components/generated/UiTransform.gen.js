import { PBUiTransform } from './pb/decentraland/sdk/components/ui_transform.gen';
/**
 * @internal
 */
export const UiTransformSchema = {
    COMPONENT_ID: 1050,
    serialize(value, builder) {
        const writer = PBUiTransform.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBUiTransform.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBUiTransform.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBUiTransform"
    }
};
