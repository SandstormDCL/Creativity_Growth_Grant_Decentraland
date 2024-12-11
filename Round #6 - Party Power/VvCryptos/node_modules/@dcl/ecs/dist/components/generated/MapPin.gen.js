import { PBMapPin } from './pb/decentraland/sdk/components/map_pin.gen';
/**
 * @internal
 */
export const MapPinSchema = {
    COMPONENT_ID: 1097,
    serialize(value, builder) {
        const writer = PBMapPin.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBMapPin.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBMapPin.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBMapPin"
    }
};
