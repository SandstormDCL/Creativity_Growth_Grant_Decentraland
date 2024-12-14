import { PBEngineInfo } from './pb/decentraland/sdk/components/engine_info.gen';
/**
 * @internal
 */
export const EngineInfoSchema = {
    COMPONENT_ID: 1048,
    serialize(value, builder) {
        const writer = PBEngineInfo.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBEngineInfo.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBEngineInfo.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBEngineInfo"
    }
};
