/* eslint-disable */
import _m0 from "protobufjs/minimal";
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBPointerLock() {
    return { isPointerLocked: false };
}
/**
 * @public
 */
export var PBPointerLock;
(function (PBPointerLock) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.isPointerLocked === true) {
            writer.uint32(8).bool(message.isPointerLocked);
        }
        return writer;
    }
    PBPointerLock.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBPointerLock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.isPointerLocked = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBPointerLock.decode = decode;
})(PBPointerLock || (PBPointerLock = {}));
