"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListValue = exports.Value = exports.Struct_FieldsEntry = exports.Struct = exports.nullValueToJSON = exports.nullValueFromJSON = exports.NullValue = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const protobufPackageSarasa = "google.protobuf";
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 *  The JSON representation for `NullValue` is JSON `null`.
 */
/**
 * @public
 */
var NullValue;
(function (NullValue) {
    /** NULL_VALUE - Null value. */
    NullValue[NullValue["NULL_VALUE"] = 0] = "NULL_VALUE";
})(NullValue = exports.NullValue || (exports.NullValue = {}));
/**
 * @public
 */
function nullValueFromJSON(object) {
    switch (object) {
        case 0:
        case "NULL_VALUE":
            return 0 /* NullValue.NULL_VALUE */;
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum NullValue");
    }
}
exports.nullValueFromJSON = nullValueFromJSON;
/**
 * @public
 */
function nullValueToJSON(object) {
    switch (object) {
        case 0 /* NullValue.NULL_VALUE */:
            return "NULL_VALUE";
        default:
            throw new tsProtoGlobalThis.Error("Unrecognized enum value " + object + " for enum NullValue");
    }
}
exports.nullValueToJSON = nullValueToJSON;
function createBaseStruct() {
    return { fields: new Map() };
}
/**
 * @public
 */
var Struct;
(function (Struct) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        message.fields.forEach((value, key) => {
            if (value !== undefined) {
                Struct_FieldsEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
            }
        });
        return writer;
    }
    Struct.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStruct();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    const entry1 = Struct_FieldsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.fields.set(entry1.key, entry1.value);
                    }
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    Struct.decode = decode;
    function fromJSON(object) {
        return {
            fields: isObject(object.fields)
                ? Object.entries(object.fields).reduce((acc, [key, value]) => {
                    acc.set(key, value);
                    return acc;
                }, new Map())
                : new Map(),
        };
    }
    Struct.fromJSON = fromJSON;
    function toJSON(message) {
        const obj = {};
        obj.fields = {};
        if (message.fields) {
            message.fields.forEach((v, k) => {
                obj.fields[k] = v;
            });
        }
        return obj;
    }
    Struct.toJSON = toJSON;
    function wrap(object) {
        const struct = createBaseStruct();
        if (object !== undefined) {
            Object.keys(object).forEach((key) => {
                struct.fields.set(key, object[key]);
            });
        }
        return struct;
    }
    Struct.wrap = wrap;
    function unwrap(message) {
        const object = {};
        [...message.fields.keys()].forEach((key) => {
            object[key] = message.fields.get(key);
        });
        return object;
    }
    Struct.unwrap = unwrap;
})(Struct = exports.Struct || (exports.Struct = {}));
function createBaseStruct_FieldsEntry() {
    return { key: "", value: undefined };
}
/**
 * @public
 */
var Struct_FieldsEntry;
(function (Struct_FieldsEntry) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            Value.encode(Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    }
    Struct_FieldsEntry.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStruct_FieldsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    Struct_FieldsEntry.decode = decode;
    function fromJSON(object) {
        return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object?.value) ? object.value : undefined };
    }
    Struct_FieldsEntry.fromJSON = fromJSON;
    function toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    }
    Struct_FieldsEntry.toJSON = toJSON;
})(Struct_FieldsEntry = exports.Struct_FieldsEntry || (exports.Struct_FieldsEntry = {}));
function createBaseValue() {
    return { kind: undefined };
}
/**
 * @public
 */
