"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Float64 = exports.Float32 = void 0;
/**
 * @internal
 */
exports.Float32 = {
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
exports.Float64 = {
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
