import { Schemas } from '../schemas';
/**
 * @public
 * @deprecated composite is not being supported so far, please do not use this feature
 */
export function getCompositeRootComponent(engine) {
    const component = engine.getComponentOrNull('composite::root');
    if (component) {
        return component;
    }
    return engine.defineComponent('composite::root', {
        src: Schemas.String,
        entities: Schemas.Array(Schemas.Map({
            src: Schemas.Entity,
            dest: Schemas.Entity
        }))
    });
}
