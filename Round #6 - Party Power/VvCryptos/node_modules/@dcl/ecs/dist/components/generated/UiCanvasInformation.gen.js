import { PBUiCanvasInformation } from './pb/decentraland/sdk/components/ui_canvas_information.gen';
/**
 * @internal
 */
export const UiCanvasInformationSchema = {
    COMPONENT_ID: 1054,
    serialize(value, builder) {
        const writer = PBUiCanvasInformation.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBUiCanvasInformation.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBUiCanvasInformation.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBUiCanvasInformation"
    }
};
