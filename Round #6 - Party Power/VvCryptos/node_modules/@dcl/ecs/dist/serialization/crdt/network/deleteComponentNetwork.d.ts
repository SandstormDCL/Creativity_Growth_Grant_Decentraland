import { Entity } from '../../../engine/entity';
import { ByteBuffer } from '../../ByteBuffer';
import { DeleteComponentNetworkMessage } from '../types';
/**
 * @public
 */
export declare namespace DeleteComponentNetwork {
    const MESSAGE_HEADER_LENGTH = 16;
    /**
     * Write DeleteComponent message
     */
    function write(entity: Entity, componentId: number, timestamp: number, networkId: number, buf: ByteBuffer): void;
    function read(buf: ByteBuffer): DeleteComponentNetworkMessage | null;
}
