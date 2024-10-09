import { Entity, GltfContainer, InputAction, MeshCollider, Transform, engine, pointerEventsSystem, AvatarAttach, AvatarAnchorPointType, VisibilityComponent, Material, MeshRenderer } from "@dcl/sdk/ecs";
import { Vector3, Color4 } from "@dcl/sdk/math";
import { showPrompt1, showPrompt2, showPrompt3, showInstructions } from "./ui"; // Asegúrate de importar las funciones correctamente

export function buildload() {
  console.log("Scene loaded");
}

// Crear una entidad con el modelo all.glb
const entity = engine.addEntity(); // Create a new entity variable
GltfContainer.create(entity, { src: "models/all.glb" }); // Corrected the path assuming 'models' folder is at the root

// Give the entity a position via a transform component
Transform.create(entity, {
  position: Vector3.create(32, 0, 32), // Adjust position to fit the 4 parcels
  scale: Vector3.create(1, 1, 1) // Optional: Adjust scale if needed
});

// Crear una función para añadir un componente de interacción
function addInteraction(entity: Entity, onClick: () => void) {
  pointerEventsSystem.onPointerDown({ entity, opts: { button: InputAction.IA_PRIMARY, hoverText: 'Interact' } }, onClick);
}

// Función para crear un modelo GLB
function createModel(modelPath: string, position: Vector3, scale: Vector3 = Vector3.create(0.5, 0.5, 0.5)): Entity {
  const model = engine.addEntity();
  Transform.create(model, { position, scale });
  GltfContainer.create(model, { src: modelPath });
  MeshCollider.setBox(model); // Asumimos que los modelos GLB tienen colisionadores de caja
  VisibilityComponent.create(model, { visible: true });
  return model;
}

// Función para crear un cubo
function createCube(color: Color4, position: Vector3): Entity {
  const cube = engine.addEntity();
  Transform.create(cube, { position, scale: Vector3.create(0.75, 0.1, 0.75) }); // Ajustar escala para asegurarse de que sean visibles
  MeshCollider.setBox(cube);
  MeshRenderer.setBox(cube); // Asegurar que el cubo tenga una forma de caja para renderizar
  Material.setPbrMaterial(cube, { albedoColor: color });
  VisibilityComponent.create(cube, { visible: true });
  return cube;
}

// Variables para almacenar las esferas y su estado
let selectedSpheres: string[] = [];
let action1Completed = false;
let action2Completed = false;
let action3Completed = false;

// Crear modelos GLB para las esferas con posiciones específicas
const yellowSphere = createModel("models/choco.glb", Vector3.create(53.5, 1, 53), Vector3.create(1.75, 1.75, 1.75)); // Esfera amarilla (a)
const blueSphere = createModel("models/salt.glb", Vector3.create(6, 1, 17), Vector3.create(1.75, 1.75, 1.75));   // Esfera azul (b)
const redSphere = createModel("models/fries.glb", Vector3.create(52.89, 1, 8.8), Vector3.create(1.75, 1.75, 1.75));    // Esfera roja (c)
const greenSphere = createModel("models/icecream2.glb", Vector3.create(35.38, 1, 55.88), Vector3.create(1.75, 1.75, 1.75));  // Esfera verde (d)
const pinkSphere = createModel("models/jam.glb", Vector3.create(13.88,4.27 , 50.17), Vector3.create(1.75, 1.75, 1.75)); // Esfera rosa (e)
const purpleSphere = createModel("models/cheese.glb", Vector3.create(31, 4, 34), Vector3.create(1.75, 1.75, 1.75)); // Esfera violeta (f)
// Lista de todas las esferas para fácil manejo
const spheres = [yellowSphere, blueSphere, redSphere, greenSphere, pinkSphere, purpleSphere];

const blackCube = createCube(Color4.create(1, 0.84, 0, 1), Vector3.create(33, 1.2, 29)); // Cambiar color a dorado
const grayCube = createCube(Color4.create(1, 0.84, 0, 1), Vector3.create(32, 1.2, 29)); // Cambiar color a dorado
const darkBlueCube = createCube(Color4.create(1, 0.84, 0, 1), Vector3.create(29.3, 1.4, 29.3)); // Cambiar color a dorado


// Función para crear un modelo GLB específico al cubo
function createSpecificModel(modelPath: string, position: Vector3, promptFunction: () => void): Entity {
  const model = engine.addEntity();
  Transform.create(model, { position: Vector3.create(position.x, position.y + 0.1, position.z), scale: Vector3.create(2, 2, 2) });
  GltfContainer.create(model, { src: modelPath }); // Ruta al modelo GLB específico
  MeshCollider.setBox(model); // Asumimos que el modelo GLB tiene un colisionador de caja
  VisibilityComponent.create(model, { visible: true });

  // Hacer el modelo clickeable para mostrar la UI
  addInteraction(model, promptFunction);

  return model;
}


// Función para manejar la selección de esferas (modelos GLB)
function onModelClicked(model: Entity, modelName: string) {
  if (selectedSpheres.length < 2 && !selectedSpheres.includes(modelName)) {
    selectedSpheres.push(modelName);
    AvatarAttach.create(model, {
      avatarId: 'my-avatar', // Reemplaza con el ID del avatar real
      anchorPointId: AvatarAnchorPointType.AAPT_NAME_TAG // Punto de anclaje para el nombre del avatar
    });
    Transform.getMutable(model).position = Vector3.create(0, 2, 0); // Cambiar posición para hacerla visible en el avatar
    console.log(`Esfera ${modelName} recogida: ${selectedSpheres}`);
  } else {
    console.log(`No se puede recoger la esfera ${modelName}`);
  }

  // Verificar y habilitar los cubos correspondientes
  updateCubesVisibility();
}

