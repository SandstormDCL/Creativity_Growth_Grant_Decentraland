"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentType = void 0;
/**
 * Component types are used to pick the wire protocol and the conflict resolution algorithm
 * @public
 */
var ComponentType;
(function (ComponentType) {
    ComponentType[ComponentType["LastWriteWinElementSet"] = 0] = "LastWriteWinElementSet";
    ComponentType[ComponentType["GrowOnlyValueSet"] = 1] = "GrowOnlyValueSet";
})(ComponentType = exports.ComponentType || (exports.ComponentType = {}));
