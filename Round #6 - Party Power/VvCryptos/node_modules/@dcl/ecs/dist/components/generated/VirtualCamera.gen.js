import { PBVirtualCamera } from './pb/decentraland/sdk/components/virtual_camera.gen';
/**
 * @internal
 */
export const VirtualCameraSchema = {
    COMPONENT_ID: 1076,
    serialize(value, builder) {
        const writer = PBVirtualCamera.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBVirtualCamera.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBVirtualCamera.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBVirtualCamera"
    }
};
