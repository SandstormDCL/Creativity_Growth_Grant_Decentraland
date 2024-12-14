import { PBRaycastResult } from './pb/decentraland/sdk/components/raycast_result.gen';
/**
 * @internal
 */
export const RaycastResultSchema = {
    COMPONENT_ID: 1068,
    serialize(value, builder) {
        const writer = PBRaycastResult.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBRaycastResult.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBRaycastResult.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBRaycastResult"
    }
};
