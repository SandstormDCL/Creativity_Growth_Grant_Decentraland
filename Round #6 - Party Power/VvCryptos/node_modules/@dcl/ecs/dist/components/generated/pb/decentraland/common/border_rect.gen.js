/* eslint-disable */
import _m0 from "protobufjs/minimal";
const protobufPackageSarasa = "decentraland.common";
function createBaseBorderRect() {
    return { top: 0, left: 0, right: 0, bottom: 0 };
}
/**
 * @public
 */
export var BorderRect;
(function (BorderRect) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.top !== 0) {
            writer.uint32(13).float(message.top);
        }
        if (message.left !== 0) {
            writer.uint32(21).float(message.left);
        }
        if (message.right !== 0) {
            writer.uint32(29).float(message.right);
        }
        if (message.bottom !== 0) {
            writer.uint32(37).float(message.bottom);
        }
        return writer;
    }
    BorderRect.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBorderRect();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }
                    message.top = reader.float();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.left = reader.float();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.right = reader.float();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }
                    message.bottom = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    BorderRect.decode = decode;
})(BorderRect || (BorderRect = {}));
function createBaseRect() {
    return { x: 0, y: 0, width: 0, height: 0 };
}
/**
 * @public
 */
export var Rect;
(function (Rect) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.x !== 0) {
            writer.uint32(13).float(message.x);
        }
        if (message.y !== 0) {
            writer.uint32(21).float(message.y);
        }
        if (message.width !== 0) {
            writer.uint32(29).float(message.width);
        }
        if (message.height !== 0) {
            writer.uint32(37).float(message.height);
        }
        return writer;
    }
    Rect.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRect();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }
                    message.x = reader.float();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.y = reader.float();
                    continue;
                case 3:
                    if (tag !== 29) {
                        break;
                    }
                    message.width = reader.float();
                    continue;
                case 4:
                    if (tag !== 37) {
                        break;
                    }
                    message.height = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    Rect.decode = decode;
})(Rect || (Rect = {}));
