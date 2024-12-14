import { PBBillboard } from './pb/decentraland/sdk/components/billboard.gen';
/**
 * @internal
 */
export const BillboardSchema = {
    COMPONENT_ID: 1090,
    serialize(value, builder) {
        const writer = PBBillboard.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return PBBillboard.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return PBBillboard.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBBillboard"
    }
};
