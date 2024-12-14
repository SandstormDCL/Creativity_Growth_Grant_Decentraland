import { 
    engine, 
    Transform, 
    MeshRenderer, 
    Material, 
    Entity, 
    MeshCollider, 
    GltfContainer, 
    TextShape, 
     
  } from '@dcl/sdk/ecs'
  import { Vector3, Color4, Quaternion } from '@dcl/sdk/math'
  
  let isElevatorActive = false
  let elevatorDirection: 'up' | 'down' = 'up'
  const elevatorSpeed = 15 / 10 // speed 15 meters in 10 seconds
  
  export function setupScene() {
    // Main GLB scene
    const mainScene: Entity = engine.addEntity()
    Transform.create(mainScene, {
      position: Vector3.create(16, 0, 16),
      scale: Vector3.create(1, 1, 1), 
    })
    GltfContainer.create(mainScene, {
      src: 'models/ultimate_party_main.glb', 
    })
  
    // Create elevator
    const elevator: Entity = engine.addEntity()
    Transform.create(elevator, {
      position: Vector3.create(23.3, 1.5, 22.4),
      scale: Vector3.create(3.5, 0.5, 3.5),
    })
    MeshRenderer.setCylinder(elevator)
    MeshCollider.setCylinder(elevator) // Add collider to the elevator
    Material.setPbrMaterial(elevator, {
      albedoColor: Color4.Green(),
      metallic: 0.2,
      roughness: 0.9,
    })
  
    // System to animate the elevator
    engine.addSystem((dt: number) => {
      if (!isElevatorActive) return
  
      const transform = Transform.getMutable(elevator)
  
      if (elevatorDirection === 'up') {
        transform.position.y += elevatorSpeed * dt
        if (transform.position.y >= 15) {
          elevatorDirection = 'down'
        }
      } else if (elevatorDirection === 'down') {
        transform.position.y -= elevatorSpeed * dt
        if (transform.position.y <= 1.5) {
          transform.position.y = 1.5
          elevatorDirection = 'up'
        }
      }
    })
  
    // Create animated lights
    const numberOfLights = 4
    const lights: Entity[] = []
    const lightColors = [Color4.Red(), Color4.Blue(), Color4.Green(), Color4.Yellow()]
  
    for (let i = 0; i < numberOfLights; i++) {
      const light: Entity = engine.addEntity()
      lights.push(light)
  
      Transform.create(light, {
        position: Vector3.create(16, 6.1, 24),
        scale: Vector3.create(4, 0.5, 4),
      })
  
      MeshRenderer.setSphere(light)
      Material.setPbrMaterial(light, {
        emissiveColor: lightColors[i],
        emissiveIntensity: 4,
        metallic: 1,
        roughness: 0,
      })
    }
  
    // System to animate the lights
    engine.addSystem(() => {
      const time = Date.now() / 1000
      lights.forEach((light, index) => {
        const transform = Transform.getMutable(light)
        const radius = 4
        const speed = 1
        const phase = (index * Math.PI * 2) / numberOfLights
        transform.position.x = 16 + Math.cos(time * speed + phase) * radius
        transform.position.z = 16 + Math.sin(time * speed + phase) * radius
      })
    })
  
    // Add Ultimate Game Party Title
    const titleEntity: Entity = engine.addEntity()
    Transform.create(titleEntity, {
      position: Vector3.create(16, 12, 27),
      scale: Vector3.create(4, 6, 6),
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })
  
    TextShape.create(titleEntity, {
      text: 'ULTIMATE GAME PARTY',
      fontSize: 5, // Large size
      textColor: Color4.White(), // Initial color
     
    })
  
    // Define LED colors
    const ledColors = [
      Color4.Red(),
      Color4.Green(),
      Color4.Blue(),
      Color4.Yellow(),
      Color4.Magenta(),
      Color4.White(),
    ]
  
    let currentColorIndex = 0
  
    // System to dynamically change title colors
    engine.addSystem(() => {
      const mutableText = TextShape.getMutable(titleEntity)
      if (mutableText) {
        currentColorIndex = (currentColorIndex + 1) % ledColors.length
        mutableText.textColor = ledColors[currentColorIndex]
      }
    })
  }
  
  // Activate the elevator from the Memory Game
  export function activateElevator() {
    isElevatorActive = true
  }
  