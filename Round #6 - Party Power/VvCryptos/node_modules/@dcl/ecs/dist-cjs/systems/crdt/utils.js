"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataCompare = exports.CrdtUtils = void 0;
var CrdtUtils;
(function (CrdtUtils) {
    let SynchronizedEntityType;
    (function (SynchronizedEntityType) {
        // synchronizes entities with the NetworkSynchronized component only, used for networked games
        SynchronizedEntityType[SynchronizedEntityType["NETWORKED"] = 0] = "NETWORKED";
        // synchronizes entities needed by the renderer
        SynchronizedEntityType[SynchronizedEntityType["RENDERER"] = 1] = "RENDERER";
    })(SynchronizedEntityType = CrdtUtils.SynchronizedEntityType || (CrdtUtils.SynchronizedEntityType = {}));
})(CrdtUtils = exports.CrdtUtils || (exports.CrdtUtils = {}));
exports.default = CrdtUtils;
/**
 * Compare raw data.
 * @public
 * @returns 0 if is the same data, 1 if a > b, -1 if b > a
 */
function dataCompare(a, b) {
    // At reference level
    if (a === b)
        return 0;
    if (a === null && b !== null)
        return -1;
    if (a !== null && b === null)
        return 1;
    if (a instanceof Uint8Array && b instanceof Uint8Array) {
        const lengthDifference = a.byteLength - b.byteLength;
        if (lengthDifference !== 0) {
            return lengthDifference > 0 ? 1 : -1;
        }
        let res;
        for (let i = 0, n = a.byteLength; i < n; i++) {
            res = a[i] - b[i];
            if (res !== 0) {
                return res > 0 ? 1 : -1;
            }
        }
        // the data is exactly the same
        return 0;
    }
    if (typeof a === 'string') {
        const lengthDifference = a.length - b.length;
        if (lengthDifference !== 0) {
            return lengthDifference > 0 ? 1 : -1;
        }
        return a.localeCompare(b);
    }
    return a > b ? 1 : -1;
}
exports.dataCompare = dataCompare;
