import { Schemas } from '../../schemas';
function defineNetworkParentComponent(engine) {
    const EntityNetwork = engine.defineComponent('core-schema::Network-Parent', {
        networkId: Schemas.Int64,
        entityId: Schemas.Entity
    });
    return EntityNetwork;
}
export default defineNetworkParentComponent;
