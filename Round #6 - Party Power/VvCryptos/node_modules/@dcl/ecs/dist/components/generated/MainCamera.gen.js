import { PBMainCamera } from './pb/decentraland/sdk/components/main_camera.gen';
/**
 * @internal
 */
export const MainCameraSchema = {
    COMPONENT_ID: 1075,
    serialize(value, builder) {
        const writer = PBMainCamera.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBMainCamera.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBMainCamera.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBMainCamera"
    }
};
