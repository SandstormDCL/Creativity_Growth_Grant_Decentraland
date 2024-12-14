"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualCameraSchema = void 0;
const virtual_camera_gen_1 = require("./pb/decentraland/sdk/components/virtual_camera.gen");
/**
 * @internal
 */
exports.VirtualCameraSchema = {
    COMPONENT_ID: 1076,
    serialize(value, builder) {
        const writer = virtual_camera_gen_1.PBVirtualCamera.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return virtual_camera_gen_1.PBVirtualCamera.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return virtual_camera_gen_1.PBVirtualCamera.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBVirtualCamera"
    }
};
