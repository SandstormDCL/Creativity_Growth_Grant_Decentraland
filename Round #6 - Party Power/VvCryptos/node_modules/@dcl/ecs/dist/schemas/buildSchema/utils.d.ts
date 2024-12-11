import { JsonSchemaExtended } from '../ISchema';
import { UnknownSchema } from './types';
export declare const isSchemaType: (value: JsonSchemaExtended, types: JsonSchemaExtended['serializationType'][]) => boolean;
export declare const isOneOfJsonSchema: (type: JsonSchemaExtended) => type is {
    type: "string" | "number" | "boolean" | "object" | "integer" | "array";
    serializationType: "boolean" | "map" | "array" | "enum-int" | "enum-string" | "int8" | "int16" | "int32" | "int64" | "float32" | "float64" | "vector3" | "color3" | "quaternion" | "color4" | "optional" | "entity" | "utf8-string" | "protocol-buffer" | "transform" | "one-of" | "unknown";
} & import("../ISchema").JsonMap & {
    properties: Record<string, JsonSchemaExtended>;
};
export declare const getUnknownSchema: () => UnknownSchema;
export declare const isCompoundType: (type: JsonSchemaExtended) => boolean;
export declare const getTypeAndValue: (properties: Record<string, JsonSchemaExtended>, value: Record<string, unknown>, key: string) => UnknownSchema;
