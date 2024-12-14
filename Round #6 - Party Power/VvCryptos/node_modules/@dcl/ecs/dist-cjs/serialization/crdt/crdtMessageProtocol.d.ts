import { ByteBuffer } from '../ByteBuffer';
import { CrdtMessageHeader } from './types';
/**
 * @public
 */
export declare namespace CrdtMessageProtocol {
    /**
     * Validate if the message incoming is completed
     * @param buf - ByteBuffer
     */
    function validate(buf: ByteBuffer): boolean;
    /**
     * Get the current header, consuming the bytes involved.
     * @param buf - ByteBuffer
     * @returns header or null if there is no validated message
     */
    function readHeader(buf: ByteBuffer): CrdtMessageHeader | null;
    /**
     * Get the current header, without consuming the bytes involved.
     * @param buf - ByteBuffer
     * @returns header or null if there is no validated message
     */
    function getHeader(buf: ByteBuffer): CrdtMessageHeader | null;
    /**
     * Consume the incoming message without processing it.
     * @param buf - ByteBuffer
     * @returns true in case of success or false if there is no valid message.
     */
    function consumeMessage(buf: ByteBuffer): boolean;
}
