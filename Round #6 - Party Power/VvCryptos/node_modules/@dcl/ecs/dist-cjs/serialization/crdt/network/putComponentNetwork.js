"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutNetworkComponentOperation = void 0;
const crdtMessageProtocol_1 = require("../crdtMessageProtocol");
const types_1 = require("../types");
/**
 * @public
 */
var PutNetworkComponentOperation;
(function (PutNetworkComponentOperation) {
    PutNetworkComponentOperation.MESSAGE_HEADER_LENGTH = 20;
    /**
     * Call this function for an optimal writing data passing the ByteBuffer
     *  already allocated
     */
    function write(entity, timestamp, componentId, networkId, data, buf) {
        // reserve the beginning
        const startMessageOffset = buf.incrementWriteOffset(types_1.CRDT_MESSAGE_HEADER_LENGTH + PutNetworkComponentOperation.MESSAGE_HEADER_LENGTH);
        // write body
        buf.writeBuffer(data, false);
        const messageLength = buf.currentWriteOffset() - startMessageOffset;
        // Write CrdtMessage header
        buf.setUint32(startMessageOffset, messageLength);
        buf.setUint32(startMessageOffset + 4, types_1.CrdtMessageType.PUT_COMPONENT_NETWORK);
        // Write ComponentOperation header
        buf.setUint32(startMessageOffset + 8, entity);
        buf.setUint32(startMessageOffset + 12, componentId);
        buf.setUint32(startMessageOffset + 16, timestamp);
        buf.setUint32(startMessageOffset + 20, networkId);
        const dataLength = messageLength - PutNetworkComponentOperation.MESSAGE_HEADER_LENGTH - types_1.CRDT_MESSAGE_HEADER_LENGTH;
        buf.setUint32(startMessageOffset + 24, dataLength);
    }
    PutNetworkComponentOperation.write = write;
    function read(buf) {
        const header = crdtMessageProtocol_1.CrdtMessageProtocol.readHeader(buf);
        if (!header) {
            return null;
        }
        if (header.type !== types_1.CrdtMessageType.PUT_COMPONENT_NETWORK) {
            throw new Error('PutComponentNetworkOperation tried to read another message type.');
        }
        return {
            ...header,
            entityId: buf.readUint32(),
            componentId: buf.readUint32(),
            timestamp: buf.readUint32(),
            networkId: buf.readUint32(),
            data: buf.readBuffer()
        };
    }
    PutNetworkComponentOperation.read = read;
})(PutNetworkComponentOperation = exports.PutNetworkComponentOperation || (exports.PutNetworkComponentOperation = {}));
