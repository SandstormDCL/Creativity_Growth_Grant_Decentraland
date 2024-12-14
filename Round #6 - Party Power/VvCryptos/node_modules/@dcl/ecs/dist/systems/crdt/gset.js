/**
 *
 * @returns a new GSet
 */
export function createVersionGSet() {
    const lastVersion = new Map();
    return {
        /**
         *
         * @param number
         * @param version
         * @returns
         */
        addTo(number, version) {
            /* istanbul ignore next */
            if (version < 0) {
                /* istanbul ignore next */
                return false;
            }
            const currentValue = lastVersion.get(number);
            // If the version is >=, it means the value it's already in the set
            if (currentValue !== undefined && currentValue >= version) {
                return true;
            }
            lastVersion.set(number, version);
            return true;
        },
        /**
         * @returns the set with [number, version] of each value
         */
        has(n, v) {
            const currentValue = lastVersion.get(n);
            // If the version is >=, it means the value it's already in the set
            if (currentValue !== undefined && currentValue >= v) {
                return true;
            }
            return false;
        },
        /**
         * Warning: this function returns the reference to the internal map,
         *  if you need to mutate some value, make a copy.
         * For optimization purpose the copy isn't made here.
         *
         * @returns the map of number to version
         */
        getMap() {
            return lastVersion;
        }
    };
}
