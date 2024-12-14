import { InputModifier } from '../generated/index.gen';
const InputModifierHelper = {
    Standard(standard) {
        return {
            $case: 'standard',
            standard
        };
    }
};
export function defineInputModifierComponent(engine) {
    const theComponent = InputModifier(engine);
    return {
        ...theComponent,
        Mode: InputModifierHelper
    };
}
