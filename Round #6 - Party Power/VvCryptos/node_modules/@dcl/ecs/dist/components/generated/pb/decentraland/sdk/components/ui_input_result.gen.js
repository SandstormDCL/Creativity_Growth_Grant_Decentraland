/* eslint-disable */
import _m0 from "protobufjs/minimal";
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBUiInputResult() {
    return { value: "", isSubmit: undefined };
}
/**
 * @public
 */
export var PBUiInputResult;
(function (PBUiInputResult) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.value !== "") {
            writer.uint32(10).string(message.value);
        }
        if (message.isSubmit !== undefined) {
            writer.uint32(16).bool(message.isSubmit);
        }
        return writer;
    }
    PBUiInputResult.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBUiInputResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.value = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.isSubmit = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBUiInputResult.decode = decode;
})(PBUiInputResult || (PBUiInputResult = {}));
