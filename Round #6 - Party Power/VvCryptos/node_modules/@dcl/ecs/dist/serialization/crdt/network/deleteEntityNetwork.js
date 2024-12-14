import { CrdtMessageProtocol } from '../crdtMessageProtocol';
import { CrdtMessageType, CRDT_MESSAGE_HEADER_LENGTH } from '../types';
/**
 * @public
 */
export var DeleteEntityNetwork;
(function (DeleteEntityNetwork) {
    DeleteEntityNetwork.MESSAGE_HEADER_LENGTH = 8;
    function write(entity, networkId, buf) {
        // Write CrdtMessage header
        buf.writeUint32(CRDT_MESSAGE_HEADER_LENGTH + 4);
        buf.writeUint32(CrdtMessageType.DELETE_ENTITY_NETWORK);
        // body
        buf.writeUint32(entity);
        buf.writeUint32(networkId);
    }
    DeleteEntityNetwork.write = write;
    function read(buf) {
        const header = CrdtMessageProtocol.readHeader(buf);
        if (!header) {
            return null;
        }
        if (header.type !== CrdtMessageType.DELETE_ENTITY_NETWORK) {
            throw new Error('DeleteEntityNetwork tried to read another message type.');
        }
        return {
            ...header,
            entityId: buf.readUint32(),
            networkId: buf.readUint32()
        };
    }
    DeleteEntityNetwork.read = read;
})(DeleteEntityNetwork || (DeleteEntityNetwork = {}));
