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
exports.createVideoEventsSystem = void 0;
const components = __importStar(require("../components"));
const entity_1 = require("../engine/entity");
/**
 * @internal
 */
function createVideoEventsSystem(engine) {
    const videoPlayerComponent = components.VideoPlayer(engine);
    const videoEventComponent = components.VideoEvent(engine);
    const entitiesCallbackVideoStateMap = new Map();
    function registerVideoEventsEntity(entity, callback) {
        // video event component is not added here because the renderer adds it
        // to every entity with a VideoPlayer component
        entitiesCallbackVideoStateMap.set(entity, { callback: callback });
    }
    function removeVideoEventsEntity(entity) {
        entitiesCallbackVideoStateMap.delete(entity);
    }
    function hasVideoEventsEntity(entity) {
        return entitiesCallbackVideoStateMap.has(entity);
    }
    // @internal
    engine.addSystem(function EventSystem() {
        for (const [entity, data] of entitiesCallbackVideoStateMap) {
            const videoPlayer = videoPlayerComponent.getOrNull(entity);
            if (engine.getEntityState(entity) === entity_1.EntityState.Removed || !videoPlayer) {
                removeVideoEventsEntity(entity);
                continue;
            }
            // Compare with last state
            const videoEvent = videoEventComponent.get(entity);
            const values = Array.from(videoEvent.values());
            const lastValue = values[videoEvent.size - 1];
            if (lastValue === undefined || (data.lastVideoState !== undefined && data.lastVideoState === lastValue.state))
                continue;
            data.callback(lastValue);
            entitiesCallbackVideoStateMap.set(entity, {
                callback: data.callback,
                lastVideoState: lastValue.state
            });
        }
    });
    return {
        removeVideoEventsEntity(entity) {
            removeVideoEventsEntity(entity);
        },
        registerVideoEventsEntity(entity, callback) {
            registerVideoEventsEntity(entity, callback);
        },
        hasVideoEventsEntity(entity) {
            return hasVideoEventsEntity(entity);
        },
        getVideoState(entity) {
            const videoEvent = videoEventComponent.get(entity);
            const values = Array.from(videoEvent.values());
            const lastValue = values[videoEvent.size - 1];
            return lastValue;
        }
    };
}
exports.createVideoEventsSystem = createVideoEventsSystem;
