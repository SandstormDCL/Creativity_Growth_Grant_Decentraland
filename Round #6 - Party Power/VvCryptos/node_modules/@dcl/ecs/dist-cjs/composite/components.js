"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompositeRootComponent = void 0;
const schemas_1 = require("../schemas");
/**
 * @public
 * @deprecated composite is not being supported so far, please do not use this feature
 */
function getCompositeRootComponent(engine) {
    const component = engine.getComponentOrNull('composite::root');
    if (component) {
        return component;
    }
    return engine.defineComponent('composite::root', {
        src: schemas_1.Schemas.String,
        entities: schemas_1.Schemas.Array(schemas_1.Schemas.Map({
            src: schemas_1.Schemas.Entity,
            dest: schemas_1.Schemas.Entity
        }))
    });
}
exports.getCompositeRootComponent = getCompositeRootComponent;
