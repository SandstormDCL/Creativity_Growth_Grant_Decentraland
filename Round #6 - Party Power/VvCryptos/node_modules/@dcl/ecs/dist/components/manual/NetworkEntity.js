import { Schemas } from '../../schemas';
function defineNetworkEntityComponent(engine) {
    const EntityNetwork = engine.defineComponent('core-schema::Network-Entity', {
        networkId: Schemas.Int64,
        entityId: Schemas.Entity
    });
    return EntityNetwork;
}
export default defineNetworkEntityComponent;
