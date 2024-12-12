"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PointerLockSchema = void 0;
const pointer_lock_gen_1 = require("./pb/decentraland/sdk/components/pointer_lock.gen");
/**
 * @internal
 */
exports.PointerLockSchema = {
    COMPONENT_ID: 1074,
    serialize(value, builder) {
        const writer = pointer_lock_gen_1.PBPointerLock.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return pointer_lock_gen_1.PBPointerLock.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return pointer_lock_gen_1.PBPointerLock.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBPointerLock"
    }
};
