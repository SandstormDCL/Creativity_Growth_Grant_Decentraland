/**
 * @internal
 */
export const Color3Schema = {
    serialize(value, builder) {
        builder.writeFloat32(value.r);
        builder.writeFloat32(value.g);
        builder.writeFloat32(value.b);
    },
    deserialize(reader) {
        return {
            r: reader.readFloat32(),
            g: reader.readFloat32(),
            b: reader.readFloat32()
        };
    },
    create() {
        return { r: 0, g: 0, b: 0 };
    },
    jsonSchema: {
        type: 'object',
        properties: {
            r: { type: 'number' },
            g: { type: 'number' },
            b: { type: 'number' }
        },
        serializationType: 'color3'
    }
};
