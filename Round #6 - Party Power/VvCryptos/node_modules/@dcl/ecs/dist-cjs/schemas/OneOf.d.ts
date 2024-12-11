import { ISchema } from './ISchema';
import { Spec } from './Map';
type OneOfType<T extends Spec> = {
    [K in keyof T]: {
        readonly $case: K;
        readonly value: ReturnType<T[K]['deserialize']>;
    };
}[keyof T];
export declare const IOneOf: <T extends Spec>(specs: T) => ISchema<OneOfType<T>>;
export {};
