import { PBVisibilityComponent } from './pb/decentraland/sdk/components/visibility_component.gen';
/**
 * @internal
 */
export const VisibilityComponentSchema = {
    COMPONENT_ID: 1081,
    serialize(value, builder) {
        const writer = PBVisibilityComponent.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBVisibilityComponent.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBVisibilityComponent.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBVisibilityComponent"
    }
};
