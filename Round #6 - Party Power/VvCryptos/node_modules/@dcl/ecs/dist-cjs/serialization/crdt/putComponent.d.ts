import { Entity } from '../../engine/entity';
import { ByteBuffer } from '../ByteBuffer';
import { PutComponentMessage } from './types';
/**
 * @public
 */
export declare namespace PutComponentOperation {
    const MESSAGE_HEADER_LENGTH = 16;
    /**
     * Call this function for an optimal writing data passing the ByteBuffer
     *  already allocated
     */
    function write(entity: Entity, timestamp: number, componentId: number, data: Uint8Array, buf: ByteBuffer): void;
    function read(buf: ByteBuffer): PutComponentMessage | null;
}
