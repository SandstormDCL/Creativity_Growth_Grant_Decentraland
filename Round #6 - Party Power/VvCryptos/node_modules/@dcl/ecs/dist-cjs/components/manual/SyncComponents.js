"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = require("../../schemas");
function defineSyncComponents(engine) {
    const SyncComponents = engine.defineComponent('core-schema::Sync-Components', {
        componentIds: schemas_1.Schemas.Array(schemas_1.Schemas.Int64)
    });
    return SyncComponents;
}
exports.default = defineSyncComponents;
