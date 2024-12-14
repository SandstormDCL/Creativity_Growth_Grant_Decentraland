import { Entity } from '../../engine/entity';
import { ByteBuffer } from '../ByteBuffer';
import { DeleteComponentMessage } from './types';
/**
 * @public
 */
export declare namespace DeleteComponent {
    const MESSAGE_HEADER_LENGTH = 12;
    /**
     * Write DeleteComponent message
     */
    function write(entity: Entity, componentId: number, timestamp: number, buf: ByteBuffer): void;
    function read(buf: ByteBuffer): DeleteComponentMessage | null;
}
