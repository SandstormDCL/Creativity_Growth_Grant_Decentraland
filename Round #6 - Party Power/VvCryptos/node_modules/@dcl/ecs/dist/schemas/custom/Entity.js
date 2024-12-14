/**
 * @internal
 */
export const EntitySchema = {
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
        serializationType: 'entity'
    }
};
