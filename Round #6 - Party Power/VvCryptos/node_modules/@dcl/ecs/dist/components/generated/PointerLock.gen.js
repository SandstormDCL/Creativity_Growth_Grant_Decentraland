import { PBPointerLock } from './pb/decentraland/sdk/components/pointer_lock.gen';
/**
 * @internal
 */
export const PointerLockSchema = {
    COMPONENT_ID: 1074,
    serialize(value, builder) {
        const writer = PBPointerLock.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBPointerLock.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBPointerLock.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBPointerLock"
    }
};
