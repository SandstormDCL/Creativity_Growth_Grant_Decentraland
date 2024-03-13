import React from 'react';
import ReactEcs, { ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs';
import * as npc from 'dcl-npc-toolkit';
import * as ui from 'dcl-ui-toolkit';

export function setupUi() {
  ReactEcsRenderer.setUiRenderer(combinedUiRenderer);
}

const uiComponent = () => (
  <UiEntity
    uiTransform={{
      width: '100%',
      height: '100%',
    }}
  >
    <npc.NpcUtilsUi />
  </UiEntity>
);

function combinedUiRenderer() {
  return (
    <>
      {uiComponent()}
      {ui.render()}
    </>
  );
}
