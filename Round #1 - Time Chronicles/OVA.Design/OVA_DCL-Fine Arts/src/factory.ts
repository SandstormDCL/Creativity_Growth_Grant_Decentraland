import {
  Entity,
  engine,
  Transform,
  TransformType,
  GltfContainer,
  Material,
  MeshRenderer,
  TextureWrapMode,
  TextShape,
  Font
} from '@dcl/sdk/ecs'
import { Quaternion, Vector3 } from '@dcl/sdk/math'

// import glft factory
export function createGLTF(transform: Partial<TransformType>, src: string): Entity {
  const meshEntity = engine.addEntity()
  Transform.create(meshEntity, transform)
  // set gltf
  GltfContainer.create(meshEntity, { src })

  return meshEntity
}

//import painting image
export function createImage(transform: Partial<TransformType>, src: string): Entity {
  const imageEntity = engine.addEntity()
  Transform.create(imageEntity, transform)
  MeshRenderer.setBox(imageEntity)
  // set image material
  Material.setBasicMaterial(imageEntity, {
    texture: Material.Texture.Common({
      src: src,
      wrapMode: TextureWrapMode.TWM_REPEAT
    })
  })

  return imageEntity
}

// add text shapes for art description

export function createText(transform: Partial<TransformType>, text: string): Entity {
  const sign = engine.addEntity()
  Transform.create(sign, transform)
  TextShape.create(sign, {
    text: text,
    textColor: { r: 0, g: 0, b: 0, a: 1 },
    fontSize: 0.5,
    font: Font.F_SANS_SERIF,
    textAlign: 0,
    textWrapping: true,
    width: 1.5,
    height: 2,
    outlineColor: { r: 0, g: 0, b: 0 },
    outlineWidth: 0.1,
    // lineCount: 5,
    // lineSpacing: 30,
    shadowBlur: 0.5,
    shadowColor: { r: 0, g: 0, b: 0 },
    shadowOffsetY: 1,
    shadowOffsetX: -1
  })
  return sign
}

export function createTextNarrow(transform: Partial<TransformType>, text: string): Entity {
  const sign = engine.addEntity()
  Transform.create(sign, transform)
  TextShape.create(sign, {
    text: text,
    textColor: { r: 0, g: 0, b: 0, a: 1 },
    fontSize: 0.5,
    font: Font.F_SANS_SERIF,
    textAlign: 0,
    textWrapping: true,
    width: 0.75,
    height: 2,
    outlineColor: { r: 0, g: 0, b: 0 },
    outlineWidth: 0.1,
    // lineCount: 5,
    // lineSpacing: 30,
    shadowBlur: 0.5,
    shadowColor: { r: 0, g: 0, b: 0 },
    shadowOffsetY: 1,
    shadowOffsetX: -1
  })
  return sign
}