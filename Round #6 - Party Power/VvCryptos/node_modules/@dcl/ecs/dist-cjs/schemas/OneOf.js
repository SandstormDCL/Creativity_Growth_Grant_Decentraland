"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOneOf = void 0;
const IOneOf = (specs) => {
    const specKeys = Object.keys(specs);
    const keyToIndex = specKeys.reduce((dict, key, index) => {
        dict[key] = index;
        return dict;
    }, {});
    const specReflection = specKeys.reduce((specReflection, currentKey) => {
        specReflection[currentKey] = specs[currentKey].jsonSchema;
        return specReflection;
    }, {});
    return {
        serialize({ $case, value }, builder) {
            const _value = keyToIndex[$case.toString()] + 1;
            builder.writeUint8(_value);
            specs[$case].serialize(value, builder);
        },
        deserialize(reader) {
            const $case = specKeys[reader.readInt8() - 1];
            const value = specs[$case].deserialize(reader);
            return { $case, value };
        },
        create() {
            return {};
        },
        jsonSchema: {
            type: 'object',
            properties: specReflection,
            serializationType: 'one-of'
        }
    };
};
exports.IOneOf = IOneOf;
