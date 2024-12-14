"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepReadonly = void 0;
/**
 * @internal
 */
function deepReadonly(val) {
    return Object.freeze({ ...val });
}
exports.deepReadonly = deepReadonly;
