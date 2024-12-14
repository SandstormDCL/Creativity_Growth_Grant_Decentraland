import _m0 from "protobufjs/minimal";
/**
 * @public
 */
export interface FileDescriptorSet {
    file: FileDescriptorProto[];
}
/**
 * @public
 */
export interface FileDescriptorProto {
    name: string;
    package: string;
    dependency: string[];
    publicDependency: number[];
    weakDependency: number[];
    messageType: DescriptorProto[];
    enumType: EnumDescriptorProto[];
    service: ServiceDescriptorProto[];
    extension: FieldDescriptorProto[];
    options: FileOptions | undefined;
    sourceCodeInfo: SourceCodeInfo | undefined;
    syntax: string;
}
/**
 * @public
 */
export interface DescriptorProto {
    name: string;
    field: FieldDescriptorProto[];
    extension: FieldDescriptorProto[];
    nestedType: DescriptorProto[];
    enumType: EnumDescriptorProto[];
    extensionRange: DescriptorProto_ExtensionRange[];
    oneofDecl: OneofDescriptorProto[];
    options: MessageOptions | undefined;
    reservedRange: DescriptorProto_ReservedRange[];
    reservedName: string[];
}
/**
 * @public
 */
export interface DescriptorProto_ExtensionRange {
    start: number;
    end: number;
}
/**
 * @public
 */
export interface DescriptorProto_ReservedRange {
    start: number;
    end: number;
}
/**
 * @public
 */
export interface FieldDescriptorProto {
    name: string;
    number: number;
    label: FieldDescriptorProto_Label;
    type: FieldDescriptorProto_Type;
    typeName: string;
    extendee: string;
    defaultValue: string;
    oneofIndex: number;
    jsonName: string;
    options: FieldOptions | undefined;
}
/**
 * @public
 */
export declare const enum FieldDescriptorProto_Type {
    TYPE_DOUBLE = 1,
    TYPE_FLOAT = 2,
    TYPE_INT64 = 3,
    TYPE_UINT64 = 4,
    TYPE_INT32 = 5,
    TYPE_FIXED64 = 6,
    TYPE_FIXED32 = 7,
    TYPE_BOOL = 8,
    TYPE_STRING = 9,
    TYPE_GROUP = 10,
    TYPE_MESSAGE = 11,
    TYPE_BYTES = 12,
    TYPE_UINT32 = 13,
    TYPE_ENUM = 14,
    TYPE_SFIXED32 = 15,
    TYPE_SFIXED64 = 16,
    TYPE_SINT32 = 17,
    TYPE_SINT64 = 18
}
/**
 * @public
 */
export declare const enum FieldDescriptorProto_Label {
    LABEL_OPTIONAL = 1,
    LABEL_REQUIRED = 2,
    LABEL_REPEATED = 3
}
/**
 * @public
 */
export interface OneofDescriptorProto {
    name: string;
    options: OneofOptions | undefined;
}
/**
 * @public
 */
export interface EnumDescriptorProto {
    name: string;
    value: EnumValueDescriptorProto[];
    options: EnumOptions | undefined;
}
/**
 * @public
 */
export interface EnumValueDescriptorProto {
    name: string;
    number: number;
    options: EnumValueOptions | undefined;
}
/**
 * @public
 */
export interface ServiceDescriptorProto {
    name: string;
    method: MethodDescriptorProto[];
    options: ServiceOptions | undefined;
}
/**
 * @public
 */
export interface MethodDescriptorProto {
    name: string;
    inputType: string;
    outputType: string;
    options: MethodOptions | undefined;
    clientStreaming: boolean;
    serverStreaming: boolean;
}
/**
 * @public
 */
export interface FileOptions {
    javaPackage: string;
    javaOuterClassname: string;
    javaMultipleFiles: boolean;
    /** @deprecated */
    javaGenerateEqualsAndHash: boolean;
    javaStringCheckUtf8: boolean;
    optimizeFor: FileOptions_OptimizeMode;
    goPackage: string;
    ccGenericServices: boolean;
    javaGenericServices: boolean;
    pyGenericServices: boolean;
    deprecated: boolean;
    ccEnableArenas: boolean;
    objcClassPrefix: string;
    csharpNamespace: string;
    uninterpretedOption: UninterpretedOption[];
}
/**
 * @public
 */
export declare const enum FileOptions_OptimizeMode {
    SPEED = 1,
    CODE_SIZE = 2,
    LITE_RUNTIME = 3
}
/**
 * @public
 */
export interface MessageOptions {
    messageSetWireFormat: boolean;
    noStandardDescriptorAccessor: boolean;
    deprecated: boolean;
    mapEntry: boolean;
    uninterpretedOption: UninterpretedOption[];
}
/**
 * @public
 */
export interface FieldOptions {
    ctype: FieldOptions_CType;
    packed: boolean;
    jstype: FieldOptions_JSType;
    lazy: boolean;
    deprecated: boolean;
    weak: boolean;
    uninterpretedOption: UninterpretedOption[];
}
/**
 * @public
 */
export declare const enum FieldOptions_CType {
    STRING = 0,
    CORD = 1,
    STRING_PIECE = 2
}
/**
 * @public
 */
export declare const enum FieldOptions_JSType {
    JS_NORMAL = 0,
    JS_STRING = 1,
    JS_NUMBER = 2
}
/**
 * @public
 */
