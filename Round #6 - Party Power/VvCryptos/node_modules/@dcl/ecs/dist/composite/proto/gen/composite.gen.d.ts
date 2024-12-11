import _m0 from "protobufjs/minimal";
/**
 * @public
 */
export interface ComponentData {
    data?: {
        $case: "json";
        json: any | undefined;
    } | {
        $case: "binary";
        binary: Uint8Array;
    } | undefined;
}
/**
 * @public
 */
export interface CompositeComponent {
    name: string;
    jsonSchema: any | undefined;
    data: Map<number, ComponentData>;
}
/**
 * @public
 */
export interface CompositeComponent_DataEntry {
    key: number;
    value: ComponentData | undefined;
}
/**
 * @public
 */
export interface CompositeDefinition {
    version: number;
    components: CompositeComponent[];
}
/**
 * @public
 */
export declare namespace ComponentData {
    function encode(message: ComponentData, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): ComponentData;
    function fromJSON(object: any): ComponentData;
    function toJSON(message: ComponentData): unknown;
}
/**
 * @public
 */
export declare namespace CompositeComponent {
    function encode(message: CompositeComponent, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): CompositeComponent;
    function fromJSON(object: any): CompositeComponent;
    function toJSON(message: CompositeComponent): unknown;
}
/**
 * @public
 */
export declare namespace CompositeComponent_DataEntry {
    function encode(message: CompositeComponent_DataEntry, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): CompositeComponent_DataEntry;
    function fromJSON(object: any): CompositeComponent_DataEntry;
    function toJSON(message: CompositeComponent_DataEntry): unknown;
}
/**
 * @public
 */
export declare namespace CompositeDefinition {
    function encode(message: CompositeDefinition, writer?: _m0.Writer): _m0.Writer;
    function decode(input: _m0.Reader | Uint8Array, length?: number): CompositeDefinition;
    function fromJSON(object: any): CompositeDefinition;
    function toJSON(message: CompositeDefinition): unknown;
}
