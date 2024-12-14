import { AudioStream, AudioEvent as defineAudioEventComponent } from '../generated/index.gen';
export function defineAudioStreamComponent(engine) {
    const theComponent = AudioStream(engine);
    const AudioEvent = defineAudioEventComponent(engine);
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
