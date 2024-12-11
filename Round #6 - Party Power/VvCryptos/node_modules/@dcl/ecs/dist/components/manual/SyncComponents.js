import { Schemas } from '../../schemas';
function defineSyncComponents(engine) {
    const SyncComponents = engine.defineComponent('core-schema::Sync-Components', {
        componentIds: Schemas.Array(Schemas.Int64)
    });
    return SyncComponents;
}
export default defineSyncComponents;
