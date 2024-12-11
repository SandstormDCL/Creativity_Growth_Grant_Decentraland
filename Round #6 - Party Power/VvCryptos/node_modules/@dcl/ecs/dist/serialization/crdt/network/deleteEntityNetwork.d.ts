import { Entity } from '../../../engine/entity';
import { ByteBuffer } from '../../ByteBuffer';
import { DeleteEntityNetworkMessage } from '../types';
/**
 * @public
 */
export declare namespace DeleteEntityNetwork {
    const MESSAGE_HEADER_LENGTH = 8;
    function write(entity: Entity, networkId: number, buf: ByteBuffer): void;
    function read(buf: ByteBuffer): DeleteEntityNetworkMessage | null;
}
