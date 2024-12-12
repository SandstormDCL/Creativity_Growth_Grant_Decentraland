/**
 * @internal
 */
export const Bool = {
    serialize(value, builder) {
        builder.writeInt8(value ? 1 : 0);
    },
    deserialize(reader) {
        return reader.readInt8() === 1;
    },
    create() {
        return false;
    },
    jsonSchema: {
        type: 'boolean',
        serializationType: 'boolean'
    }
};
