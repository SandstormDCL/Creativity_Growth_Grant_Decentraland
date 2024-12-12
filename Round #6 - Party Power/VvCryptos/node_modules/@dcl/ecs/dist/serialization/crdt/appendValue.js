import { CrdtMessageProtocol } from './crdtMessageProtocol';
import { CrdtMessageType, CRDT_MESSAGE_HEADER_LENGTH } from './types';
/**
 * @public
 */
export var AppendValueOperation;
(function (AppendValueOperation) {
    AppendValueOperation.MESSAGE_HEADER_LENGTH = 16;
    /**
     * Call this function for an optimal writing data passing the ByteBuffer
     *  already allocated
     */
    function write(entity, timestamp, componentId, data, buf) {
        // reserve the beginning
        const startMessageOffset = buf.incrementWriteOffset(CRDT_MESSAGE_HEADER_LENGTH + AppendValueOperation.MESSAGE_HEADER_LENGTH);
        // write body
        buf.writeBuffer(data, false);
        const messageLength = buf.currentWriteOffset() - startMessageOffset;
        // Write CrdtMessage header
        buf.setUint32(startMessageOffset, messageLength);
        buf.setUint32(startMessageOffset + 4, CrdtMessageType.APPEND_VALUE);
        // Write ComponentOperation header
        buf.setUint32(startMessageOffset + 8, entity);
        buf.setUint32(startMessageOffset + 12, componentId);
        buf.setUint32(startMessageOffset + 16, timestamp);
        const newLocal = messageLength - AppendValueOperation.MESSAGE_HEADER_LENGTH - CRDT_MESSAGE_HEADER_LENGTH;
        buf.setUint32(startMessageOffset + 20, newLocal);
    }
    AppendValueOperation.write = write;
    function read(buf) {
        const header = CrdtMessageProtocol.readHeader(buf);
        /* istanbul ignore if */
        if (!header) {
            return null;
        }
        /* istanbul ignore if */
        if (header.type !== CrdtMessageType.APPEND_VALUE) {
            throw new Error('AppendValueOperation tried to read another message type.');
        }
        return {
            ...header,
            entityId: buf.readUint32(),
            componentId: buf.readUint32(),
            timestamp: buf.readUint32(),
            data: buf.readBuffer()
        };
    }
    AppendValueOperation.read = read;
})(AppendValueOperation || (AppendValueOperation = {}));
