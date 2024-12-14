"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimatorSchema = void 0;
const animator_gen_1 = require("./pb/decentraland/sdk/components/animator.gen");
/**
 * @internal
 */
exports.AnimatorSchema = {
    COMPONENT_ID: 1042,
    serialize(value, builder) {
        const writer = animator_gen_1.PBAnimator.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return animator_gen_1.PBAnimator.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return animator_gen_1.PBAnimator.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBAnimator"
    }
};
