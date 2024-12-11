"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineInputModifierComponent = void 0;
const index_gen_1 = require("../generated/index.gen");
const InputModifierHelper = {
    Standard(standard) {
        return {
            $case: 'standard',
            standard
        };
    }
};
function defineInputModifierComponent(engine) {
    const theComponent = (0, index_gen_1.InputModifier)(engine);
    return {
        ...theComponent,
        Mode: InputModifierHelper
    };
}
exports.defineInputModifierComponent = defineInputModifierComponent;
