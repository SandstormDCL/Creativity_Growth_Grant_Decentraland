"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteEntity = void 0;
const crdtMessageProtocol_1 = require("./crdtMessageProtocol");
const types_1 = require("./types");
/**
 * @public
 */
var DeleteEntity;
(function (DeleteEntity) {
    DeleteEntity.MESSAGE_HEADER_LENGTH = 4;
    function write(entity, buf) {
        // Write CrdtMessage header
        buf.writeUint32(types_1.CRDT_MESSAGE_HEADER_LENGTH + 4);
        buf.writeUint32(types_1.CrdtMessageType.DELETE_ENTITY);
        // body
        buf.writeUint32(entity);
    }
    DeleteEntity.write = write;
    function read(buf) {
        const header = crdtMessageProtocol_1.CrdtMessageProtocol.readHeader(buf);
        if (!header) {
            return null;
        }
        if (header.type !== types_1.CrdtMessageType.DELETE_ENTITY) {
            throw new Error('DeleteEntity tried to read another message type.');
        }
        return {
            ...header,
            entityId: buf.readUint32()
        };
    }
    DeleteEntity.read = read;
})(DeleteEntity = exports.DeleteEntity || (exports.DeleteEntity = {}));
