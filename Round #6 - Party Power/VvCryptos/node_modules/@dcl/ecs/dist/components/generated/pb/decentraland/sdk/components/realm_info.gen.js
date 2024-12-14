/* eslint-disable */
import _m0 from "protobufjs/minimal";
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBRealmInfo() {
    return {
        baseUrl: "",
        realmName: "",
        networkId: 0,
        commsAdapter: "",
        isPreview: false,
        room: undefined,
        isConnectedSceneRoom: undefined,
    };
}
/**
 * @public
 */
export var PBRealmInfo;
(function (PBRealmInfo) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.baseUrl !== "") {
            writer.uint32(10).string(message.baseUrl);
        }
        if (message.realmName !== "") {
            writer.uint32(18).string(message.realmName);
        }
        if (message.networkId !== 0) {
            writer.uint32(24).int32(message.networkId);
        }
        if (message.commsAdapter !== "") {
            writer.uint32(34).string(message.commsAdapter);
        }
        if (message.isPreview === true) {
            writer.uint32(40).bool(message.isPreview);
        }
        if (message.room !== undefined) {
            writer.uint32(50).string(message.room);
        }
        if (message.isConnectedSceneRoom !== undefined) {
            writer.uint32(56).bool(message.isConnectedSceneRoom);
        }
        return writer;
    }
    PBRealmInfo.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBRealmInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.baseUrl = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.realmName = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.networkId = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.commsAdapter = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.isPreview = reader.bool();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.room = reader.string();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.isConnectedSceneRoom = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBRealmInfo.decode = decode;
})(PBRealmInfo || (PBRealmInfo = {}));
