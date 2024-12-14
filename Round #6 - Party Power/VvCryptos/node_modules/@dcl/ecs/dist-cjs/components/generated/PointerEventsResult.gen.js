"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointerEventsResultSchema = void 0;
const pointer_events_result_gen_1 = require("./pb/decentraland/sdk/components/pointer_events_result.gen");
/**
 * @internal
 */
exports.PointerEventsResultSchema = {
    COMPONENT_ID: 1063,
    serialize(value, builder) {
        const writer = pointer_events_result_gen_1.PBPointerEventsResult.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return pointer_events_result_gen_1.PBPointerEventsResult.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return pointer_events_result_gen_1.PBPointerEventsResult.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBPointerEventsResult"
    }
};
