import { CrdtMessageProtocol } from '../crdtMessageProtocol';
import { CrdtMessageType, CRDT_MESSAGE_HEADER_LENGTH } from '../types';
/**
 * @public
 */
export var DeleteComponentNetwork;
(function (DeleteComponentNetwork) {
    DeleteComponentNetwork.MESSAGE_HEADER_LENGTH = 16;
    /**
     * Write DeleteComponent message
     */
    function write(entity, componentId, timestamp, networkId, buf) {
        // reserve the beginning
        const messageLength = CRDT_MESSAGE_HEADER_LENGTH + DeleteComponentNetwork.MESSAGE_HEADER_LENGTH;
        const startMessageOffset = buf.incrementWriteOffset(messageLength);
        // Write CrdtMessage header
        buf.setUint32(startMessageOffset, messageLength);
        buf.setUint32(startMessageOffset + 4, CrdtMessageType.DELETE_COMPONENT_NETWORK);
        // Write ComponentOperation header
        buf.setUint32(startMessageOffset + 8, entity);
        buf.setUint32(startMessageOffset + 12, componentId);
        buf.setUint32(startMessageOffset + 16, timestamp);
        buf.setUint32(startMessageOffset + 20, networkId);
    }
    DeleteComponentNetwork.write = write;
    function read(buf) {
        const header = CrdtMessageProtocol.readHeader(buf);
        if (!header) {
            return null;
        }
        if (header.type !== CrdtMessageType.DELETE_COMPONENT_NETWORK) {
            throw new Error('DeleteComponentOperation tried to read another message type.');
        }
        return {
            ...header,
            entityId: buf.readUint32(),
            componentId: buf.readUint32(),
            timestamp: buf.readUint32(),
            networkId: buf.readUint32()
        };
    }
    DeleteComponentNetwork.read = read;
})(DeleteComponentNetwork || (DeleteComponentNetwork = {}));
