import { Entity } from '../../engine/entity';
import { ByteBuffer } from '../ByteBuffer';
import { DeleteEntityMessage } from './types';
/**
 * @public
 */
export declare namespace DeleteEntity {
    const MESSAGE_HEADER_LENGTH = 4;
    function write(entity: Entity, buf: ByteBuffer): void;
    function read(buf: ByteBuffer): DeleteEntityMessage | null;
}
