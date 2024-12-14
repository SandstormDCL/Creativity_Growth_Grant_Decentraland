/* eslint-disable */
import _m0 from "protobufjs/minimal";
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBMainCamera() {
    return { virtualCameraEntity: undefined };
}
/**
 * @public
 */
export var PBMainCamera;
(function (PBMainCamera) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.virtualCameraEntity !== undefined) {
            writer.uint32(8).uint32(message.virtualCameraEntity);
        }
        return writer;
    }
    PBMainCamera.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBMainCamera();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.virtualCameraEntity = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBMainCamera.decode = decode;
})(PBMainCamera || (PBMainCamera = {}));
