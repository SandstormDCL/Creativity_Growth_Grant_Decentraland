/**
 * @internal
 */
export function deepReadonly(val) {
    return Object.freeze({ ...val });
}
