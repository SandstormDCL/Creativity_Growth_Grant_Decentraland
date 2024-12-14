"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineVirtualCameraComponent = void 0;
const index_gen_1 = require("../generated/index.gen");
const CameraTransitionHelper = {
    Speed(speed) {
        return {
            $case: 'speed',
            speed
        };
    },
    Time(time) {
        return {
            $case: 'time',
            time
        };
    }
};
function defineVirtualCameraComponent(engine) {
    const theComponent = (0, index_gen_1.VirtualCamera)(engine);
    return {
        ...theComponent,
        Transition: CameraTransitionHelper
    };
}
exports.defineVirtualCameraComponent = defineVirtualCameraComponent;
