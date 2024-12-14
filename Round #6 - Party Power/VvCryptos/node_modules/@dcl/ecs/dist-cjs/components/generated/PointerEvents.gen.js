"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointerEventsSchema = void 0;
const pointer_events_gen_1 = require("./pb/decentraland/sdk/components/pointer_events.gen");
/**
 * @internal
 */
exports.PointerEventsSchema = {
    COMPONENT_ID: 1062,
    serialize(value, builder) {
        const writer = pointer_events_gen_1.PBPointerEvents.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return pointer_events_gen_1.PBPointerEvents.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return pointer_events_gen_1.PBPointerEvents.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBPointerEvents"
    }
};
