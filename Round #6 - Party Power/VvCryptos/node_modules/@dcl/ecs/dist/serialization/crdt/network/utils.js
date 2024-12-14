import { ReadWriteByteBuffer } from '../../ByteBuffer';
import { PutComponentOperation } from '../putComponent';
import { CrdtMessageType } from '../types';
import { DeleteComponent } from '../deleteComponent';
import { DeleteEntity } from '../deleteEntity';
import { PutNetworkComponentOperation } from './putComponentNetwork';
import { DeleteComponentNetwork } from './deleteComponentNetwork';
import { DeleteEntityNetwork } from './deleteEntityNetwork';
import { TransformSchema } from '../../../components/manual/Transform';
/* istanbul ignore next */
export function isNetworkMessage(message) {
    return [
        CrdtMessageType.DELETE_COMPONENT_NETWORK,
        CrdtMessageType.DELETE_ENTITY_NETWORK,
        CrdtMessageType.PUT_COMPONENT_NETWORK
    ].includes(message.type);
}
/* istanbul ignore next */
export function networkMessageToLocal(message, localEntityId, buffer, destinationBuffer) {
    const offset = buffer.currentWriteOffset();
    if (message.type === CrdtMessageType.PUT_COMPONENT_NETWORK) {
        PutComponentOperation.write(localEntityId, message.timestamp, message.componentId, message.data, buffer);
    }
    else if (message.type === CrdtMessageType.DELETE_COMPONENT_NETWORK) {
        DeleteComponent.write(localEntityId, message.componentId, message.timestamp, buffer);
    }
    else if (message.type === CrdtMessageType.DELETE_ENTITY_NETWORK) {
        DeleteEntity.write(localEntityId, buffer);
    }
    destinationBuffer.writeBuffer(buffer.buffer().subarray(offset, buffer.currentWriteOffset()), false);
}
/* istanbul ignore next */
export function localMessageToNetwork(message, network, buffer, destinationBuffer) {
    const offset = buffer.currentWriteOffset();
    if (message.type === CrdtMessageType.PUT_COMPONENT) {
        PutNetworkComponentOperation.write(network.entityId, message.timestamp, message.componentId, network.networkId, message.data, buffer);
    }
    else if (message.type === CrdtMessageType.DELETE_COMPONENT) {
        DeleteComponentNetwork.write(network.entityId, message.componentId, message.timestamp, network.networkId, buffer);
    }
    else if (message.type === CrdtMessageType.DELETE_ENTITY) {
        DeleteEntityNetwork.write(network.entityId, network.networkId, buffer);
    }
    destinationBuffer.writeBuffer(buffer.buffer().subarray(offset, buffer.currentWriteOffset()), false);
}
const buffer = new ReadWriteByteBuffer();
/* istanbul ignore next */
export function fixTransformParent(message, transformValue, parent) {
    buffer.resetBuffer();
    let transform = transformValue;
    if (!transform && 'data' in message) {
        transform = TransformSchema.deserialize(new ReadWriteByteBuffer(message.data));
    }
    if (!transform)
        throw new Error('Invalid parent transform');
    // Generate new transform raw data with the parent
    const newTransform = { ...transform, parent };
    TransformSchema.serialize(newTransform, buffer);
    return buffer.toBinary();
}
