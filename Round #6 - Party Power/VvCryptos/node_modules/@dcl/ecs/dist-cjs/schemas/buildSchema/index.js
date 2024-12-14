"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutateValues = exports.jsonSchemaToSchema = void 0;
const Array_1 = require("../Array");
const Boolean_1 = require("../basic/Boolean");
const Enum_1 = require("../basic/Enum");
const Float_1 = require("../basic/Float");
const Integer_1 = require("../basic/Integer");
const String_1 = require("../basic/String");
const Color3_1 = require("../custom/Color3");
const Color4_1 = require("../custom/Color4");
const Entity_1 = require("../custom/Entity");
const Quaternion_1 = require("../custom/Quaternion");
const Vector3_1 = require("../custom/Vector3");
const Map_1 = require("../Map");
const OneOf_1 = require("../OneOf");
const Optional_1 = require("../Optional");
const utils_1 = require("./utils");
const primitiveSchemas = {
    [Boolean_1.Bool.jsonSchema.serializationType]: Boolean_1.Bool,
    [String_1.EcsString.jsonSchema.serializationType]: String_1.EcsString,
    [Float_1.Float32.jsonSchema.serializationType]: Float_1.Float32,
    [Float_1.Float64.jsonSchema.serializationType]: Float_1.Float64,
    [Integer_1.Int8.jsonSchema.serializationType]: Integer_1.Int8,
    [Integer_1.Int16.jsonSchema.serializationType]: Integer_1.Int16,
    [Integer_1.Int32.jsonSchema.serializationType]: Integer_1.Int32,
    [Integer_1.Int64.jsonSchema.serializationType]: Integer_1.Int64,
    [Vector3_1.Vector3Schema.jsonSchema.serializationType]: Vector3_1.Vector3Schema,
    [Quaternion_1.QuaternionSchema.jsonSchema.serializationType]: Quaternion_1.QuaternionSchema,
    [Color3_1.Color3Schema.jsonSchema.serializationType]: Color3_1.Color3Schema,
    [Color4_1.Color4Schema.jsonSchema.serializationType]: Color4_1.Color4Schema,
    [Entity_1.EntitySchema.jsonSchema.serializationType]: Entity_1.EntitySchema
};
/**
 * Create an ISchema object from the json-schema
 * @param jsonSchema
 * @returns a ISchema or fail for unsupported json-schema
 */
function jsonSchemaToSchema(jsonSchema) {
    if (primitiveSchemas[jsonSchema.serializationType]) {
        return primitiveSchemas[jsonSchema.serializationType];
    }
    if (jsonSchema.serializationType === 'map') {
        const mapJsonSchema = jsonSchema;
        const spec = {};
        for (const key in mapJsonSchema.properties) {
            spec[key] = jsonSchemaToSchema(mapJsonSchema.properties[key]);
        }
        return (0, Map_1.IMap)(spec);
    }
    if (jsonSchema.serializationType === 'optional') {
        const withItemsJsonSchema = jsonSchema;
        return (0, Optional_1.IOptional)(jsonSchemaToSchema(withItemsJsonSchema.optionalJsonSchema));
    }
    if (jsonSchema.serializationType === 'array') {
        const withItemsJsonSchema = jsonSchema;
        return (0, Array_1.IArray)(jsonSchemaToSchema(withItemsJsonSchema.items));
    }
    if (jsonSchema.serializationType === 'enum-int') {
        const enumJsonSchema = jsonSchema;
        return (0, Enum_1.IntEnum)(enumJsonSchema.enumObject, enumJsonSchema.default);
    }
    if (jsonSchema.serializationType === 'enum-string') {
        const enumJsonSchema = jsonSchema;
        return (0, Enum_1.StringEnum)(enumJsonSchema.enumObject, enumJsonSchema.default);
    }
    if (jsonSchema.serializationType === 'one-of') {
        const oneOfJsonSchema = jsonSchema;
        const spec = {};
        for (const key in oneOfJsonSchema.properties) {
            spec[key] = jsonSchemaToSchema(oneOfJsonSchema.properties[key]);
        }
        return (0, OneOf_1.IOneOf)(spec);
    }
    throw new Error(`${jsonSchema.serializationType} is not supported as reverse schema generation.`);
}
exports.jsonSchemaToSchema = jsonSchemaToSchema;
function mutateValues(jsonSchema, value, mutateFn) {
    if (jsonSchema.serializationType === 'map') {
        const { properties } = jsonSchema;
        const typedValue = value;
        for (const key in properties) {
            const { type, value: mapValue } = (0, utils_1.getTypeAndValue)(properties, typedValue, key);
            if (type.serializationType === 'unknown')
                continue;
            if ((0, utils_1.isCompoundType)(type)) {
                mutateValues(type, mapValue, mutateFn);
            }
            else {
                const newValue = mutateFn(mapValue, type);
                if (newValue.changed) {
                    typedValue[key] = newValue.value;
                }
            }
        }
    }
    else if (jsonSchema.serializationType === 'array') {
        const { items } = jsonSchema;
        const arrayValue = value;
        for (let i = 0, n = arrayValue.length; i < n; i++) {
            const { type, value } = (0, utils_1.getTypeAndValue)({ items: items }, { items: arrayValue[i] }, 'items');
            if ((0, utils_1.isCompoundType)(type)) {
                mutateValues(type, value, mutateFn);
            }
            else {
                const newValue = mutateFn(value, type);
                if (newValue.changed) {
                    arrayValue[i] = newValue.value;
                }
            }
        }
    }
}
exports.mutateValues = mutateValues;
