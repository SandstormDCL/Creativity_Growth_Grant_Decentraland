"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapPinSchema = void 0;
const map_pin_gen_1 = require("./pb/decentraland/sdk/components/map_pin.gen");
/**
 * @internal
 */
exports.MapPinSchema = {
    COMPONENT_ID: 1097,
    serialize(value, builder) {
        const writer = map_pin_gen_1.PBMapPin.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return map_pin_gen_1.PBMapPin.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return map_pin_gen_1.PBMapPin.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBMapPin"
    }
};
