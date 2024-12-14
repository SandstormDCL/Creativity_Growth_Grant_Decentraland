/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Vector3 } from "../../common/vectors.gen";
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBCameraModeArea() {
    return { area: undefined, mode: 0 };
}
/**
 * @public
 */
export var PBCameraModeArea;
(function (PBCameraModeArea) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.area !== undefined) {
            Vector3.encode(message.area, writer.uint32(10).fork()).ldelim();
        }
        if (message.mode !== 0) {
            writer.uint32(16).int32(message.mode);
        }
        return writer;
    }
    PBCameraModeArea.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBCameraModeArea();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.area = Vector3.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.mode = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBCameraModeArea.decode = decode;
})(PBCameraModeArea || (PBCameraModeArea = {}));
