import _m0 from "protobufjs/minimal";
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 *  The JSON representation for `NullValue` is JSON `null`.
 */
/**
 * @public
 */
export declare const enum NullValue {
    /** NULL_VALUE - Null value. */
    NULL_VALUE = 0
}
/**
 * @public
 */
export declare function nullValueFromJSON(object: any): NullValue;
/**
 * @public
 */
export declare function nullValueToJSON(object: NullValue): string;
/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 *
 * The JSON representation for `Struct` is JSON object.
 */
/**
 * @public
 */
export interface Struct {
    /** Unordered map of dynamically typed values. */
    fields: Map<string, any | undefined>;
}
/**
 * @public
 */
export interface Struct_FieldsEntry {
    key: string;
    value: any | undefined;
}
/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of these
 * variants. Absence of any variant indicates an error.
 *
 * The JSON representation for `Value` is JSON value.
 */
/**
 * @public
 */
export interface Value {
    kind?: {
        $case: "nullValue";
        nullValue: NullValue;
    } | {
        $case: "numberValue";
        numberValue: number;
    } | {
        $case: "stringValue";
        stringValue: string;
    } | {
        $case: "boolValue";
        boolValue: boolean;
    } | {
        $case: "structValue";
        structValue: {
            [key: string]: any;
        } | undefined;
    } | {
        $case: "listValue";
        listValue: Array<any> | undefined;
    } | undefined;
}
/**
 * `ListValue` is a wrapper around a repeated field of values.
 *
 * The JSON representation for `ListValue` is JSON array.
 */
/**
 * @public
 */
export interface ListValue {
    /** Repeated field of dynamically typed values. */
    values: any[];
}
/**
 * @public
 */
export declare namespace Struct {
    function encode(message: Struct, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): Struct;
    function fromJSON(object: any): Struct;
    function toJSON(message: Struct): unknown;
    function wrap(object: {
        [key: string]: any;
    } | undefined): Struct;
    function unwrap(message: Struct): {
        [key: string]: any;
    };
}
/**
 * @public
 */
export declare namespace Struct_FieldsEntry {
    function encode(message: Struct_FieldsEntry, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): Struct_FieldsEntry;
    function fromJSON(object: any): Struct_FieldsEntry;
    function toJSON(message: Struct_FieldsEntry): unknown;
}
/**
 * @public
 */
export declare namespace Value {
    function encode(message: Value, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): Value;
    function fromJSON(object: any): Value;
    function toJSON(message: Value): unknown;
    function wrap(value: any): Value;
    function unwrap(message: Value): string | number | boolean | Object | null | Array<any> | undefined;
}
/**
 * @public
 */
export declare namespace ListValue {
    function encode(message: ListValue, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): ListValue;
    function fromJSON(object: any): ListValue;
    function toJSON(message: ListValue): unknown;
    function wrap(array: Array<any> | undefined): ListValue;
    function unwrap(message: ListValue): Array<any>;
}
