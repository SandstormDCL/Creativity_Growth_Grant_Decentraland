/* istanbul ignore file */
export const __DEV__ = (typeof DEBUG === 'boolean' && DEBUG) ||
    (typeof process === 'object' &&
        (process.env?.NODE_ENV !== 'production' || process.env?.NODE_ENV === 'development')) ||
    false;
export function checkNotThenable(t, error) {
    if (__DEV__) {
        if (t && typeof t === 'object' && typeof t.then === 'function') {
            throw new Error(error);
        }
    }
    return t;
}
