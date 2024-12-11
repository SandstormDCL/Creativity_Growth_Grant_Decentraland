type K = unknown | Promise<unknown>;
export declare const __DEV__: boolean;
export declare function checkNotThenable<T extends K>(t: T, error: string): T;
export {};
