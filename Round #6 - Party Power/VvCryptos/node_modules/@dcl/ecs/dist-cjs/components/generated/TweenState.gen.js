"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweenStateSchema = void 0;
const tween_state_gen_1 = require("./pb/decentraland/sdk/components/tween_state.gen");
/**
 * @internal
 */
exports.TweenStateSchema = {
    COMPONENT_ID: 1103,
    serialize(value, builder) {
        const writer = tween_state_gen_1.PBTweenState.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return tween_state_gen_1.PBTweenState.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return tween_state_gen_1.PBTweenState.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBTweenState"
    }
};
