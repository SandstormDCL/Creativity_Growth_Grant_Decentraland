import { CrdtMessageProtocol } from '../crdtMessageProtocol';
import { CrdtMessageType, CRDT_MESSAGE_HEADER_LENGTH } from '../types';
/**
 * @public
 */
export var PutNetworkComponentOperation;
(function (PutNetworkComponentOperation) {
    PutNetworkComponentOperation.MESSAGE_HEADER_LENGTH = 20;
    /**
     * Call this function for an optimal writing data passing the ByteBuffer
     *  already allocated
     */
    function write(entity, timestamp, componentId, networkId, data, buf) {
        // reserve the beginning
        const startMessageOffset = buf.incrementWriteOffset(CRDT_MESSAGE_HEADER_LENGTH + PutNetworkComponentOperation.MESSAGE_HEADER_LENGTH);
        // write body
        buf.writeBuffer(data, false);
        const messageLength = buf.currentWriteOffset() - startMessageOffset;
        // Write CrdtMessage header
        buf.setUint32(startMessageOffset, messageLength);
        buf.setUint32(startMessageOffset + 4, CrdtMessageType.PUT_COMPONENT_NETWORK);
        // Write ComponentOperation header
        buf.setUint32(startMessageOffset + 8, entity);
        buf.setUint32(startMessageOffset + 12, componentId);
        buf.setUint32(startMessageOffset + 16, timestamp);
        buf.setUint32(startMessageOffset + 20, networkId);
        const dataLength = messageLength - PutNetworkComponentOperation.MESSAGE_HEADER_LENGTH - CRDT_MESSAGE_HEADER_LENGTH;
        buf.setUint32(startMessageOffset + 24, dataLength);
    }
    PutNetworkComponentOperation.write = write;
    function read(buf) {
        const header = CrdtMessageProtocol.readHeader(buf);
        if (!header) {
            return null;
        }
        if (header.type !== CrdtMessageType.PUT_COMPONENT_NETWORK) {
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
})(PutNetworkComponentOperation || (PutNetworkComponentOperation = {}));
