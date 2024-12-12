export type Coords = {
    x: number;
    y: number;
};
/**
 * Returns true if the given parcels array are connected
 */
export declare function areConnected(parcels: Coords[]): boolean;
/**
 * Returns true if the given coords are equal
 */
export declare function isEqual(p1: Coords, p2: Coords): boolean;
