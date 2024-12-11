/* eslint-disable */
import _m0 from "protobufjs/minimal";
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBGltfContainer() {
    return { src: "", visibleMeshesCollisionMask: undefined, invisibleMeshesCollisionMask: undefined };
}
/**
 * @public
 */
export var PBGltfContainer;
(function (PBGltfContainer) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.src !== "") {
            writer.uint32(10).string(message.src);
        }
        if (message.visibleMeshesCollisionMask !== undefined) {
            writer.uint32(32).uint32(message.visibleMeshesCollisionMask);
        }
        if (message.invisibleMeshesCollisionMask !== undefined) {
            writer.uint32(40).uint32(message.invisibleMeshesCollisionMask);
        }
        return writer;
    }
    PBGltfContainer.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBGltfContainer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.src = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.visibleMeshesCollisionMask = reader.uint32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.invisibleMeshesCollisionMask = reader.uint32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBGltfContainer.decode = decode;
})(PBGltfContainer || (PBGltfContainer = {}));