export interface OneofOptions {
    uninterpretedOption: UninterpretedOption[];
}
/**
 * @public
 */
export interface EnumOptions {
    allowAlias: boolean;
    deprecated: boolean;
    uninterpretedOption: UninterpretedOption[];
}
/**
 * @public
 */
export interface EnumValueOptions {
    deprecated: boolean;
    uninterpretedOption: UninterpretedOption[];
}
/**
 * @public
 */
export interface ServiceOptions {
    deprecated: boolean;
    uninterpretedOption: UninterpretedOption[];
}
/**
 * @public
 */
export interface MethodOptions {
    deprecated: boolean;
    uninterpretedOption: UninterpretedOption[];
}
/**
 * @public
 */
export interface UninterpretedOption {
    name: UninterpretedOption_NamePart[];
    identifierValue: string;
    positiveIntValue: number;
    negativeIntValue: number;
    doubleValue: number;
    stringValue: Uint8Array;
    aggregateValue: string;
}
/**
 * @public
 */
export interface UninterpretedOption_NamePart {
    namePart: string;
    isExtension: boolean;
}
/**
 * @public
 */
export interface SourceCodeInfo {
    location: SourceCodeInfo_Location[];
}
/**
 * @public
 */
export interface SourceCodeInfo_Location {
    path: number[];
    span: number[];
    leadingComments: string;
    trailingComments: string;
    leadingDetachedComments: string[];
}
/**
 * @public
 */
export interface GeneratedCodeInfo {
    annotation: GeneratedCodeInfo_Annotation[];
}
/**
 * @public
 */
export interface GeneratedCodeInfo_Annotation {
    path: number[];
    sourceFile: string;
    begin: number;
    end: number;
}
/**
 * @public
 */
export declare namespace FileDescriptorSet {
    function encode(message: FileDescriptorSet, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorSet;
}
/**
 * @public
 */
export declare namespace FileDescriptorProto {
    function encode(message: FileDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): FileDescriptorProto;
}
/**
 * @public
 */
export declare namespace DescriptorProto {
    function encode(message: DescriptorProto, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto;
}
/**
 * @public
 */
export declare namespace DescriptorProto_ExtensionRange {
    function encode(message: DescriptorProto_ExtensionRange, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto_ExtensionRange;
}
/**
 * @public
 */
export declare namespace DescriptorProto_ReservedRange {
    function encode(message: DescriptorProto_ReservedRange, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): DescriptorProto_ReservedRange;
}
/**
 * @public
 */
export declare namespace FieldDescriptorProto {
    function encode(message: FieldDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): FieldDescriptorProto;
}
/**
 * @public
 */
export declare namespace OneofDescriptorProto {
    function encode(message: OneofDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): OneofDescriptorProto;
}
/**
 * @public
 */
export declare namespace EnumDescriptorProto {
    function encode(message: EnumDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): EnumDescriptorProto;
}
/**
 * @public
 */
export declare namespace EnumValueDescriptorProto {
    function encode(message: EnumValueDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): EnumValueDescriptorProto;
}
/**
 * @public
 */
export declare namespace ServiceDescriptorProto {
    function encode(message: ServiceDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): ServiceDescriptorProto;
}
/**
 * @public
 */
export declare namespace MethodDescriptorProto {
    function encode(message: MethodDescriptorProto, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): MethodDescriptorProto;
}
/**
 * @public
 */
export declare namespace FileOptions {
    function encode(message: FileOptions, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): FileOptions;
}
/**
 * @public
 */
export declare namespace MessageOptions {
    function encode(message: MessageOptions, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): MessageOptions;
}
/**
 * @public
 */
export declare namespace FieldOptions {
    function encode(message: FieldOptions, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): FieldOptions;
}
/**
 * @public
 */
export declare namespace OneofOptions {
    function encode(message: OneofOptions, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): OneofOptions;
}
/**
 * @public
 */
export declare namespace EnumOptions {
    function encode(message: EnumOptions, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): EnumOptions;
}
/**
 * @public
 */
export declare namespace EnumValueOptions {
    function encode(message: EnumValueOptions, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): EnumValueOptions;
}
/**
 * @public
 */
export declare namespace ServiceOptions {
    function encode(message: ServiceOptions, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): ServiceOptions;
}
/**
 * @public
 */
export declare namespace MethodOptions {
    function encode(message: MethodOptions, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): MethodOptions;
}
/**
 * @public
 */
export declare namespace UninterpretedOption {
    function encode(message: UninterpretedOption, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): UninterpretedOption;
}
/**
 * @public
 */
export declare namespace UninterpretedOption_NamePart {
    function encode(message: UninterpretedOption_NamePart, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): UninterpretedOption_NamePart;
}
/**
 * @public
 */
export declare namespace SourceCodeInfo {
    function encode(message: SourceCodeInfo, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): SourceCodeInfo;
}
/**
 * @public
 */
export declare namespace SourceCodeInfo_Location {
    function encode(message: SourceCodeInfo_Location, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): SourceCodeInfo_Location;
}
/**
 * @public
 */
export declare namespace GeneratedCodeInfo {
    function encode(message: GeneratedCodeInfo, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): GeneratedCodeInfo;
}
/**
 * @public
 */
export declare namespace GeneratedCodeInfo_Annotation {
    function encode(message: GeneratedCodeInfo_Annotation, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): GeneratedCodeInfo_Annotation;
}
