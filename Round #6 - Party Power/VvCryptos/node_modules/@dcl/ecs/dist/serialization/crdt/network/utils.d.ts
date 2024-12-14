import { Entity } from '../../../engine';
import { ReceiveMessage, TransformType } from '../../../runtime/types';
import { ReceiveNetworkMessage } from '../../../systems/crdt/types';
import { ByteBuffer } from '../../ByteBuffer';
import { INetowrkEntityType } from '../../../components/types';
export declare function isNetworkMessage(message: ReceiveMessage): message is ReceiveNetworkMessage;
export declare function networkMessageToLocal(message: ReceiveNetworkMessage, localEntityId: Entity, buffer: ByteBuffer, destinationBuffer: ByteBuffer): void;
export declare function localMessageToNetwork(message: ReceiveMessage, network: INetowrkEntityType, buffer: ByteBuffer, destinationBuffer: ByteBuffer): void;
export declare function fixTransformParent(message: ReceiveMessage, transformValue?: TransformType, parent?: Entity): Uint8Array;
