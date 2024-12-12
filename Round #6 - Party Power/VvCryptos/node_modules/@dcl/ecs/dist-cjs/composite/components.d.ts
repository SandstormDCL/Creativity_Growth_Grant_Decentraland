import { Entity } from '../engine';
import { IEngine, LastWriteWinElementSetComponentDefinition } from '../engine/types';
/**
 * @public
 * @deprecated composite is not being supported so far, please do not use this feature
 */
export type CompositeRootType = {
    src: string;
    entities: {
        src: Entity;
        dest: Entity;
    }[];
};
/**
 * @public
 * @deprecated composite is not being supported so far, please do not use this feature
 */
export declare function getCompositeRootComponent(engine: IEngine): LastWriteWinElementSetComponentDefinition<CompositeRootType>;
