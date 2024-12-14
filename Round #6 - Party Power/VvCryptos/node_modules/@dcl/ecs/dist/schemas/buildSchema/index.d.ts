import { ISchema, JsonSchemaExtended } from '../ISchema';
/**
 * Create an ISchema object from the json-schema
 * @param jsonSchema
 * @returns a ISchema or fail for unsupported json-schema
 */
export declare function jsonSchemaToSchema(jsonSchema: JsonSchemaExtended): ISchema<any>;
export declare function mutateValues(jsonSchema: JsonSchemaExtended, value: unknown, mutateFn: (value: unknown, valueType: JsonSchemaExtended) => {
    changed: boolean;
    value?: any;
}): void;
