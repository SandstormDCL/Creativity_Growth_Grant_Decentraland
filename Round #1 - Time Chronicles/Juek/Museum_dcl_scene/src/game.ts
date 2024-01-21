import * as ui from "../decentraland-ui-utils-master/src/index"



const building = new Entity()
building.addComponent(new GLTFShape("models/50_Museum1.glb"))
building.addComponent(new Transform({position:new Vector3(45,-0.1,50)}))
engine.addEntity(building)

const building1 = new Entity()
building1.addComponent(new GLTFShape("models/50_Museum2.glb"))
building1.addComponent(new Transform({position:new Vector3(45,-0.1,50)}))
engine.addEntity(building1)

const object = new Entity()
object.addComponent(new GLTFShape("models/Card1.glb"))
object.addComponent(new Transform({position:new Vector3(45,0.2,49.9)}))
engine.addEntity(object)

const object1 = new Entity()
object1.addComponent(new GLTFShape("models/Card2.glb"))
object1.addComponent(new Transform({position:new Vector3(45,0.2,49.9)}))
engine.addEntity(object1)

const object2 = new Entity()
object2.addComponent(new GLTFShape("models/Card3.glb"))
object2.addComponent(new Transform({position:new Vector3(45,0.2,49.90)}))
engine.addEntity(object2)

const object3 = new Entity()
object3.addComponent(new GLTFShape("models/Card4.glb"))
object3.addComponent(new Transform({position:new Vector3(45,0.2,49.9)}))
engine.addEntity(object3)

const object4 = new Entity()
object4.addComponent(new GLTFShape("models/Card5.glb"))
object4.addComponent(new Transform({position:new Vector3(45,0.2,50)}))
engine.addEntity(object4)

const Riddle1 = new Entity()
Riddle1.addComponent(new GLTFShape("models/Riddle1.glb"))
Riddle1.addComponent(new Transform({position:new Vector3(44.4,-2,50)}))
engine.addEntity(Riddle1)

const Riddle2 = new Entity()
Riddle2.addComponent(new GLTFShape("models/Riddle2.glb"))
Riddle2.addComponent(new Transform({position:new Vector3(44.4,-2,50)}))
engine.addEntity(Riddle2)

const Riddle3 = new Entity()
Riddle3.addComponent(new GLTFShape("models/Riddle3.glb"))
Riddle3.addComponent(new Transform({position:new Vector3(45.6,-2,50)}))
engine.addEntity(Riddle3)

const Riddle4 = new Entity()
Riddle4.addComponent(new GLTFShape("models/Riddle4.glb"))
Riddle4.addComponent(new Transform({position:new Vector3(45.6,-2,50)}))
engine.addEntity(Riddle4)

const Riddle5 = new Entity()
Riddle5.addComponent(new GLTFShape("models/Riddle5.glb"))
Riddle5.addComponent(new Transform({position:new Vector3(45.6,-2,50)}))
engine.addEntity(Riddle5)



object.addComponent(new Animator());
const animator = object.getComponent(Animator);
const AnimationState = animator.getClip("Card1")
AnimationState.playing = false;
AnimationState.looping = false;

object1.addComponent(new Animator());
const animator1 = object1.getComponent(Animator);
const AnimationState1 = animator1.getClip("Card2")
AnimationState1.playing = false;
AnimationState1.looping = false;

object2.addComponent(new Animator());
const animator2 = object2.getComponent(Animator);
const AnimationState2 = animator2.getClip("Card3")
AnimationState2.playing = false;
AnimationState2.looping = false;

object3.addComponent(new Animator());
const animator3 = object3.getComponent(Animator);
const AnimationState3 = animator3.getClip("Card4")
AnimationState3.playing = false;
AnimationState3.looping = false;

object4.addComponent(new Animator());
const animator4 = object4.getComponent(Animator);
const AnimationState4 = animator4.getClip("Card5")
AnimationState4.playing = false;
AnimationState4.looping = false;





