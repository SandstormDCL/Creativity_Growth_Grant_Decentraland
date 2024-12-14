/**
 * @public
 */
export type SystemFn = (dt: number) => void;
export declare const SYSTEMS_REGULAR_PRIORITY = 100000;
export type SystemItem = {
    fn: SystemFn;
    priority: number;
    name?: string;
};
export declare function SystemContainer(): {
    add: (fn: SystemFn, priority: number, name?: string) => void;
    remove: (selector: string | SystemFn) => boolean;
    getSystems(): SystemItem[];
};
