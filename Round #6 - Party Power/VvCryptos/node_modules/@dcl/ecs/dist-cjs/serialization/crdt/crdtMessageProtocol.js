"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrdtMessageProtocol = void 0;
const types_1 = require("./types");
/**
 * @public
 */
var CrdtMessageProtocol;
(function (CrdtMessageProtocol) {
    /**
     * Validate if the message incoming is completed
     * @param buf - ByteBuffer
     */
    function validate(buf) {
        const rem = buf.remainingBytes();
        if (rem < types_1.CRDT_MESSAGE_HEADER_LENGTH) {
            return false;
        }
        const messageLength = buf.getUint32(buf.currentReadOffset());
        if (rem < messageLength) {
            return false;
        }
        return true;
    }
    CrdtMessageProtocol.validate = validate;
    /**
     * Get the current header, consuming the bytes involved.
     * @param buf - ByteBuffer
     * @returns header or null if there is no validated message
     */
    function readHeader(buf) {
        if (!validate(buf)) {
            return null;
        }
        return {
            length: buf.readUint32(),
            type: buf.readUint32()
        };
    }
    CrdtMessageProtocol.readHeader = readHeader;
    /**
     * Get the current header, without consuming the bytes involved.
     * @param buf - ByteBuffer
     * @returns header or null if there is no validated message
     */
    function getHeader(buf) {
        if (!validate(buf)) {
            return null;
        }
        const currentOffset = buf.currentReadOffset();
        return {
            length: buf.getUint32(currentOffset),
            type: buf.getUint32(currentOffset + 4)
        };
    }
    CrdtMessageProtocol.getHeader = getHeader;
    /**
     * Consume the incoming message without processing it.
     * @param buf - ByteBuffer
     * @returns true in case of success or false if there is no valid message.
     */
    function consumeMessage(buf) {
        const header = getHeader(buf);
        if (!header) {
            return false;
        }
        buf.incrementReadOffset(header.length);
        return true;
    }
    CrdtMessageProtocol.consumeMessage = consumeMessage;
})(CrdtMessageProtocol = exports.CrdtMessageProtocol || (exports.CrdtMessageProtocol = {}));
