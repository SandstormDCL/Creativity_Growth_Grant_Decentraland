/**
 * @internal
 */
export const Int64 = {
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
export const Int32 = {
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
export const Int16 = {
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
export const Int8 = {
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
