"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerIdentityDataSchema = void 0;
const player_identity_data_gen_1 = require("./pb/decentraland/sdk/components/player_identity_data.gen");
/**
 * @internal
 */
exports.PlayerIdentityDataSchema = {
    COMPONENT_ID: 1089,
    serialize(value, builder) {
        const writer = player_identity_data_gen_1.PBPlayerIdentityData.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return player_identity_data_gen_1.PBPlayerIdentityData.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return player_identity_data_gen_1.PBPlayerIdentityData.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBPlayerIdentityData"
    }
};
