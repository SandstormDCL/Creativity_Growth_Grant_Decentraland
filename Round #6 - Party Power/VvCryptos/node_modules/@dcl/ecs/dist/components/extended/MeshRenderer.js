import { MeshRenderer } from '../generated/index.gen';
export function defineMeshRendererComponent(engine) {
    const theComponent = MeshRenderer(engine);
    return {
        ...theComponent,
        setBox(entity, uvs) {
            theComponent.createOrReplace(entity, {
                mesh: { $case: 'box', box: { uvs: uvs || [] } }
            });
        },
        setPlane(entity, uvs) {
            theComponent.createOrReplace(entity, {
                mesh: { $case: 'plane', plane: { uvs: uvs || [] } }
            });
        },
        setCylinder(entity, radiusBottom, radiusTop) {
            theComponent.createOrReplace(entity, {
                mesh: { $case: 'cylinder', cylinder: { radiusBottom, radiusTop } }
            });
        },
        setSphere(entity) {
            theComponent.createOrReplace(entity, {
                mesh: { $case: 'sphere', sphere: {} }
            });
        }
    };
}
