import { GltfContainer, Transform, engine } from '@dcl/sdk/ecs'
import { LookAtPlayer } from '.'

export function SetupTags() {
    const StoryTag = engine.addEntity();

    GltfContainer.create(StoryTag, {
        src: 'models/StoryTag.glb'
    });

    Transform.create(StoryTag, {
        position: { x: 40, y: 2.75, z: 40 },
        scale: { x: 0.995, y: 0.995, z: 0.995 }
    });
    LookAtPlayer.create(StoryTag);

    
    const FoodTag = engine.addEntity();

    GltfContainer.create(FoodTag, {
        src: 'models/CookingTag.glb'
    });

    Transform.create(FoodTag, {
        position: { x: 20, y: 2.75, z: 33 },
        scale: { x: 0.995, y: 0.995, z: 0.995 }
    });
    LookAtPlayer.create(FoodTag);

    const FindTag = engine.addEntity();

    GltfContainer.create(FindTag, {
        src: 'models/FindTag.glb'
    });

    Transform.create(FindTag, {
        position: { x: 58, y: 2.75, z: 58 },
        scale: { x: 0.995, y: 0.995, z: 0.995 }
    });
    LookAtPlayer.create(FindTag);
}
