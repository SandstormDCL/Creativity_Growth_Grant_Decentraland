import { IArray } from './Array';
import { Bool } from './basic/Boolean';
import { IntEnum as IntEnumSchema, StringEnum as StringEnumSchema } from './basic/Enum';
import { Float32, Float64 } from './basic/Float';
import { Int16, Int32, Int8, Int64 as iInt64 } from './basic/Integer';
import { EcsString } from './basic/String';
import { Color3Schema } from './custom/Color3';
import { Color4Schema } from './custom/Color4';
import { EntitySchema } from './custom/Entity';
import { QuaternionSchema } from './custom/Quaternion';
import { Vector3Schema } from './custom/Vector3';
import { IMap } from './Map';
import { IOptional } from './Optional';
import { IOneOf } from './OneOf';
import { jsonSchemaToSchema, mutateValues } from './buildSchema';
/**
 * @public
 */
export var Schemas;
(function (Schemas) {
    /** @public */
    Schemas.Boolean = Bool;
    /** @public */
    Schemas.String = EcsString;
    /** @public */
    Schemas.Float = Float32;
    /** @public */
    Schemas.Double = Float64;
    /** @public */
    Schemas.Byte = Int8;
    /** @public */
    Schemas.Short = Int16;
    /** @public */
    Schemas.Int = Int32;
    /** @public */
    Schemas.Int64 = iInt64;
    /** @public */
    Schemas.Number = Float32;
    /** @public */
    Schemas.Vector3 = Vector3Schema;
    /** @public */
    Schemas.Quaternion = QuaternionSchema;
    /** @public */
    Schemas.Color3 = Color3Schema;
    /** @public */
    Schemas.Color4 = Color4Schema;
    /** @public */
    Schemas.Entity = EntitySchema;
    /** @public */
    Schemas.EnumNumber = IntEnumSchema;
    /** @public */
    Schemas.EnumString = StringEnumSchema;
    /** @public */
    Schemas.Array = IArray;
    /** @public */
    Schemas.Map = IMap;
    /** @public */
    Schemas.Optional = IOptional;
    /** @public */
    Schemas.OneOf = IOneOf;
    /**
     * @public Create an ISchema object from the json-schema
     * @param jsonSchema
     * @returns a ISchema or fail for unsupported json-schema
     */
    Schemas.fromJson = jsonSchemaToSchema;
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
    Schemas.mutateNestedValues = mutateValues;
})(Schemas || (Schemas = {}));
