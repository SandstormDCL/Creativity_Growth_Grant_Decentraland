"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = require("../../schemas");
function defineNetworkParentComponent(engine) {
    const EntityNetwork = engine.defineComponent('core-schema::Network-Parent', {
        networkId: schemas_1.Schemas.Int64,
        entityId: schemas_1.Schemas.Entity
    });
    return EntityNetwork;
}
exports.default = defineNetworkParentComponent;
