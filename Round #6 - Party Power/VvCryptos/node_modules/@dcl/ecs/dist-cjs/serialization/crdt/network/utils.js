"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixTransformParent = exports.localMessageToNetwork = exports.networkMessageToLocal = exports.isNetworkMessage = void 0;
const ByteBuffer_1 = require("../../ByteBuffer");
const putComponent_1 = require("../putComponent");
const types_1 = require("../types");
const deleteComponent_1 = require("../deleteComponent");
const deleteEntity_1 = require("../deleteEntity");
const putComponentNetwork_1 = require("./putComponentNetwork");
const deleteComponentNetwork_1 = require("./deleteComponentNetwork");
const deleteEntityNetwork_1 = require("./deleteEntityNetwork");
const Transform_1 = require("../../../components/manual/Transform");
/* istanbul ignore next */
function isNetworkMessage(message) {
    return [
        types_1.CrdtMessageType.DELETE_COMPONENT_NETWORK,
        types_1.CrdtMessageType.DELETE_ENTITY_NETWORK,
        types_1.CrdtMessageType.PUT_COMPONENT_NETWORK
    ].includes(message.type);
}
exports.isNetworkMessage = isNetworkMessage;
/* istanbul ignore next */
function networkMessageToLocal(message, localEntityId, buffer, destinationBuffer) {
    const offset = buffer.currentWriteOffset();
    if (message.type === types_1.CrdtMessageType.PUT_COMPONENT_NETWORK) {
        putComponent_1.PutComponentOperation.write(localEntityId, message.timestamp, message.componentId, message.data, buffer);
    }
    else if (message.type === types_1.CrdtMessageType.DELETE_COMPONENT_NETWORK) {
        deleteComponent_1.DeleteComponent.write(localEntityId, message.componentId, message.timestamp, buffer);
    }
    else if (message.type === types_1.CrdtMessageType.DELETE_ENTITY_NETWORK) {
        deleteEntity_1.DeleteEntity.write(localEntityId, buffer);
    }
    destinationBuffer.writeBuffer(buffer.buffer().subarray(offset, buffer.currentWriteOffset()), false);
}
exports.networkMessageToLocal = networkMessageToLocal;
/* istanbul ignore next */
function localMessageToNetwork(message, network, buffer, destinationBuffer) {
    const offset = buffer.currentWriteOffset();
    if (message.type === types_1.CrdtMessageType.PUT_COMPONENT) {
        putComponentNetwork_1.PutNetworkComponentOperation.write(network.entityId, message.timestamp, message.componentId, network.networkId, message.data, buffer);
    }
    else if (message.type === types_1.CrdtMessageType.DELETE_COMPONENT) {
        deleteComponentNetwork_1.DeleteComponentNetwork.write(network.entityId, message.componentId, message.timestamp, network.networkId, buffer);
    }
    else if (message.type === types_1.CrdtMessageType.DELETE_ENTITY) {
        deleteEntityNetwork_1.DeleteEntityNetwork.write(network.entityId, network.networkId, buffer);
    }
    destinationBuffer.writeBuffer(buffer.buffer().subarray(offset, buffer.currentWriteOffset()), false);
}
exports.localMessageToNetwork = localMessageToNetwork;
const buffer = new ByteBuffer_1.ReadWriteByteBuffer();
/* istanbul ignore next */
function fixTransformParent(message, transformValue, parent) {
    buffer.resetBuffer();
    let transform = transformValue;
    if (!transform && 'data' in message) {
        transform = Transform_1.TransformSchema.deserialize(new ByteBuffer_1.ReadWriteByteBuffer(message.data));
    }
    if (!transform)
        throw new Error('Invalid parent transform');
    // Generate new transform raw data with the parent
    const newTransform = { ...transform, parent };
    Transform_1.TransformSchema.serialize(newTransform, buffer);
    return buffer.toBinary();
}
exports.fixTransformParent = fixTransformParent;
