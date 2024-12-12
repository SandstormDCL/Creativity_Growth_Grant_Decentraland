"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schemas_1 = require("../../schemas");
function defineNameComponent(engine) {
    const Name = engine.defineComponent('core-schema::Name', {
        value: schemas_1.Schemas.String
    });
    return Name;
}
exports.default = defineNameComponent;
