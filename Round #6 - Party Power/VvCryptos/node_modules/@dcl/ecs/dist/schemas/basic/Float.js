/**
 * @internal
 */
export const Float32 = {
    serialize(value, builder) {
        builder.writeFloat32(value);
    },
    deserialize(reader) {
        return reader.readFloat32();
    },
    create() {
        return 0.0;
    },
    jsonSchema: {
        type: 'number',
        serializationType: 'float32'
    }
};
/**
 * @internal
 */
export const Float64 = {
    serialize(value, builder) {
        builder.writeFloat64(value);
    },
    deserialize(reader) {
        return reader.readFloat64();
    },
    create() {
        return 0.0;
    },
    jsonSchema: {
        type: 'number',
        serializationType: 'float64'
    }
};
