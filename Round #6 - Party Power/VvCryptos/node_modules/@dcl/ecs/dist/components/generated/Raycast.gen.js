import { PBRaycast } from './pb/decentraland/sdk/components/raycast.gen';
/**
 * @internal
 */
export const RaycastSchema = {
    COMPONENT_ID: 1067,
    serialize(value, builder) {
        const writer = PBRaycast.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBRaycast.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBRaycast.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBRaycast"
    }
};
