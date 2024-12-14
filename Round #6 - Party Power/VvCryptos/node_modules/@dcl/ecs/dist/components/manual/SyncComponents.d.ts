import { IEngine, LastWriteWinElementSetComponentDefinition } from '../../engine/types';
export interface ISyncComponentsType {
    componentIds: number[];
}
export type ISyncComponents = LastWriteWinElementSetComponentDefinition<ISyncComponentsType>;
declare function defineSyncComponents(engine: Pick<IEngine, 'defineComponent'>): import("../../engine/types").MapComponentDefinition<import("../..").MapResult<{
    componentIds: import("../../schemas").ISchema<number[]>;
}>>;
export default defineSyncComponents;
