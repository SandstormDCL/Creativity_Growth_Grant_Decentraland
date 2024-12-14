/**
 * @internal
 */
export const IMap = (spec, defaultValue) => {
    const specReflection = Object.keys(spec).reduce((specReflection, currentKey) => {
        specReflection[currentKey] = spec[currentKey].jsonSchema;
        return specReflection;
    }, {});
    return {
        serialize(value, builder) {
            for (const key in spec) {
                spec[key].serialize(value[key], builder);
            }
        },
        deserialize(reader) {
            const newValue = {};
            for (const key in spec) {
                ;
                newValue[key] = spec[key].deserialize(reader);
            }
            return newValue;
        },
        create() {
            const newValue = {};
            for (const key in spec) {
                ;
                newValue[key] = spec[key].create();
            }
            return { ...newValue, ...defaultValue };
        },
        extend: (base) => {
            const newValue = {};
            for (const key in spec) {
                ;
                newValue[key] = spec[key].create();
            }
            return { ...newValue, ...defaultValue, ...base };
        },
        jsonSchema: {
            type: 'object',
            properties: specReflection,
            serializationType: 'map'
        }
    };
};
