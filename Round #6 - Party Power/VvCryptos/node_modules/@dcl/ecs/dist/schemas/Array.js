/**
 * @internal
 */
export const IArray = (type) => {
    return {
        serialize(value, builder) {
            builder.writeUint32(value.length);
            for (const item of value) {
                type.serialize(item, builder);
            }
        },
        deserialize(reader) {
            const newArray = [];
            const length = reader.readUint32();
            for (let index = 0; index < length; index++) {
                newArray.push(type.deserialize(reader));
            }
            return newArray;
        },
        create() {
            return [];
        },
        jsonSchema: {
            type: 'array',
            items: type.jsonSchema,
            serializationType: 'array'
        }
    };
};
