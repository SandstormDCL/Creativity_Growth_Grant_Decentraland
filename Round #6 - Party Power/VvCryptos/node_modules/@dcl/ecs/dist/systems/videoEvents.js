import * as components from '../components';
import { EntityState } from '../engine/entity';
/**
 * @internal
 */
export function createVideoEventsSystem(engine) {
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
            if (engine.getEntityState(entity) === EntityState.Removed || !videoPlayer) {
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