var Value;
(function (Value) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        switch (message.kind?.$case) {
            case "nullValue":
                writer.uint32(8).int32(message.kind.nullValue);
                break;
            case "numberValue":
                writer.uint32(17).double(message.kind.numberValue);
                break;
            case "stringValue":
                writer.uint32(26).string(message.kind.stringValue);
                break;
            case "boolValue":
                writer.uint32(32).bool(message.kind.boolValue);
                break;
            case "structValue":
                Struct.encode(Struct.wrap(message.kind.structValue), writer.uint32(42).fork()).ldelim();
                break;
            case "listValue":
                ListValue.encode(ListValue.wrap(message.kind.listValue), writer.uint32(50).fork()).ldelim();
                break;
        }
        return writer;
    }
    Value.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.kind = { $case: "nullValue", nullValue: reader.int32() };
                    continue;
                case 2:
                    if (tag !== 17) {
                        break;
                    }
                    message.kind = { $case: "numberValue", numberValue: reader.double() };
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.kind = { $case: "stringValue", stringValue: reader.string() };
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.kind = { $case: "boolValue", boolValue: reader.bool() };
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.kind = { $case: "structValue", structValue: Struct.unwrap(Struct.decode(reader, reader.uint32())) };
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.kind = { $case: "listValue", listValue: ListValue.unwrap(ListValue.decode(reader, reader.uint32())) };
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    Value.decode = decode;
    function fromJSON(object) {
        return {
            kind: isSet(object.nullValue)
                ? { $case: "nullValue", nullValue: nullValueFromJSON(object.nullValue) }
                : isSet(object.numberValue)
                    ? { $case: "numberValue", numberValue: Number(object.numberValue) }
                    : isSet(object.stringValue)
                        ? { $case: "stringValue", stringValue: String(object.stringValue) }
                        : isSet(object.boolValue)
                            ? { $case: "boolValue", boolValue: Boolean(object.boolValue) }
                            : isSet(object.structValue)
                                ? { $case: "structValue", structValue: object.structValue }
                                : isSet(object.listValue)
                                    ? { $case: "listValue", listValue: [...object.listValue] }
                                    : undefined,
        };
    }
    Value.fromJSON = fromJSON;
    function toJSON(message) {
        const obj = {};
        message.kind?.$case === "nullValue" &&
            (obj.nullValue = message.kind?.nullValue !== undefined ? nullValueToJSON(message.kind?.nullValue) : undefined);
        message.kind?.$case === "numberValue" && (obj.numberValue = message.kind?.numberValue);
        message.kind?.$case === "stringValue" && (obj.stringValue = message.kind?.stringValue);
        message.kind?.$case === "boolValue" && (obj.boolValue = message.kind?.boolValue);
        message.kind?.$case === "structValue" && (obj.structValue = message.kind?.structValue);
        message.kind?.$case === "listValue" && (obj.listValue = message.kind?.listValue);
        return obj;
    }
    Value.toJSON = toJSON;
    function wrap(value) {
        const result = createBaseValue();
        if (value === null) {
            result.kind = { $case: "nullValue", nullValue: 0 /* NullValue.NULL_VALUE */ };
        }
        else if (typeof value === "boolean") {
            result.kind = { $case: "boolValue", boolValue: value };
        }
        else if (typeof value === "number") {
            result.kind = { $case: "numberValue", numberValue: value };
        }
        else if (typeof value === "string") {
            result.kind = { $case: "stringValue", stringValue: value };
        }
        else if (Array.isArray(value)) {
            result.kind = { $case: "listValue", listValue: value };
        }
        else if (typeof value === "object") {
            result.kind = { $case: "structValue", structValue: value };
        }
        else if (typeof value !== "undefined") {
            throw new Error("Unsupported any value type: " + typeof value);
        }
        return result;
    }
    Value.wrap = wrap;
    function unwrap(message) {
        if (message.kind?.$case === "nullValue") {
            return null;
        }
        else if (message.kind?.$case === "numberValue") {
            return message.kind?.numberValue;
        }
        else if (message.kind?.$case === "stringValue") {
            return message.kind?.stringValue;
        }
        else if (message.kind?.$case === "boolValue") {
            return message.kind?.boolValue;
        }
        else if (message.kind?.$case === "structValue") {
            return message.kind?.structValue;
        }
        else if (message.kind?.$case === "listValue") {
            return message.kind?.listValue;
        }
        else {
            return undefined;
        }
    }
    Value.unwrap = unwrap;
})(Value = exports.Value || (exports.Value = {}));
function createBaseListValue() {
    return { values: [] };
}
/**
 * @public
 */
var ListValue;
(function (ListValue) {
    function encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.values) {
            Value.encode(Value.wrap(v), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    }
    ListValue.encode = encode;
    function decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.values.push(Value.unwrap(Value.decode(reader, reader.uint32())));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    ListValue.decode = decode;
    function fromJSON(object) {
        return { values: Array.isArray(object?.values) ? [...object.values] : [] };
    }
    ListValue.fromJSON = fromJSON;
    function toJSON(message) {
        const obj = {};
        if (message.values) {
            obj.values = message.values.map((e) => e);
        }
        else {
            obj.values = [];
        }
        return obj;
    }
    ListValue.toJSON = toJSON;
    function wrap(array) {
        const result = createBaseListValue();
        result.values = array ?? [];
        return result;
    }
    ListValue.wrap = wrap;
    function unwrap(message) {
        if (message?.hasOwnProperty("values") && Array.isArray(message.values)) {
            return message.values;
        }
        else {
            return message;
        }
    }
    ListValue.unwrap = unwrap;
})(ListValue = exports.ListValue || (exports.ListValue = {}));
const tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