let  BermCard1 = new ui.CenterImage('images/BerFact01.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  

let  BermCard2 = new ui.CenterImage('images/BerFact2.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })  

let  BermCard3 = new ui.CenterImage('images/BerFact3.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })

let  BermCard4 = new ui.CenterImage('images/BerFact4.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  BermCard5 = new ui.CenterImage('images/BerFact5.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  Dyat1 = new ui.CenterImage('images/Dyat1.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  Dyat2 = new ui.CenterImage('images/Dyat2.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  Dyat3 = new ui.CenterImage('images/Dyat3.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  Dyat4 = new ui.CenterImage('images/Dyat4.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  Dyat5 = new ui.CenterImage('images/Dyat5.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  Atlan1 = new ui.CenterImage('images/Atlan1.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  Atlan2 = new ui.CenterImage('images/Atlan2.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  Atlan3 = new ui.CenterImage('images/Atlan3.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  Atlan4 = new ui.CenterImage('images/Atlan4.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  Atlan5 = new ui.CenterImage('images/Atlan5.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  Manu1 = new ui.CenterImage('images/Manu1.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  Manu2 = new ui.CenterImage('images/Manu2.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  Manu3 = new ui.CenterImage('images/Manu3.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  Manu4 = new ui.CenterImage('images/Manu4.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  Manu5 = new ui.CenterImage('images/Manu5.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  Nazca1 = new ui.CenterImage('images/Nazca1.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  Nazca2 = new ui.CenterImage('images/Nazca2.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  Nazca3 = new ui.CenterImage('images/Nazca3.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  Nazca4 = new ui.CenterImage('images/Nazca4.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })
  let  Nazca5 = new ui.CenterImage('images/Nazca5.png', 100000, true, 0, 0, 400, 600, {
    sourceHeight: 1630,
    sourceWidth: 1130,
    sourceLeft: 0,
    sourceTop: 0
    
  })



let Bprompt = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton = Bprompt.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Bprompt.hide()
      Bprompt1.show()
      BermCard2.show()
    },
    ui.ButtonStyles.DARK
  )
let next = Bprompt.addIcon("images/Next.png",370,-8,128,128)

let Bprompt1 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton1 = Bprompt1.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Bprompt1.hide()
      BermCard3.show()
      Bprompt3.show()
    },
    ui.ButtonStyles.DARK
  )
let next1 = Bprompt1.addIcon("images/Next.png",370,-8,128,128)

let Bprompt3 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton3 = Bprompt3.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Bprompt3.hide()
      Bprompt4.show()
      BermCard4.show()
    },
    ui.ButtonStyles.DARK
  )
let next3 = Bprompt3.addIcon("images/Next.png",370,-8,128,128)

let Bprompt4 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton4 = Bprompt4.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Bprompt4.hide()
      BermCard5.show()
      Close1.show()
    },
    ui.ButtonStyles.DARK
  )
let next4 = Bprompt4.addIcon("images/Next.png",370,-8,128,128)

let Close1 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton91 = Close1.addButton(
    '          Close',
    400,
    -10,
    () => {
      log('Yes')
      Close1.hide()
      Bprompt.hide()
      Bprompt1.hide()
      Bprompt3.hide()
      Bprompt4.hide()
      
      BermCard5.hide()
      BermCard4.hide()
      BermCard3.hide()
      BermCard2.hide()
      BermCard1.hide()
    },
    ui.ButtonStyles.DARK
  )
let next91 = Close1.addIcon("images/Cancel.png",370,-8,128,128)

let Dprompt1 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton5 = Dprompt1.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Dprompt1.hide()
      Dprompt2.show()
      Dyat2.show()
    },
    ui.ButtonStyles.DARK
  )
let next5 = Dprompt1.addIcon("images/Next.png",370,-8,128,128)

let Dprompt2 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton6 = Dprompt2.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Dprompt2.hide()
      Dprompt3.show()
      Dyat3.show()
    },
    ui.ButtonStyles.DARK
  )
let next6 = Dprompt2.addIcon("images/Next.png",370,-8,128,128)

let Dprompt3 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton7 = Dprompt3.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Dprompt3.hide()
      Dprompt4.show()
      Dyat4.show()
    },
    ui.ButtonStyles.DARK
  )
let next7 = Dprompt3.addIcon("images/Next.png",370,-8,128,128)

let Dprompt4 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton8 = Dprompt4.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Dprompt4.hide()
      Close2.show()
      Dyat5.show()

    },
    ui.ButtonStyles.DARK
  )
