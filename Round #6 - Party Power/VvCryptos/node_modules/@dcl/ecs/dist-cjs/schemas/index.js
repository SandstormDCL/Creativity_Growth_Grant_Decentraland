"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schemas = void 0;
const Array_1 = require("./Array");
const Boolean_1 = require("./basic/Boolean");
const Enum_1 = require("./basic/Enum");
const Float_1 = require("./basic/Float");
const Integer_1 = require("./basic/Integer");
const String_1 = require("./basic/String");
const Color3_1 = require("./custom/Color3");
const Color4_1 = require("./custom/Color4");
const Entity_1 = require("./custom/Entity");
const Quaternion_1 = require("./custom/Quaternion");
const Vector3_1 = require("./custom/Vector3");
const Map_1 = require("./Map");
const Optional_1 = require("./Optional");
const OneOf_1 = require("./OneOf");
const buildSchema_1 = require("./buildSchema");
/**
 * @public
 */
var Schemas;
(function (Schemas) {
    /** @public */
    Schemas.Boolean = Boolean_1.Bool;
    /** @public */
    Schemas.String = String_1.EcsString;
    /** @public */
    Schemas.Float = Float_1.Float32;
    /** @public */
    Schemas.Double = Float_1.Float64;
    /** @public */
    Schemas.Byte = Integer_1.Int8;
    /** @public */
    Schemas.Short = Integer_1.Int16;
    /** @public */
    Schemas.Int = Integer_1.Int32;
    /** @public */
    Schemas.Int64 = Integer_1.Int64;
    /** @public */
    Schemas.Number = Float_1.Float32;
    /** @public */
    Schemas.Vector3 = Vector3_1.Vector3Schema;
    /** @public */
    Schemas.Quaternion = Quaternion_1.QuaternionSchema;
    /** @public */
    Schemas.Color3 = Color3_1.Color3Schema;
    /** @public */
    Schemas.Color4 = Color4_1.Color4Schema;
    /** @public */
    Schemas.Entity = Entity_1.EntitySchema;
    /** @public */
    Schemas.EnumNumber = Enum_1.IntEnum;
    /** @public */
    Schemas.EnumString = Enum_1.StringEnum;
    /** @public */
    Schemas.Array = Array_1.IArray;
    /** @public */
    Schemas.Map = Map_1.IMap;
    /** @public */
    Schemas.Optional = Optional_1.IOptional;
    /** @public */
    Schemas.OneOf = OneOf_1.IOneOf;
    /**
     * @public Create an ISchema object from the json-schema
     * @param jsonSchema
     * @returns a ISchema or fail for unsupported json-schema
     */
    Schemas.fromJson = buildSchema_1.jsonSchemaToSchema;
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
    Schemas.mutateNestedValues = buildSchema_1.mutateValues;
})(Schemas = exports.Schemas || (exports.Schemas = {}));
