"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEntityNetwork = void 0;
const crdtMessageProtocol_1 = require("../crdtMessageProtocol");
const types_1 = require("../types");
/**
 * @public
 */
var DeleteEntityNetwork;
(function (DeleteEntityNetwork) {
    DeleteEntityNetwork.MESSAGE_HEADER_LENGTH = 8;
    function write(entity, networkId, buf) {
        // Write CrdtMessage header
        buf.writeUint32(types_1.CRDT_MESSAGE_HEADER_LENGTH + 4);
        buf.writeUint32(types_1.CrdtMessageType.DELETE_ENTITY_NETWORK);
        // body
        buf.writeUint32(entity);
        buf.writeUint32(networkId);
    }
    DeleteEntityNetwork.write = write;
    function read(buf) {
        const header = crdtMessageProtocol_1.CrdtMessageProtocol.readHeader(buf);
        if (!header) {
            return null;
        }
        if (header.type !== types_1.CrdtMessageType.DELETE_ENTITY_NETWORK) {
            throw new Error('DeleteEntityNetwork tried to read another message type.');
        }
        return {
            ...header,
            entityId: buf.readUint32(),
            networkId: buf.readUint32()
        };
    }
    DeleteEntityNetwork.read = read;
})(DeleteEntityNetwork = exports.DeleteEntityNetwork || (exports.DeleteEntityNetwork = {}));
