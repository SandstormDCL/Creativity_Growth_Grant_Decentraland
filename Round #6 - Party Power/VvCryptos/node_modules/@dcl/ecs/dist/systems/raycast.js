import * as components from '../components';
import { EntityState } from '../engine/entity';
/**
 * @internal
 */
export function createRaycastSystem(engine) {
    const Raycast = components.Raycast(engine);
    const RaycastResult = components.RaycastResult(engine);
    const entitiesCallbackResultMap = new Map();
    const defaultOptions = {
        maxDistance: 16,
        queryType: 0 /* RaycastQueryType.RQT_HIT_FIRST */,
        continuous: false,
        originOffset: { x: 0, y: 0, z: 0 },
        collisionMask: 2 /* ColliderLayer.CL_PHYSICS */
    };
    const getLocalDirectionRaycastDefaultOptions = (options = {}) => ({
        ...defaultOptions,
        ...options,
        directionRawValue: {
            $case: 'localDirection',
            localDirection: options.direction || { x: 0, y: 0, z: 1 }
        }
    });
    const getGlobalDirectionRaycastDefaultOptions = (options = {}) => ({
        ...defaultOptions,
        ...options,
        directionRawValue: {
            $case: 'globalDirection',
            globalDirection: options.direction || { x: 0, y: 0, z: 1 }
        }
    });
    const getGlobalTargetRaycastDefaultOptions = (options = {}) => ({
        ...defaultOptions,
        ...options,
        directionRawValue: {
            $case: 'globalTarget',
            globalTarget: options.target || { x: 0, y: 0, z: 0 }
        }
    });
    const getTargetEntityRaycastDefaultOptions = (options = {}) => ({
        ...defaultOptions,
        ...options,
        directionRawValue: {
            $case: 'targetEntity',
            targetEntity: options.targetEntity || 0
        }
    });
    const nextTickRaycasts = [];
    function registerRaycastWithCallback(entity, raycastValue, callback) {
        // Raycasts registration is delayed 1 frame to avoid same-frame raycast
        // removal/adding (the client never receives the removal on those situations)
        const onNextTick = () => {
            const raycast = Raycast.createOrReplace(entity);
            raycast.maxDistance = raycastValue.maxDistance;
            raycast.originOffset = raycastValue.originOffset;
            raycast.collisionMask = raycastValue.collisionMask;
            raycast.direction = raycastValue.directionRawValue;
            raycast.continuous = raycastValue.continuous;
            raycast.queryType = raycastValue.queryType;
            entitiesCallbackResultMap.set(entity, { callback: callback });
        };
        nextTickRaycasts.push(onNextTick);
    }
    function removeRaycast(entity) {
        Raycast.deleteFrom(entity);
        RaycastResult.deleteFrom(entity);
        entitiesCallbackResultMap.delete(entity);
    }
    // @internal
    engine.addSystem(function EventSystem() {
        for (const addMissingRaycast of nextTickRaycasts) {
            addMissingRaycast();
        }
        nextTickRaycasts.length = 0;
        for (const [entity, data] of entitiesCallbackResultMap) {
            const raycast = Raycast.getOrNull(entity);
            if (engine.getEntityState(entity) === EntityState.Removed || !raycast) {
                entitiesCallbackResultMap.delete(entity);
                continue;
            }
            const currentResult = RaycastResult.getOrNull(entity);
            if (!currentResult)
                continue;
            data.callback(currentResult);
            if (!raycast.continuous)
                removeRaycast(entity);
        }
    });
    const registerLocalDirectionRaycast = (...args) => {
        const [data, cb, maybeOpts] = args;
        if (typeof data === 'number') {
            return registerLocalDirectionRaycast({ entity: data, opts: maybeOpts ?? {} }, cb);
        }
        const { entity, opts } = data;
        registerRaycastWithCallback(entity, getLocalDirectionRaycastDefaultOptions(opts), cb);
    };
    const registerGlobalDirectionRaycast = (...args) => {
        const [data, cb, maybeOpts] = args;
        if (typeof data === 'number') {
            return registerGlobalDirectionRaycast({ entity: data, opts: maybeOpts ?? {} }, cb);
        }
        const { entity, opts } = data;
        registerRaycastWithCallback(entity, getGlobalDirectionRaycastDefaultOptions(opts), cb);
    };
    const registerGlobalTargetRaycast = (...args) => {
        const [data, cb, maybeOpts] = args;
        if (typeof data === 'number') {
            return registerGlobalTargetRaycast({ entity: data, opts: maybeOpts ?? {} }, cb);
        }
        const { entity, opts } = data;
        registerRaycastWithCallback(entity, getGlobalTargetRaycastDefaultOptions(opts), cb);
    };
    const registerTargetEntityRaycast = (...args) => {
        const [data, cb, maybeOpts] = args;
        if (typeof data === 'number') {
            return registerTargetEntityRaycast({ entity: data, opts: maybeOpts ?? {} }, cb);
        }
        const { entity, opts } = data;
        registerRaycastWithCallback(entity, getTargetEntityRaycastDefaultOptions(opts), cb);
    };
    return {
        removeRaycasterEntity(entity) {
            removeRaycast(entity);
        },
        registerLocalDirectionRaycast,
        registerGlobalDirectionRaycast,
        registerGlobalTargetRaycast,
        registerTargetEntityRaycast,
        registerRaycast(entity, opts) {
            const raycast = Raycast.getOrNull(entity);
            if (!raycast)
                Raycast.create(entity, { ...opts, direction: opts.directionRawValue });
            const value = RaycastResult.getOrNull(entity);
            if (value) {
                if (!opts.continuous) {
                    RaycastResult.deleteFrom(entity);
                    Raycast.deleteFrom(entity);
                }
            }
            return value;
        },
        localDirectionOptions: getLocalDirectionRaycastDefaultOptions,
        globalDirectionOptions: getGlobalDirectionRaycastDefaultOptions,
        globalTargetOptions: getGlobalTargetRaycastDefaultOptions,
        targetEntitytOptions: getTargetEntityRaycastDefaultOptions
    };
}
