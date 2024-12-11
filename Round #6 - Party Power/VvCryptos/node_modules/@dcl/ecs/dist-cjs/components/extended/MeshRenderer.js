"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineMeshRendererComponent = void 0;
const index_gen_1 = require("../generated/index.gen");
function defineMeshRendererComponent(engine) {
    const theComponent = (0, index_gen_1.MeshRenderer)(engine);
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
exports.defineMeshRendererComponent = defineMeshRendererComponent;
