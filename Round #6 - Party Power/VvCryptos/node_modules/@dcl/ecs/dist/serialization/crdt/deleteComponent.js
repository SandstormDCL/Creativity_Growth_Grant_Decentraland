import { CrdtMessageProtocol } from './crdtMessageProtocol';
import { CrdtMessageType, CRDT_MESSAGE_HEADER_LENGTH } from './types';
/**
 * @public
 */
export var DeleteComponent;
(function (DeleteComponent) {
    DeleteComponent.MESSAGE_HEADER_LENGTH = 12;
    /**
     * Write DeleteComponent message
     */
    function write(entity, componentId, timestamp, buf) {
        // reserve the beginning
        const messageLength = CRDT_MESSAGE_HEADER_LENGTH + DeleteComponent.MESSAGE_HEADER_LENGTH;
        const startMessageOffset = buf.incrementWriteOffset(messageLength);
        // Write CrdtMessage header
        buf.setUint32(startMessageOffset, messageLength);
        buf.setUint32(startMessageOffset + 4, CrdtMessageType.DELETE_COMPONENT);
        // Write ComponentOperation header
        buf.setUint32(startMessageOffset + 8, entity);
        buf.setUint32(startMessageOffset + 12, componentId);
        buf.setUint32(startMessageOffset + 16, timestamp);
    }
    DeleteComponent.write = write;
    function read(buf) {
        const header = CrdtMessageProtocol.readHeader(buf);
        if (!header) {
            return null;
        }
        if (header.type !== CrdtMessageType.DELETE_COMPONENT) {
            throw new Error('DeleteComponentOperation tried to read another message type.');
        }
        const msg = {
            ...header,
            entityId: buf.readUint32(),
            componentId: buf.readUint32(),
            timestamp: buf.readUint32()
        };
        return msg;
    }
    DeleteComponent.read = read;
})(DeleteComponent || (DeleteComponent = {}));
