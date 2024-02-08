const baseScene = new Entity()
baseScene.addComponent(new GLTFShape("models/Medieval_maze/Medieval_maze_deliverable.glb"))
engine.addEntity(baseScene)


const treasure1 = new Entity()
treasure1.addComponent(new GLTFShape("models/Medieval_maze/Treasure_chamber_standard.glb"))
engine.addEntity(treasure1)


treasure1.addComponent(
  new OnPointerDown((e) => {
        
        const treasure2 = new Entity()
        treasure2.addComponent(new GLTFShape("models/Medieval_maze/Treasure_chamber.glb"))
        engine.addEntity(treasure2)

        engine.removeEntity(treasure1)
      
  })
)