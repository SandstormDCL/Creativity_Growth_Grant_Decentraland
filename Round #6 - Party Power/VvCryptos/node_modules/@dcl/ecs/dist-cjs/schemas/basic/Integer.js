"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Int8 = exports.Int16 = exports.Int32 = exports.Int64 = void 0;
/**
 * @internal
 */
exports.Int64 = {
    serialize(value, builder) {
        builder.writeInt64(BigInt(value));
    },
    deserialize(reader) {
        return Number(reader.readInt64());
    },
    create() {
        return 0;
    },
    jsonSchema: {
        type: 'integer',
        serializationType: 'int64'
    }
};
/**
 * @internal
 */
exports.Int32 = {
    serialize(value, builder) {
        builder.writeInt32(value);
    },
    deserialize(reader) {
        return reader.readInt32();
    },
    create() {
        return 0;
    },
    jsonSchema: {
        type: 'integer',
        serializationType: 'int32'
    }
};
/**
 * @public
 */
exports.Int16 = {
    serialize(value, builder) {
        builder.writeInt16(value);
    },
    deserialize(reader) {
        return reader.readInt16();
    },
    create() {
        return 0;
    },
    jsonSchema: {
        type: 'integer',
        serializationType: 'int16'
    }
};
/**
 * @public
 */
exports.Int8 = {
    serialize(value, builder) {
        builder.writeInt8(value);
    },
    deserialize(reader) {
        return reader.readInt8();
    },
    create() {
        return 0;
    },
    jsonSchema: {
        type: 'integer',
        serializationType: 'int8'
    }
};
