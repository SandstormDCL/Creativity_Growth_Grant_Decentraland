import { engine, GltfContainer, Transform, Material, MeshRenderer, MeshCollider, pointerEventsSystem, InputAction, Entity } from '@dcl/sdk/ecs'
import { Vector3, Color4 } from '@dcl/sdk/math'
import { triggerEmote } from '~system/RestrictedActions'
import { updateMessage } from './ui' // Import the updateMessage function

export function setupEmotes() {
  // Create the activation sphere for emotes
  const activationSphere: Entity = engine.addEntity()
  Transform.create(activationSphere, {
    position: Vector3.create(20, 8, 20), // Positioned in front of the player
    scale: Vector3.create(0.5, 0.5, 0.5), // Larger size for easier interaction
  })
  MeshRenderer.setSphere(activationSphere) // Render as a sphere
  MeshCollider.setSphere(activationSphere) // Add a collider for interaction
  Material.setPbrMaterial(activationSphere, {
    albedoColor: Color4.Yellow(), // Initial color: Yellow
    metallic: 0.5,
    roughness: 0.8,
  })

  let emotesActivated = false // Tracks whether emotes are active
  const correctSequence = ["wave", "fistpump", "dance"] // Correct emote sequence
  const selectedEmotes: string[] = [] // Track selected emotes

  // Define emote cubes
  const emoteCubes = [
    { emote: "wave", position: Vector3.create(18, 8, 20), entity: null as unknown as Entity },
    { emote: "fistpump", position: Vector3.create(14, 8, 20), entity: null as unknown as Entity },
    { emote: "dance", position: Vector3.create(10, 8, 20), entity: null as unknown as Entity },
  ]

  // Initialize the emote cubes
  emoteCubes.forEach((cube, index) => {
    const entity: Entity = createEmoteCube(`models/emote_cube_${index + 1}.glb`, cube.position)
    cube.entity = entity

    // Add interaction to the emote cube
    pointerEventsSystem.onPointerDown(
      {
        entity,
        opts: { button: InputAction.IA_PRIMARY, hoverText: `Perform ${cube.emote}` }, // Hover text only active when sphere is activated
      },
      () => {
        if (!emotesActivated) {
          updateMessage('Emotes are not activated yet!') // Update UI message
          return
        }

        if (selectedEmotes.includes(cube.emote)) {
          updateMessage('Select only one unique emote at a time.') // Prevent selecting the same emote twice
          return
        }

        // Trigger the emote
        triggerEmote({ predefinedEmote: cube.emote }) // Trigger the predefined emote

        selectedEmotes.push(cube.emote)

        // Check if sequence is complete
        if (selectedEmotes.length === correctSequence.length) {
          if (JSON.stringify(selectedEmotes) === JSON.stringify(correctSequence)) {
            updateMessage('The winner! You successfully completed the sequence.') // Success message
          } else {
            updateMessage('Keep trying! Incorrect sequence.') // Failure message
          }

          // Reset the game after completing the sequence
          resetEmotes(activationSphere, emoteCubes)
          emotesActivated = false
        }
      }
    )
  })

  // Add pointer interaction for the activation sphere
  pointerEventsSystem.onPointerDown(
    {
      entity: activationSphere,
      opts: { button: InputAction.IA_PRIMARY, hoverText: 'Activate/Deactivate Emotes' },
    },
    () => {
      // Toggle activation
      emotesActivated = !emotesActivated
      selectedEmotes.length = 0 // Reset selected emotes

      if (emotesActivated) {
        updateMessage('Emotes activated!') // Update UI message

        // Change sphere color to indicate activation
        Material.setPbrMaterial(activationSphere, {
          albedoColor: Color4.Green(), // Green when activated
          metallic: 0.5,
          roughness: 0.8,
        })

        // Update emote cubes to emissive and enable hover
        emoteCubes.forEach((cube) => {
          Material.setPbrMaterial(cube.entity, {
            albedoColor: Color4.White(),
            emissiveColor: Color4.Green(),
            emissiveIntensity: 5,
            metallic: 0.2,
            roughness: 0.5,
          })
        })
      } else {
        updateMessage('Emotes deactivated!') // Update UI message

        // Reset sphere and emotes
        resetEmotes(activationSphere, emoteCubes)
      }
    }
  )
}

// Function to create an emote cube with a specific position
function createEmoteCube(modelPath: string, position: Vector3): Entity {
  const cube: Entity = engine.addEntity()
  Transform.create(cube, { scale: Vector3.create(1, 1, 1), position }) // Set the position here
  GltfContainer.create(cube, { src: modelPath })
  Material.setPbrMaterial(cube, {
    albedoColor: Color4.Gray(), // Gray color initially
    metallic: 0.5,
    roughness: 0.8,
  })
  return cube
}

// Function to reset emotes and the sphere
function resetEmotes(activationSphere: Entity, emoteCubes: { entity: Entity }[]) {
  // Reset sphere
  Material.setPbrMaterial(activationSphere, {
    albedoColor: Color4.Yellow(), // Back to yellow
    metallic: 0.5,
    roughness: 0.8,
  })

  // Reset emote cubes
  emoteCubes.forEach((cube) => {
    Material.setPbrMaterial(cube.entity, {
      albedoColor: Color4.Gray(), // Reset to gray
      emissiveColor: Color4.Black(),
      emissiveIntensity: 0,
      metallic: 0.5,
      roughness: 0.8,
    })
  })
}
