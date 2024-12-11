export const isSchemaType = (value, types) => types.includes(value.serializationType);
export const isOneOfJsonSchema = (type) => isSchemaType(type, ['one-of']);
export const getUnknownSchema = () => ({
    type: { type: 'object', serializationType: 'unknown' },
    value: undefined
});
export const isCompoundType = (type) => isSchemaType(type, ['array', 'map']);
export const getTypeAndValue = (properties, value, key) => {
    const type = properties[key];
    const valueKey = value[key];
    if (isOneOfJsonSchema(type)) {
        const typedMapValue = valueKey;
        if (!typedMapValue.$case)
            return getUnknownSchema();
        const propType = type.properties[typedMapValue.$case];
        // transform { $case: string; value: unknown } => { [$case]: value }
        if (isCompoundType(propType))
            value[key] = { [typedMapValue.$case]: typedMapValue.value };
        return { type: propType, value: typedMapValue.value };
    }
    return { type, value: valueKey };
};
