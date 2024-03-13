import { openExternalUrl } from "~system/RestrictedActions";
import ReactEcs, {
  Label,
  ReactEcsRenderer,
  UiEntity,
} from "@dcl/sdk/react-ecs";
import { Color4 } from "@dcl/sdk/math";

const uiComponent = () => [
  GitHubLinkUi(),
  // Other UI elements
];

export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent);
}

function GitHubLinkUi() {
  const instagramURLrizk = "https://instagram.com/rizk.ghazaly";
  const twitterURLrizk = "https://twitter.com/Rizkgh";
  const instagramURLszjanko = "https://instagram.com/szjanko";
  const twitterURLszjanko = "https://twitter.com/SzilardJanko";

  return (
    <UiEntity
      uiTransform={{
        display: "flex",
        flexDirection: "column",
        positionType: "absolute",
        position: { right: "2%", bottom: "2%" },
        padding: { top: 10, bottom: 10, left: 14, right: 14 },
      }}
      uiBackground={{
        color: Color4.create(1, 1, 1, 0.2),
      }}
    >
      <Label
        value="Social Media"
        color={Color4.Black()}
        fontSize={18}
        textAlign="middle-center"
        uiTransform={{
          margin: { bottom: 15 },
        }}
      />
      <UiEntity
        uiTransform={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <UiEntity
          uiTransform={{
            width: "50",
            height: "50",
          }}
          uiBackground={{
            textureMode: "stretch",
            texture: {
              src: "images/instagram.png",
            },
          }}
          onMouseDown={() => {
            console.log("OPENING LINK");
            openExternalUrl({ url: instagramURLrizk });
          }}
        />
        <UiEntity
          uiTransform={{
            width: "50",
            height: "50",
          }}
          uiBackground={{
            textureMode: "stretch",
            texture: {
              src: "images/twitter.png",
            },
          }}
          onMouseDown={() => {
            console.log("OPENING LINK");
            openExternalUrl({ url: twitterURLrizk });
          }}
        />
      </UiEntity>
      <Label
        value="Rizk"
        color={Color4.Black()}
        fontSize={18}
        textAlign="middle-center"
        uiTransform={{
          margin: { bottom: 15 },
        }}
      />
      <UiEntity
        uiTransform={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <UiEntity
          uiTransform={{
            width: "50",
            height: "50",
          }}
          uiBackground={{
            textureMode: "stretch",
            texture: {
              src: "images/instagram.png",
            },
          }}
          onMouseDown={() => {
            console.log("OPENING LINK");
            openExternalUrl({ url: instagramURLszjanko });
          }}
        />
        <UiEntity
          uiTransform={{
            width: "50",
            height: "50",
          }}
          uiBackground={{
            textureMode: "stretch",
            texture: {
              src: "images/twitter.png",
            },
          }}
          onMouseDown={() => {
            console.log("OPENING LINK");
            openExternalUrl({ url: twitterURLszjanko });
          }}
        />
      </UiEntity>
      <Label
        value="SzJanko"
        color={Color4.Black()}
        fontSize={18}
        textAlign="middle-center"
        uiTransform={{
          margin: { bottom: 15 },
        }}
      />
    </UiEntity>
  );
}
