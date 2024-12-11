"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EngineInfoSchema = void 0;
const engine_info_gen_1 = require("./pb/decentraland/sdk/components/engine_info.gen");
/**
 * @internal
 */
exports.EngineInfoSchema = {
    COMPONENT_ID: 1048,
    serialize(value, builder) {
        const writer = engine_info_gen_1.PBEngineInfo.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return engine_info_gen_1.PBEngineInfo.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return engine_info_gen_1.PBEngineInfo.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBEngineInfo"
    }
};
