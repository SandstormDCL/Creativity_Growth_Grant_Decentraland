import { Entity } from '../../engine';
import { IEngine, LastWriteWinElementSetComponentDefinition } from '../../engine/types';
export interface INetowrkEntityType {
    networkId: number;
    entityId: Entity;
}
export type INetowrkEntity = LastWriteWinElementSetComponentDefinition<INetowrkEntityType>;
declare function defineNetworkEntityComponent(engine: Pick<IEngine, 'defineComponent'>): import("../../engine").MapComponentDefinition<import("../..").MapResult<{
    networkId: import("../../schemas").ISchema<number>;
    entityId: import("../../schemas").ISchema<Entity>;
}>>;
export default defineNetworkEntityComponent;
