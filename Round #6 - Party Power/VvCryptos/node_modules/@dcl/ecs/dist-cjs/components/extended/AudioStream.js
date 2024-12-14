"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineAudioStreamComponent = void 0;
const index_gen_1 = require("../generated/index.gen");
function defineAudioStreamComponent(engine) {
    const theComponent = (0, index_gen_1.AudioStream)(engine);
    const AudioEvent = (0, index_gen_1.AudioEvent)(engine);
    return {
        ...theComponent,
        getAudioState(entity) {
            const AudioStream = theComponent.getMutableOrNull(entity);
            if (!AudioStream || !AudioEvent.has(entity))
                return undefined;
            const lastEvent = Array.from(AudioEvent.get(entity)).pop();
            return lastEvent;
        }
    };
}
exports.defineAudioStreamComponent = defineAudioStreamComponent;
