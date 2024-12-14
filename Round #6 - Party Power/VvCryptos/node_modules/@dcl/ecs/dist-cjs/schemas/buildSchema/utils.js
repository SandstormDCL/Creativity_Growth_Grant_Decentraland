"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTypeAndValue = exports.isCompoundType = exports.getUnknownSchema = exports.isOneOfJsonSchema = exports.isSchemaType = void 0;
const isSchemaType = (value, types) => types.includes(value.serializationType);
exports.isSchemaType = isSchemaType;
const isOneOfJsonSchema = (type) => (0, exports.isSchemaType)(type, ['one-of']);
exports.isOneOfJsonSchema = isOneOfJsonSchema;
const getUnknownSchema = () => ({
    type: { type: 'object', serializationType: 'unknown' },
    value: undefined
});
exports.getUnknownSchema = getUnknownSchema;
const isCompoundType = (type) => (0, exports.isSchemaType)(type, ['array', 'map']);
exports.isCompoundType = isCompoundType;
const getTypeAndValue = (properties, value, key) => {
    const type = properties[key];
    const valueKey = value[key];
    if ((0, exports.isOneOfJsonSchema)(type)) {
        const typedMapValue = valueKey;
        if (!typedMapValue.$case)
            return (0, exports.getUnknownSchema)();
        const propType = type.properties[typedMapValue.$case];
        // transform { $case: string; value: unknown } => { [$case]: value }
        if ((0, exports.isCompoundType)(propType))
            value[key] = { [typedMapValue.$case]: typedMapValue.value };
        return { type: propType, value: typedMapValue.value };
    }
    return { type, value: valueKey };
};
exports.getTypeAndValue = getTypeAndValue;
