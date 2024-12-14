"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NftShapeSchema = void 0;
const nft_shape_gen_1 = require("./pb/decentraland/sdk/components/nft_shape.gen");
/**
 * @internal
 */
exports.NftShapeSchema = {
    COMPONENT_ID: 1040,
    serialize(value, builder) {
        const writer = nft_shape_gen_1.PBNftShape.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return nft_shape_gen_1.PBNftShape.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return nft_shape_gen_1.PBNftShape.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBNftShape"
    }
};
