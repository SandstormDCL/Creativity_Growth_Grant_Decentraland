/**
 * This Grow-only set is a implementation with a memory optimization.
 *
 * Each number has a version, no matter how the final compound number is mixed.
 *
 * The function `add` isn't defined (for this implementation), instead, the addTo is: add all versions of a number `n` until (and including) `v`.
 *
 */
export type OptimizedGrowonlySet = {
    /**
     * @public
     *
     * @param n
     * @param v
     * @returns
     */
    addTo(n: number, v: number): boolean;
    /**
     * @public
     *
     * @returns the set with [number, version] of each value
     */
    has(n: number, v: number): boolean;
};
/**
 *
 * @returns a new GSet
 */
export declare function createVersionGSet(): OptimizedGrowonlySet;
