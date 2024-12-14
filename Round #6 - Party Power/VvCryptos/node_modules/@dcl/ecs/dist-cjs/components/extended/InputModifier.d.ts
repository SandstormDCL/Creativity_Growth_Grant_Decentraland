import { IEngine, LastWriteWinElementSetComponentDefinition } from '../../engine';
import { PBInputModifier_StandardInput, PBInputModifier } from '../generated/index.gen';
/**
 * @public
 */
export interface InputModifierHelper {
    /**
     * @returns a input modifier mode
     */
    Standard: (standard: PBInputModifier_StandardInput) => PBInputModifier['mode'];
}
/**
 * @public
 */
export interface InputModifierComponentDefinitionExtended extends LastWriteWinElementSetComponentDefinition<PBInputModifier> {
    /**
     * InputModifier helper with constructor
     */
    Mode: InputModifierHelper;
}
export declare function defineInputModifierComponent(engine: Pick<IEngine, 'defineComponentFromSchema'>): InputModifierComponentDefinitionExtended;
