import { ComponentDefinition } from '../../engine/component';
export declare namespace CrdtUtils {
    type ComponentID = ComponentDefinition<any>['componentId'];
    enum SynchronizedEntityType {
        NETWORKED = 0,
        RENDERER = 1
    }
}
export default CrdtUtils;
/**
 * Compare raw data.
 * @public
 * @returns 0 if is the same data, 1 if a > b, -1 if b > a
 */
export declare function dataCompare<T>(a: T, b: T): number;
