import { PBPointerEventsResult } from './pb/decentraland/sdk/components/pointer_events_result.gen';
/**
 * @internal
 */
export const PointerEventsResultSchema = {
    COMPONENT_ID: 1063,
    serialize(value, builder) {
        const writer = PBPointerEventsResult.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBPointerEventsResult.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBPointerEventsResult.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBPointerEventsResult"
    }
};
