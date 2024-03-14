// We define the empty imports so the auto-complete feature works as expected.
import { Vector3 } from '@dcl/sdk/math'
import { createGLTF } from './factory'
import { createPlayArea } from './autoPlaying'

export function main() {
  /**
   * First Music Scene Models - Lo-Fi
   */

  ////add animation and sound modified area
  createPlayArea(
    Vector3.create(32, 1, 8),
    Vector3.create(16, 1, 20),
    'sounds/corporate-beat-ambient-ig-version-loop-2-7299.mp3',
    'models/wave-lofi.glb',
    'KeyAction',
    'models/base-lofi.glb',
    'Key.003Action',
    'models/high-lofi.glb',
    'Key.004Action.001'
  )
  /**
   * Second Music Scene Models - Rock
   */

  ////add animation and sound modified area
  createPlayArea(
    Vector3.create(32 - 17, 2, 8 - 6),
    Vector3.create(16, 1, 20),
    'sounds/energetic-and-upbeat-indie-rock-positive-loop-2-30s-5877.mp3',
    'models/wave-rock.glb',
    'Key.001Action',
    'models/base-rock.glb',
    'Key.006Action',
    'models/high-rock.glb',
    'Key.007Action'
  )
  /**
   * Second Music Scene Models - Acoustic
   */

  ////add animation and sound modified area
  createPlayArea(
    Vector3.create(32 - 34, 1, 8),
    Vector3.create(16, 1, 20),
    'sounds/inspiring-cinematic-uplifting-piano-loop-8703.mp3',
    'models/wave-classic.glb',
    'Key.002Action',
    'models/base-classic.glb',
    'Key.009Action',
    'models/high-classic.glb',
    'Key.008Action'
  )
  /**
   * Other Scene Models
   */
  //Import models - Steps
  createGLTF({ position: { x: 32, y: 0, z: 8 } }, 'models/portal.glb')
  // import ground model
  createGLTF({ position: { x: 32, y: 0, z: 8 } }, 'models/ground.glb')
  // import enclosure model
  createGLTF({ position: { x: 32, y: 0, z: 8 } }, 'models/enclosure.glb')
}