// Función para verificar y habilitar cubos según las esferas seleccionadas y las acciones completadas
function updateCubesVisibility() {
  console.log(`Verificando visibilidad de los cubos. Esferas recogidas: ${selectedSpheres}`);
  if (!action1Completed) {
    if (selectedSpheres.includes('a') && selectedSpheres.includes('b')) {
      enableCube(blackCube, showPrompt1, "models/choco.glb");
    } else {
      disableCubeInteraction(blackCube);
    }
  }

  if (action1Completed && !action2Completed) {
    if (selectedSpheres.includes('c') && selectedSpheres.includes('d')) {
      enableCube(grayCube, showPrompt2, "models/fries.glb");
    } else {
      disableCubeInteraction(grayCube);
    }
  }

  if (action2Completed && !action3Completed) {
    if (selectedSpheres.includes('e') && selectedSpheres.includes('f')) {
      enableCube(darkBlueCube, showPrompt3, "models/jam.glb");
    } else {
      disableCubeInteraction(darkBlueCube);
    }
  }
}


// Función para habilitar un cubo
function enableCube(cube: Entity, promptFunction: () => void, modelPath: string) {
  addInteraction(cube, () => {
    if (cube === blackCube && selectedSpheres.includes('a') && selectedSpheres.includes('b')) {
      createSpecificModel(modelPath, Vector3.create(33, 1.3, 29), promptFunction); // Crear modelo GLB encima del cubo negro
      action1Completed = true;
      console.log("Acción 1 completada");
      selectedSpheres = [];
      disableAllSpheresInteraction();
      enableSpheresForAction(2);
      updateCubesVisibility();
    } else if (cube === grayCube && selectedSpheres.includes('c') && selectedSpheres.includes('d') && action1Completed) {
      createSpecificModel(modelPath, Vector3.create(32, 1.3, 29), promptFunction); // Crear modelo GLB encima del cubo gris
      action2Completed = true;
      console.log("Acción 2 completada");
      selectedSpheres = [];
      disableAllSpheresInteraction();
      enableSpheresForAction(3);
      updateCubesVisibility();
    } else if (cube === darkBlueCube && selectedSpheres.includes('e') && selectedSpheres.includes('f') && action2Completed) {
      createSpecificModel(modelPath, Vector3.create(29.3, 1.5, 29.3), promptFunction); // Crear modelo GLB encima del cubo azul oscuro
      action3Completed = true;
      console.log("Acción 3 completada");
      selectedSpheres = [];
      disableAllSpheresInteraction();
      updateCubesVisibility();
    } else {
      console.log("Condiciones no cumplidas para el cubo.");
    }
  });
}


// Función para deshabilitar la interacción de un cubo
function disableCubeInteraction(cube: Entity) {
  pointerEventsSystem.onPointerDown({ entity: cube, opts: { button: InputAction.IA_PRIMARY, hoverText: '' } }, () => {
    console.log(`Interacción deshabilitada para el cubo: ${cube}`);
  });
}

// Función para deshabilitar todas las esferas para interacción
function disableAllSpheresInteraction() {
  spheres.forEach((sphere: Entity) => {
    pointerEventsSystem.onPointerDown({ entity: sphere, opts: { button: InputAction.IA_PRIMARY, hoverText: '' } }, () => {
      console.log(`Interacción deshabilitada para la esfera: ${sphere}`);
    });
  });
}

// Función para habilitar la interacción de esferas según la acción actual
function enableSpheresForAction(action: number) {
  if (action === 1) {
    [yellowSphere, blueSphere].forEach((sphere: Entity) => {
      addInteraction(sphere, () => onModelClicked(sphere, sphere === yellowSphere ? 'a' : 'b'));
    });
  } else if (action === 2) {
    [redSphere, greenSphere].forEach((sphere: Entity) => {
      addInteraction(sphere, () => onModelClicked(sphere, sphere === redSphere ? 'c' : 'd'));
    });
  } else if (action === 3) {
    [pinkSphere, purpleSphere].forEach((sphere: Entity) => {
      addInteraction(sphere, () => onModelClicked(sphere, sphere === pinkSphere ? 'e' : 'f'));
    });
  }
}

// Agregar interacción a las esferas
addInteraction(yellowSphere, () => onModelClicked(yellowSphere, 'a'));
addInteraction(blueSphere, () => onModelClicked(blueSphere, 'b'));
addInteraction(redSphere, () => onModelClicked(redSphere, 'c'));
addInteraction(greenSphere, () => onModelClicked(greenSphere, 'd'));
addInteraction(pinkSphere, () => onModelClicked(pinkSphere, 'e'));
addInteraction(purpleSphere, () => onModelClicked(purpleSphere, 'f'));

// Inicializar la escena
disableAllSpheresInteraction();  // Deshabilitar interacción de todas las esferas al inicio
enableSpheresForAction(1);  // Habilitar interacción de las esferas para la acción 1
disableCubeInteraction(grayCube);  // Deshabilitar interacción del cubo gris al inicio
disableCubeInteraction(darkBlueCube);  // Deshabilitar interacción del cubo azul oscuro al inicio


// book de instrucciones

// Añadir el modelo book.glb y su interacción
const book = createModel("models/book.glb", Vector3.create(28, 0, 38), Vector3.create(1, 1, 1));
addInteraction(book, showInstructions);

// Función para hacer rotar el libro
function rotateBook(dt: number) {
  const transform = Transform.getMutable(book);
  transform.rotation.y += dt * 1.0; // Ajustar el multiplicador para rotar más rápido (1.0 es un ejemplo)
}
// Añadir la función de rotación al sistema de actualización del motor
engine.addSystem(rotateBook);

buildload();  
