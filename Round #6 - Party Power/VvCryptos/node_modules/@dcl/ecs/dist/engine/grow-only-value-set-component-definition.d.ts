import { DeepReadonly } from './readonly';
/**
 * @public
 */
export type ValueSetOptions<T> = {
    timestampFunction: (value: DeepReadonly<T>) => number;
    maxElements: number;
};
