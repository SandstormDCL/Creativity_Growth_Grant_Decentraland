var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ReadWriteByteBuffer_instances, _ReadWriteByteBuffer_woAdd, _ReadWriteByteBuffer_roAdd;
import * as utf8 from '@protobufjs/utf8';
/**
 * Take the max between currentSize and intendedSize and then plus 1024. Then,
 *  find the next nearer multiple of 1024.
 * @param currentSize - number
 * @param intendedSize - number
 * @returns the calculated number
 */
function getNextSize(currentSize, intendedSize) {
    const minNewSize = Math.max(currentSize, intendedSize) + 1024;
    return Math.ceil(minNewSize / 1024) * 1024;
}
const defaultInitialCapacity = 10240;
/**
 * ByteBuffer is a wrapper of DataView which also adds a read and write offset.
 *  Also in a write operation it resizes the buffer is being used if it needs.
 *
 * - Use read and write function to generate or consume data.
 * - Use set and get only if you are sure that you're doing.
 *
 * It always passes littleEndian param as true
 */
export class ReadWriteByteBuffer {
    /**
     * @param buffer - The initial buffer, provide a buffer if you need to set "initial capacity"
     * @param readingOffset - Set the cursor where begins to read. Default 0
     * @param writingOffset - Set the cursor to not start writing from the begin of it. Defaults to the buffer size
     */
    constructor(buffer, readingOffset, writingOffset) {
        _ReadWriteByteBuffer_instances.add(this);
        this._buffer = buffer || new Uint8Array(defaultInitialCapacity);
        this.view = new DataView(this._buffer.buffer, this._buffer.byteOffset);
        this.woffset = writingOffset ?? (buffer ? this._buffer.length : null) ?? 0;
        this.roffset = readingOffset ?? 0;
    }
    buffer() {
        return this._buffer;
    }
    bufferLength() {
        return this._buffer.length;
    }
    resetBuffer() {
        this.roffset = 0;
        this.woffset = 0;
    }
    currentReadOffset() {
        return this.roffset;
    }
    currentWriteOffset() {
        return this.woffset;
    }
    incrementReadOffset(amount) {
        return __classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_roAdd).call(this, amount);
    }
    remainingBytes() {
        return this.woffset - this.roffset;
    }
    readFloat32() {
        return this.view.getFloat32(__classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_roAdd).call(this, 4), true); // littleEndian = true
    }
    readFloat64() {
        return this.view.getFloat64(__classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_roAdd).call(this, 8), true); // littleEndian = true
    }
    readInt8() {
        return this.view.getInt8(__classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_roAdd).call(this, 1));
    }
    readInt16() {
        return this.view.getInt16(__classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_roAdd).call(this, 2), true); // littleEndian = true
    }
    readInt32() {
        return this.view.getInt32(__classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_roAdd).call(this, 4), true); // littleEndian = true
    }
    readInt64() {
        return this.view.getBigInt64(__classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_roAdd).call(this, 8), true); // littleEndian = true
    }
    readUint8() {
        return this.view.getUint8(__classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_roAdd).call(this, 1));
    }
    readUint16() {
        return this.view.getUint16(__classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_roAdd).call(this, 2), true); // littleEndian = true
    }
    readUint32() {
        return this.view.getUint32(__classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_roAdd).call(this, 4), true); // littleEndian = true
    }
    readUint64() {
        return this.view.getBigUint64(__classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_roAdd).call(this, 8), true); // littleEndian = true
    }
    readBuffer() {
        const length = this.view.getUint32(__classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_roAdd).call(this, 4), true); // littleEndian = true
        return this._buffer.subarray(__classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_roAdd).call(this, length), __classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_roAdd).call(this, 0));
    }
    readUtf8String() {
        const length = this.view.getUint32(__classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_roAdd).call(this, 4), true); // littleEndian = true
        return utf8.read(this._buffer, __classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_roAdd).call(this, length), __classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_roAdd).call(this, 0));
    }
    incrementWriteOffset(amount) {
        return __classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_woAdd).call(this, amount);
    }
    toBinary() {
        return this._buffer.subarray(0, this.woffset);
    }
    toCopiedBinary() {
        return new Uint8Array(this.toBinary());
    }
    writeBuffer(value, writeLength = true) {
        if (writeLength) {
            this.writeUint32(value.byteLength);
        }
        const o = __classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_woAdd).call(this, value.byteLength);
        this._buffer.set(value, o);
    }
    writeUtf8String(value, writeLength = true) {
        const byteLength = utf8.length(value);
        if (writeLength) {
            this.writeUint32(byteLength);
        }
        const o = __classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_woAdd).call(this, byteLength);
        utf8.write(value, this._buffer, o);
    }
    writeFloat32(value) {
        const o = __classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_woAdd).call(this, 4);
        this.view.setFloat32(o, value, true); // littleEndian = true
    }
    writeFloat64(value) {
        const o = __classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_woAdd).call(this, 8);
        this.view.setFloat64(o, value, true); // littleEndian = true
    }
    writeInt8(value) {
        const o = __classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_woAdd).call(this, 1);
        this.view.setInt8(o, value);
    }
    writeInt16(value) {
        const o = __classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_woAdd).call(this, 2);
        this.view.setInt16(o, value, true); // littleEndian = true
    }
    writeInt32(value) {
        const o = __classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_woAdd).call(this, 4);
        this.view.setInt32(o, value, true); // littleEndian = true
    }
    writeInt64(value) {
        const o = __classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_woAdd).call(this, 8);
        this.view.setBigInt64(o, value, true); // littleEndian = true
    }
    writeUint8(value) {
        const o = __classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_woAdd).call(this, 1);
        this.view.setUint8(o, value);
    }
    writeUint16(value) {
        const o = __classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_woAdd).call(this, 2);
        this.view.setUint16(o, value, true); // littleEndian = true
    }
    writeUint32(value) {
        const o = __classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_woAdd).call(this, 4);
        this.view.setUint32(o, value, true); // littleEndian = true
    }
    writeUint64(value) {
        const o = __classPrivateFieldGet(this, _ReadWriteByteBuffer_instances, "m", _ReadWriteByteBuffer_woAdd).call(this, 8);
        this.view.setBigUint64(o, value, true); // littleEndian = true
    }
    // DataView Proxy
    getFloat32(offset) {
        return this.view.getFloat32(offset, true); // littleEndian = true
    }
    getFloat64(offset) {
        return this.view.getFloat64(offset, true); // littleEndian = true
    }
    getInt8(offset) {
        return this.view.getInt8(offset);
    }
    getInt16(offset) {
        return this.view.getInt16(offset, true); // littleEndian = true
    }
    getInt32(offset) {
        return this.view.getInt32(offset, true); // littleEndian = true
    }
    getInt64(offset) {
        return this.view.getBigInt64(offset, true); // littleEndian = true
    }
    getUint8(offset) {
        return this.view.getUint8(offset);
    }
    getUint16(offset) {
        return this.view.getUint16(offset, true); // littleEndian = true
    }
    getUint32(offset) {
        return this.view.getUint32(offset, true); // littleEndian = true >>> 0
    }
    getUint64(offset) {
        return this.view.getBigUint64(offset, true); // littleEndian = true
    }
    setFloat32(offset, value) {
        this.view.setFloat32(offset, value, true); // littleEndian = true
    }
    setFloat64(offset, value) {
        this.view.setFloat64(offset, value, true); // littleEndian = true
    }
    setInt8(offset, value) {
        this.view.setInt8(offset, value);
    }
    setInt16(offset, value) {
        this.view.setInt16(offset, value, true); // littleEndian = true
    }
    setInt32(offset, value) {
        this.view.setInt32(offset, value, true); // littleEndian = true
    }
    setInt64(offset, value) {
        this.view.setBigInt64(offset, value, true); // littleEndian = true
    }
    setUint8(offset, value) {
        this.view.setUint8(offset, value);
    }
    setUint16(offset, value) {
        this.view.setUint16(offset, value, true); // littleEndian = true
    }
    setUint32(offset, value) {
        this.view.setUint32(offset, value, true); // littleEndian = true
    }
    setUint64(offset, value) {
        this.view.setBigUint64(offset, value, true); // littleEndian = true
    }
}
_ReadWriteByteBuffer_instances = new WeakSet(), _ReadWriteByteBuffer_woAdd = function _ReadWriteByteBuffer_woAdd(amount) {
    if (this.woffset + amount > this._buffer.byteLength) {
        const newsize = getNextSize(this._buffer.byteLength, this.woffset + amount);
        const newBuffer = new Uint8Array(newsize);
        newBuffer.set(this._buffer);
        const oldOffset = this._buffer.byteOffset;
        this._buffer = newBuffer;
        this.view = new DataView(this._buffer.buffer, oldOffset);
    }
    this.woffset += amount;
    return this.woffset - amount;
}, _ReadWriteByteBuffer_roAdd = function _ReadWriteByteBuffer_roAdd(amount) {
    if (this.roffset + amount > this.woffset) {
        throw new Error('Outside of the bounds of writen data.');
    }
    this.roffset += amount;
    return this.roffset - amount;
};
