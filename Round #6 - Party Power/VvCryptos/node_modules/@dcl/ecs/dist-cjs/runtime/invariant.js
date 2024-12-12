"use strict";
/* istanbul ignore file */
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkNotThenable = exports.__DEV__ = void 0;
exports.__DEV__ = (typeof DEBUG === 'boolean' && DEBUG) ||
    (typeof process === 'object' &&
        (process.env?.NODE_ENV !== 'production' || process.env?.NODE_ENV === 'development')) ||
    false;
function checkNotThenable(t, error) {
    if (exports.__DEV__) {
        if (t && typeof t === 'object' && typeof t.then === 'function') {
            throw new Error(error);
        }
    }
    return t;
}
exports.checkNotThenable = checkNotThenable;
