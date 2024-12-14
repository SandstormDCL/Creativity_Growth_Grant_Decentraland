"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteComponent = void 0;
const crdtMessageProtocol_1 = require("./crdtMessageProtocol");
const types_1 = require("./types");
/**
 * @public
 */
var DeleteComponent;
(function (DeleteComponent) {
    DeleteComponent.MESSAGE_HEADER_LENGTH = 12;
    /**
     * Write DeleteComponent message
     */
    function write(entity, componentId, timestamp, buf) {
        // reserve the beginning
        const messageLength = types_1.CRDT_MESSAGE_HEADER_LENGTH + DeleteComponent.MESSAGE_HEADER_LENGTH;
        const startMessageOffset = buf.incrementWriteOffset(messageLength);
        // Write CrdtMessage header
        buf.setUint32(startMessageOffset, messageLength);
        buf.setUint32(startMessageOffset + 4, types_1.CrdtMessageType.DELETE_COMPONENT);
        // Write ComponentOperation header
        buf.setUint32(startMessageOffset + 8, entity);
        buf.setUint32(startMessageOffset + 12, componentId);
        buf.setUint32(startMessageOffset + 16, timestamp);
    }
    DeleteComponent.write = write;
    function read(buf) {
        const header = crdtMessageProtocol_1.CrdtMessageProtocol.readHeader(buf);
        if (!header) {
            return null;
        }
        if (header.type !== types_1.CrdtMessageType.DELETE_COMPONENT) {
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
})(DeleteComponent = exports.DeleteComponent || (exports.DeleteComponent = {}));
