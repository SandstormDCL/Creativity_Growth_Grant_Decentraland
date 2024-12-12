"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readMessage = void 0;
const crdtMessageProtocol_1 = require("./crdtMessageProtocol");
const types_1 = require("./types");
const putComponent_1 = require("./putComponent");
const deleteComponent_1 = require("./deleteComponent");
const deleteEntity_1 = require("./deleteEntity");
const appendValue_1 = require("./appendValue");
const putComponentNetwork_1 = require("./network/putComponentNetwork");
const deleteComponentNetwork_1 = require("./network/deleteComponentNetwork");
const deleteEntityNetwork_1 = require("./network/deleteEntityNetwork");
function readMessage(buf) {
    const header = crdtMessageProtocol_1.CrdtMessageProtocol.getHeader(buf);
    if (!header)
        return null;
    if (header.type === types_1.CrdtMessageType.PUT_COMPONENT) {
        return putComponent_1.PutComponentOperation.read(buf);
    }
    else if (header.type === types_1.CrdtMessageType.PUT_COMPONENT_NETWORK) {
        return putComponentNetwork_1.PutNetworkComponentOperation.read(buf);
    }
    else if (header.type === types_1.CrdtMessageType.DELETE_COMPONENT) {
        return deleteComponent_1.DeleteComponent.read(buf);
    }
    else if (header.type === types_1.CrdtMessageType.DELETE_COMPONENT_NETWORK) {
        return deleteComponentNetwork_1.DeleteComponentNetwork.read(buf);
    }
    else if (header.type === types_1.CrdtMessageType.APPEND_VALUE) {
        return appendValue_1.AppendValueOperation.read(buf);
    }
    else if (header.type === types_1.CrdtMessageType.DELETE_ENTITY) {
        return deleteEntity_1.DeleteEntity.read(buf);
    }
    else if (header.type === types_1.CrdtMessageType.DELETE_ENTITY_NETWORK) {
        return deleteEntityNetwork_1.DeleteEntityNetwork.read(buf);
    }
    return null;
}
exports.readMessage = readMessage;
