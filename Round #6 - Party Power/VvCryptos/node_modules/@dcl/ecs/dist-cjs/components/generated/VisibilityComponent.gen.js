"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisibilityComponentSchema = void 0;
const visibility_component_gen_1 = require("./pb/decentraland/sdk/components/visibility_component.gen");
/**
 * @internal
 */
exports.VisibilityComponentSchema = {
    COMPONENT_ID: 1081,
    serialize(value, builder) {
        const writer = visibility_component_gen_1.PBVisibilityComponent.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return visibility_component_gen_1.PBVisibilityComponent.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return visibility_component_gen_1.PBVisibilityComponent.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBVisibilityComponent"
    }
};
