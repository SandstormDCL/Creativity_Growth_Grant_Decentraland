"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitySchema = void 0;
/**
 * @internal
 */
exports.EntitySchema = {
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
