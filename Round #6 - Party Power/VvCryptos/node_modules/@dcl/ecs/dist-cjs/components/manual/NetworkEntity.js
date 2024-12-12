"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = require("../../schemas");
function defineNetworkEntityComponent(engine) {
    const EntityNetwork = engine.defineComponent('core-schema::Network-Entity', {
        networkId: schemas_1.Schemas.Int64,
        entityId: schemas_1.Schemas.Entity
    });
    return EntityNetwork;
}
exports.default = defineNetworkEntityComponent;
