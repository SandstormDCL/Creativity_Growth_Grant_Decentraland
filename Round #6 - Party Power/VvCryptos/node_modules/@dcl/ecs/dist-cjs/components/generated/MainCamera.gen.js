"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainCameraSchema = void 0;
const main_camera_gen_1 = require("./pb/decentraland/sdk/components/main_camera.gen");
/**
 * @internal
 */
exports.MainCameraSchema = {
    COMPONENT_ID: 1075,
    serialize(value, builder) {
        const writer = main_camera_gen_1.PBMainCamera.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return main_camera_gen_1.PBMainCamera.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return main_camera_gen_1.PBMainCamera.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBMainCamera"
    }
};
