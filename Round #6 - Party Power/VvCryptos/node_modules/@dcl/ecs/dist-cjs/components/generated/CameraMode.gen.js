"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CameraModeSchema = void 0;
const camera_mode_gen_1 = require("./pb/decentraland/sdk/components/camera_mode.gen");
/**
 * @internal
 */
exports.CameraModeSchema = {
    COMPONENT_ID: 1072,
    serialize(value, builder) {
        const writer = camera_mode_gen_1.PBCameraMode.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return camera_mode_gen_1.PBCameraMode.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return camera_mode_gen_1.PBCameraMode.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBCameraMode"
    }
};
