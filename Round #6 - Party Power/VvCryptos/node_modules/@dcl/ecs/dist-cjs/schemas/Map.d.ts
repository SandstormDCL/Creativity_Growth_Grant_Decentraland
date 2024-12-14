import { ISchema } from './ISchema';
import { ToOptional } from './typing';
/**
 * @public
 */
export interface Spec {
    [key: string]: ISchema;
}
/**
 * @public
 */
export type MapResult<T extends Spec> = ToOptional<{
    [K in keyof T]: T[K] extends ISchema ? ReturnType<T[K]['deserialize']> : T[K] extends Spec ? MapResult<T[K]> : never;
}>;
/**
 * @public
 */
export type MapResultWithOptional<T extends Spec> = ToOptional<{
    [K in keyof T]?: T[K] extends ISchema ? ReturnType<T[K]['deserialize']> : T[K] extends Spec ? MapResult<T[K]> : never;
}>;
