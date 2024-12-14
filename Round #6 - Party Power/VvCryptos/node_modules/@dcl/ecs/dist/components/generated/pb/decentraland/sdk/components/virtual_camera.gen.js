/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { CameraTransition } from "./common/camera_transition.gen";
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBVirtualCamera() {
    return { defaultTransition: undefined, lookAtEntity: undefined };
}
/**
 * @public
 */
export var PBVirtualCamera;
(function (PBVirtualCamera) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.defaultTransition !== undefined) {
            CameraTransition.encode(message.defaultTransition, writer.uint32(10).fork()).ldelim();
        }
        if (message.lookAtEntity !== undefined) {
            writer.uint32(16).uint32(message.lookAtEntity);
        }
        return writer;
    }
    PBVirtualCamera.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBVirtualCamera();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.defaultTransition = CameraTransition.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.lookAtEntity = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBVirtualCamera.decode = decode;
})(PBVirtualCamera || (PBVirtualCamera = {}));
