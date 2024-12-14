import { Entity, IEngine } from '../../engine';
import { LastWriteWinElementSetComponentDefinition } from '../../engine/component';
import { PBAudioEvent } from '../generated/index.gen';
import { PBAudioStream } from '../generated/pb/decentraland/sdk/components/audio_stream.gen';
/**
 * @public
 */
export interface AudioStreamComponentDefinitionExtended extends LastWriteWinElementSetComponentDefinition<PBAudioStream> {
    /**
     * @public
     *
     * Set playing=true the sound `$name`
     * @param entity - entity with AudioStream component
     * @param src - the path to the sound to play
     * @param resetCursor - the sound starts at 0 or continues from the current cursor position
     * @returns true in successful playing, false if it doesn't find the AudioStream component
     */
    getAudioState(entity: Entity): PBAudioEvent | undefined;
}
export declare function defineAudioStreamComponent(engine: Pick<IEngine, 'defineComponentFromSchema' | 'defineValueSetComponentFromSchema'>): AudioStreamComponentDefinitionExtended;
