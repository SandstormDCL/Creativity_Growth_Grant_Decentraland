/* eslint-disable */
import _m0 from "protobufjs/minimal";
const protobufPackageSarasa = "decentraland.sdk.components";
function createBasePBMeshRenderer() {
    return { mesh: undefined };
}
/**
 * @public
 */
export var PBMeshRenderer;
(function (PBMeshRenderer) {
    function encode(message, writer = _m0.Writer.create()) {
        switch (message.mesh?.$case) {
            case "box":
                PBMeshRenderer_BoxMesh.encode(message.mesh.box, writer.uint32(10).fork()).ldelim();
                break;
            case "sphere":
                PBMeshRenderer_SphereMesh.encode(message.mesh.sphere, writer.uint32(18).fork()).ldelim();
                break;
            case "cylinder":
                PBMeshRenderer_CylinderMesh.encode(message.mesh.cylinder, writer.uint32(26).fork()).ldelim();
                break;
            case "plane":
                PBMeshRenderer_PlaneMesh.encode(message.mesh.plane, writer.uint32(34).fork()).ldelim();
                break;
        }
        return writer;
    }
    PBMeshRenderer.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBMeshRenderer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.mesh = { $case: "box", box: PBMeshRenderer_BoxMesh.decode(reader, reader.uint32()) };
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.mesh = { $case: "sphere", sphere: PBMeshRenderer_SphereMesh.decode(reader, reader.uint32()) };
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.mesh = { $case: "cylinder", cylinder: PBMeshRenderer_CylinderMesh.decode(reader, reader.uint32()) };
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.mesh = { $case: "plane", plane: PBMeshRenderer_PlaneMesh.decode(reader, reader.uint32()) };
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBMeshRenderer.decode = decode;
})(PBMeshRenderer || (PBMeshRenderer = {}));
function createBasePBMeshRenderer_BoxMesh() {
    return { uvs: [] };
}
/**
 * @public
 */
export var PBMeshRenderer_BoxMesh;
(function (PBMeshRenderer_BoxMesh) {
    function encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.uvs) {
            writer.float(v);
        }
        writer.ldelim();
        return writer;
    }
    PBMeshRenderer_BoxMesh.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBMeshRenderer_BoxMesh();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 13) {
                        message.uvs.push(reader.float());
                        continue;
                    }
                    if (tag === 10) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.uvs.push(reader.float());
                        }
                        continue;
                    }
                    break;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBMeshRenderer_BoxMesh.decode = decode;
})(PBMeshRenderer_BoxMesh || (PBMeshRenderer_BoxMesh = {}));
function createBasePBMeshRenderer_CylinderMesh() {
    return { radiusTop: undefined, radiusBottom: undefined };
}
/**
 * @public
 */
export var PBMeshRenderer_CylinderMesh;
(function (PBMeshRenderer_CylinderMesh) {
    function encode(message, writer = _m0.Writer.create()) {
        if (message.radiusTop !== undefined) {
            writer.uint32(13).float(message.radiusTop);
        }
        if (message.radiusBottom !== undefined) {
            writer.uint32(21).float(message.radiusBottom);
        }
        return writer;
    }
    PBMeshRenderer_CylinderMesh.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBMeshRenderer_CylinderMesh();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 13) {
                        break;
                    }
                    message.radiusTop = reader.float();
                    continue;
                case 2:
                    if (tag !== 21) {
                        break;
                    }
                    message.radiusBottom = reader.float();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBMeshRenderer_CylinderMesh.decode = decode;
})(PBMeshRenderer_CylinderMesh || (PBMeshRenderer_CylinderMesh = {}));
function createBasePBMeshRenderer_PlaneMesh() {
    return { uvs: [] };
}
/**
 * @public
 */
export var PBMeshRenderer_PlaneMesh;
(function (PBMeshRenderer_PlaneMesh) {
    function encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.uvs) {
            writer.float(v);
        }
        writer.ldelim();
        return writer;
    }
    PBMeshRenderer_PlaneMesh.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBMeshRenderer_PlaneMesh();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag === 13) {
                        message.uvs.push(reader.float());
                        continue;
                    }
                    if (tag === 10) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.uvs.push(reader.float());
                        }
                        continue;
                    }
                    break;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBMeshRenderer_PlaneMesh.decode = decode;
})(PBMeshRenderer_PlaneMesh || (PBMeshRenderer_PlaneMesh = {}));
function createBasePBMeshRenderer_SphereMesh() {
    return {};
}
/**
 * @public
 */
export var PBMeshRenderer_SphereMesh;
(function (PBMeshRenderer_SphereMesh) {
    function encode(_, writer = _m0.Writer.create()) {
        return writer;
    }
    PBMeshRenderer_SphereMesh.encode = encode;
    function decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePBMeshRenderer_SphereMesh();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    }
    PBMeshRenderer_SphereMesh.decode = decode;
})(PBMeshRenderer_SphereMesh || (PBMeshRenderer_SphereMesh = {}));
