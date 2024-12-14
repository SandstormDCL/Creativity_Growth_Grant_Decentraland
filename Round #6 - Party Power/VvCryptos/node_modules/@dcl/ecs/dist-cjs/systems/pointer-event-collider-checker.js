"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pointerEventColliderChecker = void 0;
/* istanbul ignore file */
const components = __importStar(require("../components"));
/**
 * It checks all the entities that has a PointerEvent and check if it has a collider.
 * *
 * @public
 * @params engine
 */
function pointerEventColliderChecker(engine) {
    const PointerEvents = components.PointerEvents(engine);
    const MeshCollider = components.MeshCollider(engine);
    const GltfContainer = components.GltfContainer(engine);
    const UiTransform = components.UiTransform(engine);
    const alreadyShownlog = new Set();
    let timer = 0;
    function systemChecker(dt) {
        timer += dt;
        if (timer <= 10) {
            return;
        }
        timer = 0;
        for (const [entity] of engine.getEntitiesWith(PointerEvents)) {
            if (alreadyShownlog.has(entity))
                continue;
            // Maybe the collider is inside the GLTFContainer. Ignore it
            if (GltfContainer.has(entity))
                continue;
            // UI handles the pointer's in a diff way.
            if (UiTransform.has(entity))
                continue;
            // check for Mesh Pointer Collision Layer
            const mesh = MeshCollider.getOrNull(entity);
            if (mesh) {
                if (mesh.collisionMask === undefined || mesh.collisionMask & 1 /* components.ColliderLayer.CL_POINTER */) {
                    continue;
                }
            }
            alreadyShownlog.add(entity);
            console.log(`⚠️ Missing MeshCollider component on entity ${entity}. Add a MeshCollider to the entity so it can be clickeable by the player.
See https://docs.decentraland.org/creator/development-guide/sdk7/colliders/#pointer-blocking`);
        }
    }
    engine.removeSystem(systemChecker);
    engine.addSystem(systemChecker);
}
exports.pointerEventColliderChecker = pointerEventColliderChecker;
