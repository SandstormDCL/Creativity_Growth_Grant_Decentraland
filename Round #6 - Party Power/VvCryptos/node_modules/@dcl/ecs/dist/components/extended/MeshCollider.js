import { MeshCollider } from '../generated/index.gen';
export function defineMeshColliderComponent(engine) {
    const theComponent = MeshCollider(engine);
    function getCollisionMask(layers) {
        if (Array.isArray(layers)) {
            return layers.map((item) => item).reduce((prev, item) => prev | item, 0);
        }
        else if (layers) {
            return layers;
        }
    }
    return {
        ...theComponent,
        setBox(entity, colliderLayers) {
            theComponent.createOrReplace(entity, {
                mesh: { $case: 'box', box: {} },
                collisionMask: getCollisionMask(colliderLayers)
            });
        },
        setPlane(entity, colliderLayers) {
            theComponent.createOrReplace(entity, {
                mesh: { $case: 'plane', plane: {} },
                collisionMask: getCollisionMask(colliderLayers)
            });
        },
        setCylinder(entity, radiusBottom, radiusTop, colliderLayers) {
            theComponent.createOrReplace(entity, {
                mesh: { $case: 'cylinder', cylinder: { radiusBottom, radiusTop } },
                collisionMask: getCollisionMask(colliderLayers)
            });
        },
        setSphere(entity, colliderLayers) {
            theComponent.createOrReplace(entity, {
                mesh: { $case: 'sphere', sphere: {} },
                collisionMask: getCollisionMask(colliderLayers)
            });
        }
    };
}
