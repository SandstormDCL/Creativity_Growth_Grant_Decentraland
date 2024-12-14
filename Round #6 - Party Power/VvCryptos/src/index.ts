// We define the empty imports so the auto-complete feature works as expected.
import {} from '@dcl/sdk/math'
import { engine } from '@dcl/sdk/ecs'

// Import systems, UI setup, and scene initialization
import { changeColorSystem, circularSystem } from './systems'
import { setupUi } from './ui'
import { setupScene } from './scene'
import { setupMemoryGame } from './memory'
import { setupEmotes } from './emotes'

export function main() {
  setupScene() // Elevator and lights
  setupMemoryGame() // Memory game
  setupEmotes() // Emotes with activation
}

  // Add systems to the engine (from systems.ts)
  engine.addSystem(circularSystem)
  engine.addSystem(changeColorSystem)

  // Set up the UI (from ui.tsx)
  setupUi()

  console.log('Scene and UI initialized successfully') // Log for confirmation
