import { PBCameraMode } from './pb/decentraland/sdk/components/camera_mode.gen';
/**
 * @internal
 */
export const CameraModeSchema = {
    COMPONENT_ID: 1072,
    serialize(value, builder) {
        const writer = PBCameraMode.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBCameraMode.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBCameraMode.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBCameraMode"
    }
};