let next8 = Dprompt4.addIcon("images/Next.png",370,-8,128,128)

let Mprompt1 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton10 = Mprompt1.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Mprompt1.hide()
      Mprompt2.show()
      Manu2.show()
    },
    ui.ButtonStyles.DARK
  )
let next10 = Mprompt1.addIcon("images/Next.png",370,-8,128,128)

let Mprompt2 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton11 = Mprompt2.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Mprompt2.hide()
      Mprompt3.show()
      Manu3.show()
    },
    ui.ButtonStyles.DARK
  )
let next11 = Mprompt2.addIcon("images/Next.png",370,-8,128,128)

let Mprompt3 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton12 = Mprompt3.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Mprompt3.hide()
      Mprompt4.show()
      Manu4.show()
    },
    ui.ButtonStyles.DARK
  )
let next12 = Mprompt3.addIcon("images/Next.png",370,-8,128,128)

let Mprompt4 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton13 = Mprompt4.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Mprompt4.hide()
      Mprompt5.show()
      Manu5.show()
    },
    ui.ButtonStyles.DARK
  )
let next13 = Mprompt4.addIcon("images/Next.png",370,-8,128,128)

let Mprompt5 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton14 = Mprompt5.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Mprompt5.hide()
      Close3.show()
    },
    ui.ButtonStyles.DARK
  )
let next14 = Mprompt5.addIcon("images/Next.png",370,-8,128,128)

let Nprompt1 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton15 = Nprompt1.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Nprompt1.hide()
      Nprompt2.show()
      Nazca2.show()
    },
    ui.ButtonStyles.DARK
  )
let next15 = Nprompt1.addIcon("images/Next.png",370,-8,128,128)

let Nprompt2 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton16 = Nprompt2.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Nprompt2.hide()
      Nprompt3.show()
      Nazca3.show()
    },
    ui.ButtonStyles.DARK
  )
let next16 = Nprompt2.addIcon("images/Next.png",370,-8,128,128)

let Nprompt3 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton17 = Nprompt3.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Nprompt3.hide()
      Nprompt4.show()
      Nazca4.show()
    },
    ui.ButtonStyles.DARK
  )
let next17 = Nprompt3.addIcon("images/Next.png",370,-8,128,128)

let Nprompt4 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton18 = Nprompt4.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Nprompt4.hide()
      Nprompt5.show()
      Nazca5.show()
    },
    ui.ButtonStyles.DARK
  )
let next18 = Nprompt4.addIcon("images/Next.png",370,-8,128,128)

let Nprompt5 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton19 = Nprompt5.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Nprompt5.hide()
      Close4.show()
      Nazca2.show()
    },
    ui.ButtonStyles.DARK
  )
let next19 = Nprompt5.addIcon("images/Next.png",370,-8,128,128)

let Aprompt1 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton20 = Aprompt1.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Aprompt1.hide()
      Aprompt2.show()
      Atlan2.show()
    },
    ui.ButtonStyles.DARK
  )
let next20 = Aprompt1.addIcon("images/Next.png",370,-8,128,128)

let Aprompt2 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton21 = Aprompt2.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Aprompt2.hide()
      Aprompt3.show()
      Atlan3.show()
    },
    ui.ButtonStyles.DARK
  )
let next21 = Aprompt2.addIcon("images/Next.png",370,-8,128,128)

let Aprompt3 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton22 = Aprompt3.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Aprompt3.hide()
      Aprompt4.show()
      Atlan4.show()
    },
    ui.ButtonStyles.DARK
  )
let next22 = Aprompt3.addIcon("images/Next.png",370,-8,128,128)

let Aprompt4 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton23 = Aprompt4.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Aprompt4.hide()
      Aprompt5.show()
      Atlan5.show()
    },
    ui.ButtonStyles.DARK
  )
let next23 = Aprompt4.addIcon("images/Next.png",370,-8,128,128)

let Aprompt5 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton24 = Aprompt5.addButton(
    '          Next',
    400,
    -10,
    () => {
      log('Yes')
      Aprompt5.hide()
      Close5.show()
    },
    ui.ButtonStyles.DARK
  )
