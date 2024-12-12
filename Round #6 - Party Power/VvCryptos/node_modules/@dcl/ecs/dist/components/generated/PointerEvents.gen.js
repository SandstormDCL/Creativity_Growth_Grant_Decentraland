import { PBPointerEvents } from './pb/decentraland/sdk/components/pointer_events.gen';
/**
 * @internal
 */
export const PointerEventsSchema = {
    COMPONENT_ID: 1062,
    serialize(value, builder) {
        const writer = PBPointerEvents.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBPointerEvents.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBPointerEvents.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBPointerEvents"
    }
};
