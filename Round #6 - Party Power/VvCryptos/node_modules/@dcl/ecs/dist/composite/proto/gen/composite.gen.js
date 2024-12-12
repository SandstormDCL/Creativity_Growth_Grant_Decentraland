/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Value } from "./google/protobuf/struct.gen";
const protobufPackageSarasa = "";
function createBaseComponentData() {
    return { data: undefined };
}
/**
 * @public
 */
export var ComponentData;
(function (ComponentData) {
    function encode(message, writer = _m0.Writer.create()) {
        switch (message.data?.$case) {
            case "json":
                Value.encode(Value.wrap(message.data.json), writer.uint32(10).fork()).ldelim();
                break;
            case "binary":
                writer.uint32(18).bytes(message.data.binary);
                break;
        }
        return writer;
    }
    ComponentData.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseComponentData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.data = { $case: "json", json: Value.unwrap(Value.decode(reader, reader.uint32())) };
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.data = { $case: "binary", binary: reader.bytes() };
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    ComponentData.decode = decode;
    function fromJSON(object) {
        return {
            data: isSet(object.json)
                ? { $case: "json", json: object.json }
                : isSet(object.binary)
                    ? { $case: "binary", binary: bytesFromBase64(object.binary) }
                    : undefined,
        };
    }
    ComponentData.fromJSON = fromJSON;
    function toJSON(message) {
        const obj = {};
        message.data?.$case === "json" && (obj.json = message.data?.json);
        message.data?.$case === "binary" &&
            (obj.binary = message.data?.binary !== undefined ? base64FromBytes(message.data?.binary) : undefined);
        return obj;
    }
    ComponentData.toJSON = toJSON;
})(ComponentData || (ComponentData = {}));
function createBaseCompositeComponent() {
    return { name: "", jsonSchema: undefined, data: new Map() };
}
/**
 * @public
 */
export var CompositeComponent;
(function (CompositeComponent) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.jsonSchema !== undefined) {
            Value.encode(Value.wrap(message.jsonSchema), writer.uint32(18).fork()).ldelim();
        }
        message.data.forEach((value, key) => {
            CompositeComponent_DataEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        return writer;
    }
    CompositeComponent.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompositeComponent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.jsonSchema = Value.unwrap(Value.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    const entry3 = CompositeComponent_DataEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.data.set(entry3.key, entry3.value);
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
    CompositeComponent.decode = decode;
    function fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            jsonSchema: isSet(object?.jsonSchema) ? object.jsonSchema : undefined,
            data: isObject(object.data)
                ? Object.entries(object.data).reduce((acc, [key, value]) => {
                    acc.set(Number(key), ComponentData.fromJSON(value));
                    return acc;
                }, new Map())
                : new Map(),
        };
    }
    CompositeComponent.fromJSON = fromJSON;
    function toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.jsonSchema !== undefined && (obj.jsonSchema = message.jsonSchema);
        obj.data = {};
        if (message.data) {
            message.data.forEach((v, k) => {
                obj.data[k] = ComponentData.toJSON(v);
            });
        }
        return obj;
    }
    CompositeComponent.toJSON = toJSON;
})(CompositeComponent || (CompositeComponent = {}));
function createBaseCompositeComponent_DataEntry() {
    return { key: 0, value: undefined };
}
/**
 * @public
 */
export var CompositeComponent_DataEntry;
(function (CompositeComponent_DataEntry) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.key !== 0) {
            writer.uint32(8).int32(message.key);
        }
        if (message.value !== undefined) {
            ComponentData.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    }
    CompositeComponent_DataEntry.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompositeComponent_DataEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.key = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = ComponentData.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    CompositeComponent_DataEntry.decode = decode;
    function fromJSON(object) {
        return {
            key: isSet(object.key) ? Number(object.key) : 0,
            value: isSet(object.value) ? ComponentData.fromJSON(object.value) : undefined,
        };
    }
    CompositeComponent_DataEntry.fromJSON = fromJSON;
    function toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = Math.round(message.key));
        message.value !== undefined && (obj.value = message.value ? ComponentData.toJSON(message.value) : undefined);
        return obj;
    }
    CompositeComponent_DataEntry.toJSON = toJSON;
})(CompositeComponent_DataEntry || (CompositeComponent_DataEntry = {}));
function createBaseCompositeDefinition() {
    return { version: 0, components: [] };
}
/**
 * @public
 */
export var CompositeDefinition;
(function (CompositeDefinition) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.version !== 0) {
            writer.uint32(8).int32(message.version);
        }
        for (const v of message.components) {
            CompositeComponent.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    }
    CompositeDefinition.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompositeDefinition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.version = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.components.push(CompositeComponent.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    CompositeDefinition.decode = decode;
    function fromJSON(object) {
        return {
            version: isSet(object.version) ? Number(object.version) : 0,
            components: Array.isArray(object?.components)
                ? object.components.map((e) => CompositeComponent.fromJSON(e))
                : [],
        };
    }
    CompositeDefinition.fromJSON = fromJSON;
    function toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = Math.round(message.version));
        if (message.components) {
            obj.components = message.components.map((e) => e ? CompositeComponent.toJSON(e) : undefined);
        }
        else {
            obj.components = [];
        }
        return obj;
    }
    CompositeDefinition.toJSON = toJSON;
})(CompositeDefinition || (CompositeDefinition = {}));
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
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
