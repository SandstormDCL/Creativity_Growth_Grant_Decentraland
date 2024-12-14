"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutComponentOperation = void 0;
const crdtMessageProtocol_1 = require("./crdtMessageProtocol");
const types_1 = require("./types");
/**
 * @public
 */
var PutComponentOperation;
(function (PutComponentOperation) {
    PutComponentOperation.MESSAGE_HEADER_LENGTH = 16;
    /**
     * Call this function for an optimal writing data passing the ByteBuffer
     *  already allocated
     */
    function write(entity, timestamp, componentId, data, buf) {
        // reserve the beginning
        const startMessageOffset = buf.incrementWriteOffset(types_1.CRDT_MESSAGE_HEADER_LENGTH + PutComponentOperation.MESSAGE_HEADER_LENGTH);
        // write body
        buf.writeBuffer(data, false);
        const messageLength = buf.currentWriteOffset() - startMessageOffset;
        // Write CrdtMessage header
        buf.setUint32(startMessageOffset, messageLength);
        buf.setUint32(startMessageOffset + 4, types_1.CrdtMessageType.PUT_COMPONENT);
        // Write ComponentOperation header
        buf.setUint32(startMessageOffset + 8, entity);
        buf.setUint32(startMessageOffset + 12, componentId);
        buf.setUint32(startMessageOffset + 16, timestamp);
        const newLocal = messageLength - PutComponentOperation.MESSAGE_HEADER_LENGTH - types_1.CRDT_MESSAGE_HEADER_LENGTH;
        buf.setUint32(startMessageOffset + 20, newLocal);
    }
    PutComponentOperation.write = write;
    function read(buf) {
        const header = crdtMessageProtocol_1.CrdtMessageProtocol.readHeader(buf);
        if (!header) {
            return null;
        }
        if (header.type !== types_1.CrdtMessageType.PUT_COMPONENT) {
            throw new Error('PutComponentOperation tried to read another message type.');
        }
        return {
            ...header,
            entityId: buf.readUint32(),
            componentId: buf.readUint32(),
            timestamp: buf.readUint32(),
            data: buf.readBuffer()
        };
    }
    PutComponentOperation.read = read;
})(PutComponentOperation = exports.PutComponentOperation || (exports.PutComponentOperation = {}));