let next24 = Aprompt5.addIcon("images/Next.png",370,-8,128,128)

let Close2 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton92 = Close2.addButton(
    '          Close',
    400,
    -10,
    () => {
      log('Yes')
      Close2.hide()
      Dprompt1.hide()
      Dprompt2.hide()
      Dprompt3.hide()
      Dprompt4.hide()
      Dyat5.hide()
      Dyat4.hide()
      Dyat3.hide()
      Dyat2.hide()
      Dyat1.hide()
    },
    ui.ButtonStyles.DARK
  )
let next92 = Close2.addIcon("images/Cancel.png",370,-8,128,128)

let Close3 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton93 = Close3.addButton(
    '          Close',
    400,
    -10,
    () => {
      log('Yes')
      Close3.hide()
      Mprompt1.hide()
      Mprompt2.hide()
      Mprompt3.hide()
      Mprompt4.hide()
      Mprompt5.hide()
      Manu5.hide()
      Manu4.hide()
      Manu3.hide()
      Manu2.hide()
      Manu1.hide()
    },
    ui.ButtonStyles.DARK
  )
let next93 = Close3.addIcon("images/Cancel.png",370,-8,128,128)

let Close4 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton94 = Close4.addButton(
    '          Close',
    400,
    -10,
    () => {
      log('Yes')
      Close4.hide()
      Nprompt1.hide()
      Nprompt2.hide()
      Nprompt3.hide()
      Nprompt4.hide()
      Nprompt5.hide()
      Nazca5.hide()
      Nazca4.hide()
      Nazca3.hide()
      Nazca2.hide()
      Nazca1.hide()
    },
    ui.ButtonStyles.DARK
  )
let next94 = Close4.addIcon("images/Cancel.png",370,-8,128,128)

let Close5 = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,true,()=>
{
    
})
let myButton95 = Close5.addButton(
    '          Close',
    400,
    -10,
    () => {
      log('Yes')
      Close5.hide()
      Aprompt1.hide()
      Aprompt2.hide()
      Aprompt3.hide()
      Aprompt4.hide()
      Aprompt5.hide()
      Atlan5.hide()
      Atlan4.hide()
      Atlan3.hide()
      Atlan2.hide()
      Atlan1.hide()
    },
    ui.ButtonStyles.DARK
  )
let next95 = Close5.addIcon("images/Cancel.png",370,-8,128,128)



object4.addComponent(new OnPointerDown((e) => {
    if (e.buttonId == 0)
    Nprompt1.show()
    Nazca1.show()
   

},
{
    hoverText: "Click Here"
}
))

object.addComponent(new OnPointerDown((e) => {
    if (e.buttonId == 0)
        Bprompt.show()
        BermCard1.show()

},
{
    hoverText: "Click Here"
}
))

object1.addComponent(new OnPointerDown((e) => {
    if (e.buttonId == 0)
        Dprompt1.show()
        Dyat1.show()

},
{
    hoverText: "Click Here"
}
))

object2.addComponent(new OnPointerDown((e) => {
    if (e.buttonId == 0)
        Mprompt1.show()
        Manu1.show()

},
{
    hoverText: "Click Here"
}
))

object3.addComponent(new OnPointerDown((e) => {
    if (e.buttonId == 0)
        Aprompt1.show()
        Atlan1.show()

},
{
    hoverText: "Click Here"
}
))


let  Correct = new ui.CenterImage('images/Correct.png', 1, true, 0, 0, 600, 600, {
  sourceHeight: 511,
  sourceWidth: 488,
  sourceLeft: 0,
  sourceTop: 0 
})

let  Wrong = new ui.CenterImage('images/Wrong.png', 1, true, 0, 0, 600, 600, {
  sourceHeight: 500,
  sourceWidth: 500,
  sourceLeft: 0,
  sourceTop: 0 
})

let PRiddle1 = new ui.CustomPrompt(ui.PromptStyles.LIGHT,0,0,true)
let myText = PRiddle1.addText('Type Answer Below (In Metres)(Only Numbers)', 0, 100)
let myInput = PRiddle1.addTextBox(0, 30)

