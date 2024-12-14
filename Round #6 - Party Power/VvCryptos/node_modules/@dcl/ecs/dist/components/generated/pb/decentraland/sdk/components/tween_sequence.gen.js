/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PBTween } from "./tween.gen";
const protobufPackageSarasa = "decentraland.sdk.components";
/**
 * @public
 */
export var TweenLoop;
(function (TweenLoop) {
    TweenLoop[TweenLoop["TL_RESTART"] = 0] = "TL_RESTART";
    TweenLoop[TweenLoop["TL_YOYO"] = 1] = "TL_YOYO";
})(TweenLoop || (TweenLoop = {}));
function createBasePBTweenSequence() {
    return { sequence: [], loop: undefined };
}
/**
 * @public
 */
export var PBTweenSequence;
(function (PBTweenSequence) {
    function encode(message, writer = _m0.Writer.create()) {
        for (const v of message.sequence) {
            PBTween.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.loop !== undefined) {
            writer.uint32(16).int32(message.loop);
        }
        return writer;
    }
    PBTweenSequence.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBTweenSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.sequence.push(PBTween.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.loop = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBTweenSequence.decode = decode;
})(PBTweenSequence || (PBTweenSequence = {}));
