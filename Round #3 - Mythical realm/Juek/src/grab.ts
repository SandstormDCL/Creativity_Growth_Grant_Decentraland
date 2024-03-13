export class Crate extends Entity {
    isGrabbed: boolean = false
  
    constructor(model: GLTFShape, transform: Transform) {
      super()
      engine.addEntity(this)
      this.addComponent(model)
      this.addComponent(transform)
  
      this.addComponent(
        new OnPointerDown(
          () => {
            // Do nothing
          },
          {
            button: ActionButton.PRIMARY,
            hoverText: 'Pick Up / Put Down',
            distance: 5
          }
        )
      )
    }
  }