import { ByteBuffer } from '../serialization/ByteBuffer';
import { OnChangeFunction } from '../systems/crdt';
import { Entity } from './entity';
import { SystemItem } from './systems';
import type { IEngine, IEngineOptions } from './types';
export * from './input';
export * from './readonly';
export * from './types';
export { Entity, ByteBuffer, SystemItem, OnChangeFunction };
/**
 * Internal constructor of new engines, this is an internal API
 * @public
 * @deprecated Prevent manual usage prefer "engine" for scene development
 */
export declare function Engine(options?: IEngineOptions): IEngine;
