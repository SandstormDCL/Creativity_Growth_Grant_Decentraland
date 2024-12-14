import { ReactEcsRenderer } from '@dcl/sdk/react-ecs';
import * as ui from 'dcl-ui-toolkit';
import { openExternalUrl } from "~system/RestrictedActions";

export function showPrompt1() {
  const prompt = ui.createComponent(ui.OkPrompt, {
    text: 'You found the first sweet and salty combination! Chocolate with SALT, a strange but delicious mix!',
    onAccept: () => {
      console.log('More info pressed for prompt 1');
      openExternalUrl({ url: 'https://www.garnishandglaze.com/salted-chocolate-covered-caramels-recipe/' });
    },
    acceptLabel: 'More Info',
    useDarkTheme: true,
    width: 450,
    height: 300,
    startHidden: false,
  });

  prompt.show();
}

export function showPrompt2() {
  const prompt = ui.createComponent(ui.OkPrompt, {
    text: 'For the adventurous, try fries with ice cream! Next time you order ice cream, ask for some fries too!',
    onAccept: () => {
      console.log('More info pressed for prompt 2');
      openExternalUrl({ url: 'https://www.gmanetwork.com/news/lifestyle/food/912622/soft-serve-ice-cream-in-a-basket-of-fries-this-local-french-fries-brand-made-it-happen/story/' });
    },
    acceptLabel: 'More Info',
    useDarkTheme: true,
    width: 450,
    height: 300,
    startHidden: false,
  });

  prompt.show();
}

export function showPrompt3() {
  const prompt = ui.createComponent(ui.OkPrompt, {
    text: 'Savor the unique blend of sweet jam and salty cheese',
    onAccept: () => {
      console.log('More info pressed for prompt 3');
      openExternalUrl({ url: 'https://yummybazaar.com/blogs/blog/pairing-cheese-and-jam' });
    },
    acceptLabel: 'More Info',
    useDarkTheme: true,
    width: 450,
    height: 300,
    startHidden: false,
  }); 

  prompt.show();
}

export function showInstructions() {
  const prompt = ui.createComponent(ui.OkPrompt, {
    text: 'Find the combinations between sweet and salty, and unlock levels of flavor! <b> first clue: think of something from the ocean that surprisingly enhances chocolate</b>',
    onAccept: () => {
      console.log('Instructions read');
    },
    acceptLabel: 'Start Game',
    useDarkTheme: true,  // Cambiar esto según tus preferencias de tema
    width: 450*1.2,
    height: 300*1.2,
    startHidden: false,
  });

  prompt.show();
}



ReactEcsRenderer.setUiRenderer(ui.render);
