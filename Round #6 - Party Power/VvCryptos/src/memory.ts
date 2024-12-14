import {
    engine,
    Transform,
    Material,
    MeshRenderer,
    MeshCollider,
    pointerEventsSystem,
    InputAction,
    Entity,
  } from '@dcl/sdk/ecs'
  import { Vector3, Color4, Quaternion } from '@dcl/sdk/math'
  import { updateMessage } from './ui'
  import { activateElevator } from './scene'
  
  export class MemoryGame {
    private spheres: Entity[] = []
    private sphereColors: Color4[] = []
    private isLocked: boolean[] = []
    private firstSelectedIndex: number = -1
    private score: number = 0
    private canSelect: boolean = true
    private resetQueue: { first: number; second: number; elapsed: number }[] = []
  
    constructor() {
      const memoryBasePosition = Vector3.create(14, 3.2, 10) // Base position
      const spacing = 1 // Spacing between spheres
      const colors = [
        Color4.Red(),
        Color4.Blue(),
        Color4.Green(),
        Color4.Yellow(),
        Color4.create(1, 0, 1, 1), // Magenta
        Color4.create(0, 1, 1, 1), // Cyan
        Color4.create(0.5, 0.5, 0.5, 1), // Gray
        Color4.create(0, 0.5, 0.5, 1), // Teal
      ]
  
      this.sphereColors = [...colors, ...colors]
      this.shuffleArray(this.sphereColors)
  
      // Crear esferas
      for (let i = 0; i < 16; i++) {
        const row = Math.floor(i / 8)
        const col = i % 8
        const position = Vector3.add(
          memoryBasePosition,
          Vector3.create(col * spacing, row * spacing, 0)
        ) // Segunda fila más alta
  
        const sphere: Entity = engine.addEntity()
        this.spheres.push(sphere)
        this.isLocked[i] = false
  
        Transform.create(sphere, {
          position,
          scale: Vector3.create(0.8, 0.2, 0.8), // Esferas chatas
          rotation: Quaternion.fromEulerDegrees(0, 90, 90), // Rotated 90 degrees on the Z-axis
        })
        MeshRenderer.setSphere(sphere)
        MeshCollider.setSphere(sphere)
        Material.setPbrMaterial(sphere, { albedoColor: Color4.White() })
  
        this.setupSphereClick(sphere, i)
      }
  
      engine.addSystem((dt) => this.update(dt))
    }
  
    private shuffleArray(array: Color4[]): void {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
      }
    }
  
    private setupSphereClick(sphere: Entity, index: number): void {
      pointerEventsSystem.onPointerDown(
        {
          entity: sphere,
          opts: { button: InputAction.IA_PRIMARY, hoverText: 'Reveal' },
        },
        () => {
          if (!this.canSelect || this.isLocked[index]) return
  
          if (this.firstSelectedIndex === -1) {
            this.firstSelectedIndex = index
            Material.setPbrMaterial(sphere, { albedoColor: this.sphereColors[index] })
          } else if (this.firstSelectedIndex !== index) {
            Material.setPbrMaterial(sphere, { albedoColor: this.sphereColors[index] })
            this.checkMatch(this.firstSelectedIndex, index)
          }
        }
      )
    }
  
    private checkMatch(first: number, second: number): void {
      this.canSelect = false
  
      const firstColor = this.sphereColors[first]
      const secondColor = this.sphereColors[second]
  
      const colorsMatch =
        firstColor.r === secondColor.r &&
        firstColor.g === secondColor.g &&
        firstColor.b === secondColor.b &&
        firstColor.a === secondColor.a
  
      if (colorsMatch) {
        this.isLocked[first] = true
        this.isLocked[second] = true
        this.score++
  
        updateMessage(`Pairs found: ${this.score}/8`)
  
        if (this.score === 8) {
          this.handleVictory()
        }
  
        this.resetSelection()
      } else {
        this.resetQueue.push({ first, second, elapsed: 0 })
      }
    }
  
    private resetSelection(): void {
      this.firstSelectedIndex = -1
      this.canSelect = true
    }
  
    private handleVictory(): void {
      updateMessage('Congratulations! Elevator is now active. Find the sphere and guess the dance sequence.')
      activateElevator()
    }
  
    private update(dt: number): void {
      for (let i = this.resetQueue.length - 1; i >= 0; i--) {
        const resetItem = this.resetQueue[i]
        resetItem.elapsed += dt
  
        if (resetItem.elapsed >= 0.5) {
          Material.setPbrMaterial(this.spheres[resetItem.first], { albedoColor: Color4.White() })
          Material.setPbrMaterial(this.spheres[resetItem.second], { albedoColor: Color4.White() })
          this.resetQueue.splice(i, 1)
          this.resetSelection()
        }
      }
    }
  
    // Rotar las esferas en grupo
    public rotateGroup(angle: number): void {
      const radians = angle * (Math.PI / 180)
      const cos = Math.cos(radians)
      const sin = Math.sin(radians)
      const centerX = 8
      const centerZ = 24
  
      this.spheres.forEach((sphere) => {
        const transform = Transform.getMutable(sphere)
        const x = transform.position.x - centerX
        const z = transform.position.z - centerZ
        transform.position.x = centerX + x * cos - z * sin
        transform.position.z = centerZ + x * sin + z * cos
      })
    }
  }
  
  export function setupMemoryGame() {
    const memoryGame = new MemoryGame()
    // Rotar esferas en 45 grados (opcional)
    memoryGame.rotateGroup(0)
  }
  