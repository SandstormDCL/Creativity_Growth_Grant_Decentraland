"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealmInfoSchema = void 0;
const realm_info_gen_1 = require("./pb/decentraland/sdk/components/realm_info.gen");
/**
 * @internal
 */
exports.RealmInfoSchema = {
    COMPONENT_ID: 1106,
    serialize(value, builder) {
        const writer = realm_info_gen_1.PBRealmInfo.encode(value);
        const buffer = new Uint8Array(writer.finish(), 0, writer.len);
        builder.writeBuffer(buffer, false);
    },
    deserialize(reader) {
        return realm_info_gen_1.PBRealmInfo.decode(reader.buffer(), reader.remainingBytes());
    },
    create() {
        // TODO: this is a hack.
        return realm_info_gen_1.PBRealmInfo.decode(new Uint8Array());
    },
    jsonSchema: {
        type: "object",
        properties: {},
        serializationType: "protocol-buffer",
        protocolBuffer: "PBRealmInfo"
    }
};
