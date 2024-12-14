import { Schemas } from '../../schemas';
function defineNameComponent(engine) {
    const Name = engine.defineComponent('core-schema::Name', {
        value: Schemas.String
    });
    return Name;
}
export default defineNameComponent;
