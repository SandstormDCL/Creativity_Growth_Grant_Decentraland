// We define the empty imports so the auto-complete feature works as expected.
import { Color3, Color4, Quaternion, Vector3 } from '@dcl/sdk/math'
import {
  Animator,
  AudioSource,
  AvatarAttach,
  Billboard,
  BillboardMode,
  CameraModeArea,
  CameraType,
  Font,
  GltfContainer,
  Material,
  MeshRenderer,
  TextShape,
  Transform,
  VisibilityComponent,
  engine,
  pointerEventsSystem
} from '@dcl/sdk/ecs'
import { createGLTF, createImage, createText, createTextNarrow } from './factory'

export function main() {
  // import exterior model
  createGLTF({ position: { x: 16, y: 2, z: 8 } }, 'models/Exterior.glb')
  // import interior model
  createGLTF({ position: { x: 16, y: 2, z: 8 } }, 'models/Interior.glb')
  // import ground model
  createGLTF({ position: { x: 16, y: 0, z: 8 } }, 'models/GroundPlane.glb')

  // first-person Camera modifiers
  const CameraModeAreaEntity = engine.addEntity()
  CameraModeArea.create(CameraModeAreaEntity, {
    area: Vector3.create(32, 5, 16),
    mode: CameraType.CT_FIRST_PERSON
  })
  Transform.create(CameraModeAreaEntity, {
    position: Vector3.create(16, 0, 8)
  })

  // add text shapes for gallery description
  const signBig = engine.addEntity()
  Transform.create(signBig, {
    position: Vector3.create(9, 2.85, 7.98),
    rotation: Quaternion.fromEulerDegrees(0, 0, 90)
  })
  TextShape.createOrReplace(signBig, {
    text: 'FINE ARTS\nCURATED BY\nOVA.DESIGN',
    textColor: { r: 0, g: 0, b: 1, a: 0.8 },
    fontSize: 5,
    font: Font.F_MONOSPACE,
    textAlign: 3,
    lineSpacing: -20,
    shadowBlur: 0.2,
    shadowColor: { r: 1, g: 1, b: 1 },
    shadowOffsetY: -1,
    shadowOffsetX: 1
  })
  const signBig2 = engine.addEntity()
  Transform.create(signBig2, {
    position: Vector3.create(23, 2.85, 8.02),
    rotation: Quaternion.fromEulerDegrees(0, 180, 90)
  })
  TextShape.createOrReplace(signBig2, {
    text: 'FINE ARTS\nCURATED BY\nOVA.DESIGN',
    textColor: { r: 0, g: 0, b: 1, a: 0.8 },
    fontSize: 5,
    font: Font.F_MONOSPACE,
    textAlign: 3,
    lineSpacing: -20,
    shadowBlur: 0.2,
    shadowColor: { r: 1, g: 1, b: 1 },
    shadowOffsetY: -1,
    shadowOffsetX: 1
  })

  ////// Fine Arts
  //// import art 1
  const TableauBox = createGLTF(
    { position: { x: 12.6, y: 2.5, z: 12.5 }, scale: { x: 0.75, y: 0.75, z: 0.75 } },
    'models/TableauBox.glb'
  )
  //import painting image
  createImage(
    {
      position: Vector3.create(12.375, 3.9, 8.7),
      scale: { x: 1, y: 1.03, z: 0.05 },
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    },
    'https://raw.githubusercontent.com/OVA-Design/OVA_DCL-Fine-Arts/main/images/Tableau_I_by_Piet_Mondriaan.jpg'
  )
  // add text shapes for art description
  createText(
    { position: Vector3.create(10.6, 3, 8.7), rotation: Quaternion.fromEulerDegrees(0, 180, 0) },
    "<b><i>Tableau I</i></b> (1921) by Piet Mondrian \n \nThis is a significant work by Piet Mondrian, a pioneer of neoplasticism and a leading figure in the De Stijl movement. The painting features Mondrian's trademark grid of intersecting black lines, filled with geometric shapes painted in primary colors. This style, characterized by abstraction, simplicity, and a reduction to essential forms and colors, represents Mondrian's quest for a universal language of art that transcends cultural boundaries."
  )

  //// import art 2
  const WaveofKanagawa = createGLTF(
    { position: { x: 21, y: 3, z: 2 }, scale: { x: 0.5, y: 0.5, z: 0.5 } },
    'models/WaveofKanagawa.glb'
  )
  // Billboard.create(WaveofKanagawa, { billboardMode: BillboardMode.BM_Y })
  //import painting image
  createImage(
    {
      position: Vector3.create(20.5 - 1.75 / 2, 3.78, 7.35),
      scale: { x: 1.488 / 3.9, y: 1.01 / 3.9, z: 0.001 },
      rotation: Quaternion.fromEulerDegrees(0, 0, 0)
    },
    'https://raw.githubusercontent.com/OVA-Design/OVA_DCL-Fine-Arts/main/images/Tsunami_by_hokusai.jpg'
  )
  // add text shapes for art description
  createText(
    { position: Vector3.create(21.3, 2.95, 7.35), rotation: Quaternion.fromEulerDegrees(0, 0, 0) },
    "<b><i>The Great Wave off Kanagawa</i></b> (1831) by Katsushika Hokusai \n \nThis is a renowned woodblock print by Katsushika Hokusai, part of his series '' Thirty-Six Views of Mount Fuji. '' This masterpiece depicts a colossal wave in the foreground, about to crash over fishing boats beneath the iconic silhouette of Mount Fuji. The dynamic composition, use of vibrant colors, and meticulous detailing showcase Hokusai's mastery of the ukiyo-e genre. The print is a quintessential representation of Japanese art and has become an enduring symbol of the power of nature."
  )

  //// import art 3
  //import 3d asset
  const BustofNefertiti = createGLTF(
    { position: { x: 27, y: 3.38, z: 2 }, scale: { x: 1, y: 1, z: 1 } },
    'models/Nefertiti.glb'
  )
  // Billboard.create(BustofNefertiti, { billboardMode: BillboardMode.BM_Y })s
  //import painting image
  createImage(
    {
      position: Vector3.create(30.25, 3.75, 6.5375),
      scale: { x: 1.375, y: 0.4, z: 0.01 },
      rotation: Quaternion.fromEulerDegrees(0, 90, 0)
    },
    'https://raw.githubusercontent.com/OVA-Design/OVA_DCL-Fine-Arts/main/images/Papyrus-Hunefer-half-1.jpg'
  )
  createImage(
    {
      position: Vector3.create(30.25, 3.75, 6.5375 - 1.375),
      scale: { x: 1.375, y: 0.4, z: 0.01 },
      rotation: Quaternion.fromEulerDegrees(0, 90, 0)
    },
    'https://raw.githubusercontent.com/OVA-Design/OVA_DCL-Fine-Arts/main/images/Papyrus-Hunefer-half-2.jpg'
  )
  createImage(
    {
      position: Vector3.create(30.25, 3.75, 3.1 + 0.6875),
      scale: { x: 1.375, y: 0.4, z: 0.01 },
      rotation: Quaternion.fromEulerDegrees(0, 90, 0)
    },
    'https://raw.githubusercontent.com/OVA-Design/OVA_DCL-Fine-Arts/main/images/Papyrus-Hunefer-half-3.jpg'
  )
  createImage(
    {
      position: Vector3.create(30.25, 3.75, 3.1 - 0.6875),
      scale: { x: 1.375, y: 0.4, z: 0.01 },
      rotation: Quaternion.fromEulerDegrees(0, 90, 0)
    },
    'https://raw.githubusercontent.com/OVA-Design/OVA_DCL-Fine-Arts/main/images/Papyrus-Hunefer-half-4.jpg'
  )
  // add text shapes for art description
  createText(
    { position: Vector3.create(30.25, 2.47, 6.47), rotation: Quaternion.fromEulerDegrees(0, 90, 0) },
    "<b><i>Weighing of the Heart (Anubis Details), from Book of the Dead of Ani.</i></b> (1250 BCE) \n \nThe ''Weighing of the Heart (Anubis Details)'' is a scene depicted in the Book of the Dead of Ani, an ancient Egyptian funerary text. It is considered to be the finest extant example of the Egyptian Book of the Dead. In this illustration, Anubis, the jackal-headed god associated with mummification and the afterlife, is shown conducting the crucial judgment process. Anubis weighs the heart of the deceased against the feather of Ma'at, the goddess of truth and justice. This symbolic act determines the fate of the soul in the afterlife. The scene encapsulates the Egyptian belief in the importance of a virtuous life and the pursuit of balance, ensuring a positive outcome in the journey to the hereafter."
  )
  // add text shapes for art description
  createText(
    { position: Vector3.create(26.675, 2.5, 3.02), rotation: Quaternion.fromEulerDegrees(45, 180, 0) },
    "<b><i>The Bust of Nefertiti</i></b> (1345 BCE) \n \nA pinnacle of classical Egyptian art from the 14th century BCE, epitomizes the era's aesthetic principles. Carved in limestone and gypsum during the Amarna Period, the bust captures Queen Nefertiti with classical Egyptian precision—displaying an elongated neck, finely sculpted features, and an intricately adorned crown. Housed in the Neues Museum, Berlin, this masterpiece remains a testament to the timeless elegance and artistic mastery of classical Egyptian art."
  )
  // set text background
  const textBgEntity = engine.addEntity()

  MeshRenderer.setPlane(textBgEntity)

  Transform.create(textBgEntity, {
    position: { x: 26.675, y: 3, z: 2.5 },
    scale: { x: 1.6, y: 0.75, z: 1 },
    rotation: Quaternion.fromEulerDegrees(45, 180, 0)
  })
  Material.setPbrMaterial(textBgEntity, {
    albedoColor: { r: 0.9137, g: 0.9019, b: 0.8941, a: 1 },
    roughness: 0.9,
    emissiveColor: { r: 0.9137, g: 0.9019, b: 0.8941 },
    emissiveIntensity: 2
  })

  //// import art 4
  //import 3d asset
  const MonaLisa = createGLTF(
    {
      position: { x: 12.7, y: 2.4, z: 7.2 },
      scale: { x: 0.5, y: 0.5, z: 0.5 },
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    },
    'models/MonaLisa.glb'
  )
  //import painting image
  createImage(
    {
      position: Vector3.create(12.625, 3.6, 1.72),
      scale: { x: 1 / 1.85, y: 1.492 / 1.85, z: 0.01 },
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    },
    'https://raw.githubusercontent.com/OVA-Design/OVA_DCL-Fine-Arts/main/images/Mona_Lisa%2C_by_Leonardo_da_Vinci.jpg'
  )
  // add text shapes for art description
  createText(
    { position: Vector3.create(14.5, 3, 1.65), rotation: Quaternion.fromEulerDegrees(0, 180, 0) },
    "<b><i>Mona Lisa</i></b> (1503) by Leonardo da Vinci \n \nThe Mona Lisa, painted by Leonardo da Vinci around 1503-1506, is a masterpiece of Renaissance portraiture. The painting features Lisa Gherardini, an Italian woman, with a captivating, enigmatic smile. Leonardo's use of sfumato, a technique blending subtle transitions between light and shadow, creates a lifelike and mysterious quality. This work is highly significant within the Renaissance movement, showcasing the era's emphasis on humanism, scientific observation, and the pursuit of realism in art. The Mona Lisa remains a symbol of artistic achievement and cultural legacy, representing the pinnacle of Renaissance portraiture."
  )

  //// import art 5
  const Convergence = createGLTF(
    { position: { x: 20, y: 2, z: 9 }, scale: { x: 1.5, y: 1.3, z: 1.5 } },
    'models/Convergence.glb'
  )
  //import painting image
  createImage(
    {
      position: Vector3.create(18.5, 4, 14.35),
      scale: { x: 1.646 * 2.4, y: 1 * 2.4, z: 0.08 },
      rotation: Quaternion.fromEulerDegrees(0, 0, 0)
    },
    'https://raw.githubusercontent.com/OVA-Design/OVA_DCL-Fine-Arts/main/images/Convergence_AI.png'
  )
  // add text shapes for art description
  createTextNarrow(
    { position: Vector3.create(16, 2.85, 14.35), rotation: Quaternion.fromEulerDegrees(0, 0, 0) },
    "<b><i>Convergence</i></b> (AI generated) of Jackson Pollock style \n \nA seminal piece in the abstract expressionist movement. Known for his innovative ''drip painting'' technique, Pollock creates a dynamic and chaotic composition with splatters and drips of paint on a large canvas. ''Convergence'' represents the spontaneity and emotional intensity characteristic of abstract expressionism, challenging conventional notions of control and order in art."
  )

  //// import art 6
  const SunriseImpression = createGLTF(
    {
      position: { x: 2, y: 2.8, z: 5 },
      scale: { x: 1.3, y: 1.3, z: 1.3 },
      rotation: Quaternion.fromEulerDegrees(0, 90, 0)
    },
    'models/MonetSunrise.glb'
  )
  //import painting image
  createImage(
    {
      position: Vector3.create(5.375, 3.7, 1.72),
      scale: { x: 1.29 / 1.85, y: 1 / 1.85, z: 0.01 },
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    },
    'https://raw.githubusercontent.com/OVA-Design/OVA_DCL-Fine-Arts/main/images/Monet_Impression_Sunrise.jpg'
  )
  // add text shapes for art description
  createText(
    { position: Vector3.create(3.6, 2.95, 1.65), rotation: Quaternion.fromEulerDegrees(0, 180, 0) },
    "<b><i>Impression, Sunrise</i></b> (1872) by Claude Monet \n \nClaude Monet's Impression, Sunrise is a seminal work of the Impressionist movement, capturing a hazy harbor sunrise with loose brushstrokes and a focus on atmospheric effects. This piece exemplifies the movement's departure from academic precision, opting instead for the transient ‘’impression’’ of a scene. Monet's innovative approach to light and color had a profound impact on the trajectory of modern art."
  )

  //// import art 7
  const LaDance = createGLTF(
    {
      position: { x: 28.5, y: 2.1, z: 10.5 },
      scale: { x: 1, y: 1, z: 1 },
      rotation: Quaternion.fromEulerDegrees(0, 270, 0)
    },
    'models/LaDance.glb'
  )
  //import painting image
  createImage(
    {
      position: Vector3.create(27.5, 4.1, 14.35),
      scale: { x: 1.504 * 2.7, y: 1 * 2.7, z: 0.08 },
      rotation: Quaternion.fromEulerDegrees(0, 0, 0)
    },
    'https://raw.githubusercontent.com/OVA-Design/OVA_DCL-Fine-Arts/main/images/henri-matisse-dance-painting.jpg'
  )
  // add text shapes for art description
  createTextNarrow(
    { position: Vector3.create(30, 2.9, 14.35), rotation: Quaternion.fromEulerDegrees(0, 0, 0) },
    "<b><i>La Dance</i></b> (1910) \nby Henri Matisse \n \nHenri Matisse's ‘’Dance’’ is a groundbreaking painting that exemplifies the Fauvist movement. The artwork features five nude figures joyously dancing in a circle against a background of bold, expressive colors. Matisse's use of color as a primary means of expression, coupled with the rhythmic composition, captures the essence of Fauvism—a movement known for its emotional intensity and a departure from traditional artistic norms."
  )

  //// import art 8
  const CampbellSoupCans = createGLTF(
    {
      position: { x: 5, y: 2, z: 9 },
      scale: { x: 1, y: 1, z: 1 },
      rotation: Quaternion.fromEulerDegrees(0, 90, 0)
    },
    'models/CampbellSoupCans.glb'
  )
  // add text shapes for art description
  createTextNarrow(
    { position: Vector3.create(1.65, 3.4, 14), rotation: Quaternion.fromEulerDegrees(0, 270, 0) },
    "<b><i>Campbell's Soup Cans</i></b> \n(AI generated) of Andy Warhol style\n \nAn iconic piece in the pop art movement. Consisting of 32 canvases, each depicting a different variety of Campbell's soup, the artwork challenges traditional notions of artistic subject matter. Warhol elevates mass-produced consumer goods to the status of high art, highlighting the influence of popular culture on artistic expression. ''Campbell's Soup Cans'' is a commentary on consumerism, mass production, and the intersection of art and everyday life."
  )

  // Defining behavior. See `src/systems.ts` file.
  // engine.addSystem(circularSystem)
  // engine.addSystem(changeColorSystem)

  // draw UI. Here is the logic to spawn cubes.
  // setupUi()
}
