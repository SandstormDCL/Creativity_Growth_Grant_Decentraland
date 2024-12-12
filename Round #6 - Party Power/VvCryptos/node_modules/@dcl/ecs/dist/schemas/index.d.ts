import { Entity } from '../engine';
import { Color3Type } from './custom/Color3';
import { Color4Type } from './custom/Color4';
import { QuaternionType } from './custom/Quaternion';
import { Vector3Type } from './custom/Vector3';
import { ISchema, JsonSchemaExtended, JsonArray, JsonMap, JsonPrimitive } from './ISchema';
export { QuaternionType, Vector3Type, ISchema, Color3Type, Color4Type, JsonSchemaExtended, JsonArray, JsonMap, JsonPrimitive };
/**
 * @public
 */
export declare namespace Schemas {
    /** @public */
    type SchemaType = ISchema;
    /** @public */
    const Boolean: ISchema<boolean>;
    /** @public */
    const String: ISchema<string>;
    /** @public */
    const Float: ISchema<number>;
    /** @public */
    const Double: ISchema<number>;
    /** @public */
    const Byte: ISchema<number>;
    /** @public */
    const Short: ISchema<number>;
    /** @public */
    const Int: ISchema<number>;
    /** @public */
    const Int64: ISchema<number>;
    /** @public */
    const Number: ISchema<number>;
    /** @public */
    const Vector3: ISchema<Vector3Type>;
    /** @public */
    const Quaternion: ISchema<QuaternionType>;
    /** @public */
    const Color3: ISchema<Color3Type>;
    /** @public */
    const Color4: ISchema<Color4Type>;
    /** @public */
    const Entity: ISchema<Entity>;
    /** @public */
    const EnumNumber: <T>(enumObject: Record<any, any>, defaultValue: T) => ISchema<T>;
    /** @public */
    const EnumString: <T>(enumObject: Record<any, any>, defaultValue: T) => ISchema<T>;
    /** @public */
    const Array: <T>(type: ISchema<T>) => ISchema<T[]>;
    /** @public */
    const Map: <T extends import("./Map").Spec>(spec: T, defaultValue?: Partial<import("./Map").MapResult<T>> | undefined) => ISchema<import("./Map").MapResult<T>>;
    /** @public */
    const Optional: <T>(spec: ISchema<T>) => ISchema<T | undefined>;
    /** @public */
    const OneOf: <T extends import("./Map").Spec>(specs: T) => ISchema<{ [K in keyof T]: {
        readonly $case: K;
        readonly value: ReturnType<T[K]["deserialize"]>;
    }; }[keyof T]>;
    /**
     * @public Create an ISchema object from the json-schema
     * @param jsonSchema
     * @returns a ISchema or fail for unsupported json-schema
     */
    const fromJson: (json: JsonSchemaExtended) => ISchema<unknown>;
    /**
     * @public
     *
     * Traverses and mutates values in a JSON schema-based structure, applying the given mutation function to each value.
     * The function is designed to work with nested maps and arrays, recursively processing each element.
     *
     * @param jsonSchema - The JSON schema object that describes the structure of the value.
     *                   It must have a serializationType of 'map', 'array', or other custom types like 'entity'.
     * @param value - The value to be mutated, which should conform to the provided JSON schema.
     * @param mutateFn - A function that takes a value and its corresponding valueType (JsonSchemaExtended) as arguments
     *                   and returns a tuple [boolean, any]. The boolean indicates whether the mutation should be applied,
     *                   and the second element is the mutated value.
     */
    const mutateNestedValues: (jsonSchema: JsonSchemaExtended, value: unknown, mutateFn: (value: unknown, valueType: JsonSchemaExtended) => {
        changed: boolean;
        value?: any;
    }) => void;
}
