/**
 * @internal
 */
export const Vector3Schema = {
    serialize(value, builder) {
        builder.writeFloat32(value.x);
        builder.writeFloat32(value.y);
        builder.writeFloat32(value.z);
    },
    deserialize(reader) {
        return {
            x: reader.readFloat32(),
            y: reader.readFloat32(),
            z: reader.readFloat32()
        };
    },
    create() {
        return { x: 0, y: 0, z: 0 };
    },
    jsonSchema: {
        type: 'object',
        properties: {
            x: { type: 'number' },
            y: { type: 'number' },
            z: { type: 'number' },
            w: { type: 'number' }
        },
        serializationType: 'vector3'
    }
};
