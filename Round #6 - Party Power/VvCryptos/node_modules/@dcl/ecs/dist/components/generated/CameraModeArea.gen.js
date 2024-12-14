import { PBCameraModeArea } from './pb/decentraland/sdk/components/camera_mode_area.gen';
/**
 * @internal
 */
export const CameraModeAreaSchema = {
    COMPONENT_ID: 1071,
    serialize(value, builder) {
        const writer = PBCameraModeArea.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBCameraModeArea.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBCameraModeArea.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBCameraModeArea"
    }
};
