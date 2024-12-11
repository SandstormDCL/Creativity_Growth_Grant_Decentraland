/**
 * @internal
 */
export const FlatString = {
    serialize(value, builder) {
        builder.writeUtf8String(value);
    },
    deserialize(reader) {
        return reader.readUtf8String();
    },
    create() {
        return '';
    },
    jsonSchema: {
        type: 'string',
        serializationType: 'utf8-string'
    }
};
/**
 * @internal
 */
export const EcsString = FlatString;
