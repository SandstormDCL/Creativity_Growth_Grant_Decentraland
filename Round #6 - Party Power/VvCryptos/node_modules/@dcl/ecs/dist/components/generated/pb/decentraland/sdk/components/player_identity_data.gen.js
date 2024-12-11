/* eslint-disable */
import _m0 from "protobufjs/minimal";
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBPlayerIdentityData() {
    return { address: "", isGuest: false };
}
/**
 * @public
 */
export var PBPlayerIdentityData;
(function (PBPlayerIdentityData) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.isGuest === true) {
            writer.uint32(24).bool(message.isGuest);
        }
        return writer;
    }
    PBPlayerIdentityData.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBPlayerIdentityData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.address = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.isGuest = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBPlayerIdentityData.decode = decode;
})(PBPlayerIdentityData || (PBPlayerIdentityData = {}));
