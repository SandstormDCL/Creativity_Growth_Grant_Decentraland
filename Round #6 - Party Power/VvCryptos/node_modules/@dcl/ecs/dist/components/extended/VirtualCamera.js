import { VirtualCamera } from '../generated/index.gen';
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
export function defineVirtualCameraComponent(engine) {
    const theComponent = VirtualCamera(engine);
    return {
        ...theComponent,
        Transition: CameraTransitionHelper
    };
}
