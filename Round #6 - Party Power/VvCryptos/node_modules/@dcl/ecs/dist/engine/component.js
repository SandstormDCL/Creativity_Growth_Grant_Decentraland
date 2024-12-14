/**
 * Component types are used to pick the wire protocol and the conflict resolution algorithm
 * @public
 */
export var ComponentType;
(function (ComponentType) {
    ComponentType[ComponentType["LastWriteWinElementSet"] = 0] = "LastWriteWinElementSet";
    ComponentType[ComponentType["GrowOnlyValueSet"] = 1] = "GrowOnlyValueSet";
})(ComponentType || (ComponentType = {}));
