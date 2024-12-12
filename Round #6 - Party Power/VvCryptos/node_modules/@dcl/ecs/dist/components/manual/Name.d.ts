import { IEngine, LastWriteWinElementSetComponentDefinition } from '../../engine/types';
export type NameComponent = LastWriteWinElementSetComponentDefinition<NameType>;
export interface NameType {
    value: string;
}
declare function defineNameComponent(engine: Pick<IEngine, 'defineComponent'>): import("../../engine/types").MapComponentDefinition<import("../..").MapResult<{
    value: import("../../schemas").ISchema<string>;
}>>;
export default defineNameComponent;
