"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcsString = exports.FlatString = void 0;
/**
 * @internal
 */
exports.FlatString = {
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
exports.EcsString = exports.FlatString;
