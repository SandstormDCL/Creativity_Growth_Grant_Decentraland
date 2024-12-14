"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillboardSchema = void 0;
const billboard_gen_1 = require("./pb/decentraland/sdk/components/billboard.gen");
/**
 * @internal
 */
exports.BillboardSchema = {
    COMPONENT_ID: 1090,
    serialize(value, builder) {
        const writer = billboard_gen_1.PBBillboard.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return billboard_gen_1.PBBillboard.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return billboard_gen_1.PBBillboard.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBBillboard"
    }
};
