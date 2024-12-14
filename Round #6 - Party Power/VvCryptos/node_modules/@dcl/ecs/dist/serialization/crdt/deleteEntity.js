import { CrdtMessageProtocol } from './crdtMessageProtocol';
import { CrdtMessageType, CRDT_MESSAGE_HEADER_LENGTH } from './types';
/**
 * @public
 */
export var DeleteEntity;
(function (DeleteEntity) {
    DeleteEntity.MESSAGE_HEADER_LENGTH = 4;
    function write(entity, buf) {
        // Write CrdtMessage header
        buf.writeUint32(CRDT_MESSAGE_HEADER_LENGTH + 4);
        buf.writeUint32(CrdtMessageType.DELETE_ENTITY);
        // body
        buf.writeUint32(entity);
    }
    DeleteEntity.write = write;
    function read(buf) {
        const header = CrdtMessageProtocol.readHeader(buf);
        if (!header) {
            return null;
        }
        if (header.type !== CrdtMessageType.DELETE_ENTITY) {
            throw new Error('DeleteEntity tried to read another message type.');
        }
        return {
            ...header,
            entityId: buf.readUint32()
        };
    }
    DeleteEntity.read = read;
})(DeleteEntity || (DeleteEntity = {}));
