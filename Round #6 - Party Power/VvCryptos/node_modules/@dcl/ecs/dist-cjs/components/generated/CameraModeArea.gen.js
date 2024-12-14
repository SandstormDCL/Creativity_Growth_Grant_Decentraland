"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CameraModeAreaSchema = void 0;
const camera_mode_area_gen_1 = require("./pb/decentraland/sdk/components/camera_mode_area.gen");
/**
 * @internal
 */
exports.CameraModeAreaSchema = {
    COMPONENT_ID: 1071,
    serialize(value, builder) {
        const writer = camera_mode_area_gen_1.PBCameraModeArea.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return camera_mode_area_gen_1.PBCameraModeArea.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return camera_mode_area_gen_1.PBCameraModeArea.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBCameraModeArea"
    }
};
