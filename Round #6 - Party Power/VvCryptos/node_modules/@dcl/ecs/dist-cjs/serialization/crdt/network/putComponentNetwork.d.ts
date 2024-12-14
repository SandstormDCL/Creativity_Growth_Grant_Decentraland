import { Entity } from '../../../engine/entity';
import { ByteBuffer } from '../../ByteBuffer';
import { PutNetworkComponentMessage } from '../types';
/**
 * @public
 */
export declare namespace PutNetworkComponentOperation {
    const MESSAGE_HEADER_LENGTH = 20;
    /**
     * Call this function for an optimal writing data passing the ByteBuffer
     *  already allocated
     */
    function write(entity: Entity, timestamp: number, componentId: number, networkId: number, data: Uint8Array, buf: ByteBuffer): void;
    function read(buf: ByteBuffer): PutNetworkComponentMessage | null;
}
