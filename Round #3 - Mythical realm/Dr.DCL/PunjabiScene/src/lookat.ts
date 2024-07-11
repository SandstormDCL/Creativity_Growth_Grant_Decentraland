import { Transform, engine } from "@dcl/sdk/ecs"
import { LookAtPlayer } from "."
import { Quaternion, Vector3 } from "@dcl/sdk/math"

export function rotate(dt: number) {
    for (const [entity, data] of engine.getEntitiesWith(LookAtPlayer)) {
        const cameraPosition: Vector3 = Transform.get(engine.CameraEntity).position;

        // Get the object's position
        const objectPosition: Vector3 = Transform.get(entity).position;

        // Calculate the direction from the object to the camera

        const direction = Vector3.subtract(cameraPosition, objectPosition);

        // Calculate the rotation quaternion based on the direction
        const rot = Quaternion.lookRotation(direction, Vector3.Up());
        const rotation: Quaternion = { x: 0, y: rot.y, z: 0, w: rot.w };

        // Set the object's rotation to the calculated rotation
        Transform.getMutable(entity).rotation = rotation;
    }
    //console.log(Transform.get(engine.PlayerEntity).position)
}