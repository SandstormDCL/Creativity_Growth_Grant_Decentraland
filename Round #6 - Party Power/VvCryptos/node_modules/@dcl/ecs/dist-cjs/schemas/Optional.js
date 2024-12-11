"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IOptional = void 0;
/**
 * @internal
 */
const IOptional = (spec) => {
    return {
        serialize(value, builder) {
            if (value) {
                builder.writeInt8(1);
                spec.serialize(value, builder);
            }
            else {
                builder.writeInt8(0);
            }
        },
        deserialize(reader) {
            const exists = reader.readInt8();
            if (exists) {
                return spec.deserialize(reader);
            }
        },
        create() {
            return undefined;
        },
        jsonSchema: {
            type: spec.jsonSchema.type,
            serializationType: 'optional',
            optionalJsonSchema: spec.jsonSchema
        }
    };
};
exports.IOptional = IOptional;
