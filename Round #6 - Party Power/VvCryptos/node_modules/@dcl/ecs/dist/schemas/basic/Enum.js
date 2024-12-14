import { Int32 } from './Integer';
import { FlatString } from './String';
/**
 * Validates the enum to ensure all member values are numbers and within the range of Int32.
 * @param enumValue The enum to be checked.
 * @throws If any member value is not a number or is outside the range of Int32.
 */
function validateMemberValuesAreNumbersAndInRangeInt32(enumValue) {
    const MIN_VALUE = -(2 ** 31), MAX_VALUE = 2 ** 31 - 1;
    let valueCount = 0, totalCount = 0;
    for (const key in enumValue) {
        if (typeof enumValue[key] === 'number') {
            if (enumValue[key] > MAX_VALUE || enumValue[key] < MIN_VALUE) {
                throw new Error(`Enum member values must be numbers within the range of ${MIN_VALUE} to ${MAX_VALUE}.`);
            }
            valueCount++;
        }
        totalCount++;
    }
    if (totalCount !== valueCount * 2) {
        throw new Error('All enum member values must be of numeric type.');
    }
}
/**
 * Validates the enum to ensure all member values are of string type.
 * @param enumValue The enum to be checked.
 * @throws If any member value is not of string type.
 */
function validateMemberValuesAreStrings(enumValue) {
    for (const key in enumValue) {
        if (typeof enumValue[key] !== 'string') {
            throw new Error('All enum member values must be of string type.');
        }
    }
}
/**
 * @internal
 */
export const IntEnumReflectionType = 'enum-int';
/**
 * @internal
 */
export const IntEnum = (enumObject, defaultValue) => {
    validateMemberValuesAreNumbersAndInRangeInt32(enumObject);
    return {
        serialize(value, builder) {
            Int32.serialize(value, builder);
        },
        deserialize(reader) {
            return Int32.deserialize(reader);
        },
        create() {
            return defaultValue;
        },
        jsonSchema: {
            // JSON-schema
            type: 'integer',
            enum: Object.values(enumObject).filter((item) => Number.isInteger(item)),
            default: defaultValue,
            // @dcl/ecs Schema Spec
            serializationType: IntEnumReflectionType,
            enumObject
        }
    };
};
/**
 * @internal
 */
export const StringEnumReflectionType = 'enum-string';
/**
 * @internal
 */
export const StringEnum = (enumObject, defaultValue) => {
    validateMemberValuesAreStrings(enumObject);
    // String enum has the exact mapping from key (our reference in code) to values
    return {
        serialize(value, builder) {
            FlatString.serialize(value, builder);
        },
        deserialize(reader) {
            return FlatString.deserialize(reader);
        },
        create() {
            return defaultValue;
        },
        jsonSchema: {
            // JSON-schema
            type: 'string',
            enum: Object.values(enumObject),
            default: defaultValue,
            // @dcl/ecs Schema Spec
            serializationType: StringEnumReflectionType,
            enumObject
        }
    };
};