let Rbutton1 = PRiddle1.addButton(
  'Submit',
  0,
  -30,
  () => {
    if (myInput.currentText === "11000") {
      PRiddle1.hide()
      Correct.show(1)
    }
    else{
      PRiddle1.hide()
      Wrong.show(1)
    }

    
  },
  ui.ButtonStyles.E
)


Riddle1.addComponent(new OnPointerDown((e) => {
  PRiddle1.show()
},
{
  hoverText: "Click Here"
}
))

let PRiddle2 = new ui.CustomPrompt(ui.PromptStyles.LIGHT,0,0,true)
let myText2 = PRiddle2.addText('Type Answer Below (Only Numbers)', 0, 100)
let myInput2 = PRiddle2.addTextBox(0, 30)

let Rbutton2 = PRiddle2.addButton(
  'Submit',
  0,
  -30,
  () => {
    if (myInput2.currentText === "10000") {
      PRiddle2.hide()
      Correct.show(1)
    }
    else{
      PRiddle2.hide()
      Wrong.show(1)
    }

    
  },
  ui.ButtonStyles.E
)


Riddle2.addComponent(new OnPointerDown((e) => {
  PRiddle2.show()
},
{
  hoverText: "Click Here"
}
))

let PRiddle3 = new ui.CustomPrompt(ui.PromptStyles.LIGHT,0,0,true)
let myText3 = PRiddle3.addText('Type Answer Below (Only Numbers)', 0, 100)
let myInput3 = PRiddle3.addTextBox(0, 30)

let Rbutton3 = PRiddle3.addButton(
  'Submit',
  0,
  -30,
  () => {
    if (myInput3.currentText === "240") {
      PRiddle3.hide()
      Correct.show(1)
    }
    else{
      PRiddle3.hide()
      Wrong.show(1)
    }

    
  },
  ui.ButtonStyles.E
)


Riddle3.addComponent(new OnPointerDown((e) => {
  PRiddle3.show()
},
{
  hoverText: "Click Here"
}
))

let PRiddle4 = new ui.CustomPrompt(ui.PromptStyles.LIGHT,0,0,true)
let myText4 = PRiddle4.addText('Type Answer Below (Only Numbers)', 0, 100)
let myInput4 = PRiddle4.addTextBox(0, 30)

let Rbutton4 = PRiddle4.addButton(
  'Submit',
  0,
  -30,
  () => {
    if (myInput4.currentText === "1800") {
      PRiddle4.hide()
      Correct.show(1)
    }
    else{
      PRiddle4.hide()
      Wrong.show(1)
    }

    
  },
  ui.ButtonStyles.E
)


Riddle4.addComponent(new OnPointerDown((e) => {
  PRiddle4.show()
},
{
  hoverText: "Click Here"
}
))

let PRiddle5 = new ui.CustomPrompt(ui.PromptStyles.LIGHT,0,0,true)
let myText5 = PRiddle5.addText('Type Answer Below (Only Numbers)', 0, 100)
let myInput5 = PRiddle5.addTextBox(0, 30)

let Rbutton5 = PRiddle5.addButton(
  'Submit',
  0,
  -30,
  () => {
    if (myInput5.currentText === "-45") {
      PRiddle5.hide()
      Correct.show(1)
    }
    else{
      PRiddle5.hide()
      Wrong.show(1)
    }

    
  },
  ui.ButtonStyles.E
)


Riddle5.addComponent(new OnPointerDown((e) => {
  PRiddle5.show()
},
{
  hoverText: "Click Here"
}
))

let CloseIn = new ui.CustomPrompt(ui.PromptStyles.LIGHTLARGE,1,1,false,()=>
{
    
})
let CloseB = CloseIn.addButton(
    '          Close',
    -550,
    270,
    () => {
      log('Yes')
      CloseIn.hide()
      Instruction.hide()
    },
    ui.ButtonStyles.DARK
  )
let Cancel = CloseIn.addIcon("images/Cancel.png",-600,270,128,128)

let  Instruction = new ui.CenterImage('images/Instructions.jpg', 100000, false, 50, 0, 900, 600, {
  sourceHeight: 1973,
  sourceWidth: 3334,
  sourceLeft: 0,
  sourceTop: 0
  
})






