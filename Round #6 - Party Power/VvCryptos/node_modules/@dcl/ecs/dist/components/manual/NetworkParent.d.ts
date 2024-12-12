import { Entity } from '../../engine';
import { IEngine, LastWriteWinElementSetComponentDefinition } from '../../engine/types';
export interface INetowrkParentType {
    networkId: number;
    entityId: Entity;
}
export type INetowrkParent = LastWriteWinElementSetComponentDefinition<INetowrkParentType>;
declare function defineNetworkParentComponent(engine: Pick<IEngine, 'defineComponent'>): import("../../engine").MapComponentDefinition<import("../..").MapResult<{
    networkId: import("../../schemas").ISchema<number>;
    entityId: import("../../schemas").ISchema<Entity>;
}>>;
export default defineNetworkParentComponent;
