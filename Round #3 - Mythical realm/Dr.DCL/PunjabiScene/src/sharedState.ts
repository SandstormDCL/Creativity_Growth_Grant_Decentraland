import { GameState } from "./ui";

export const sharedState = {
  ChangeState: (value:GameState) => { },
  UpdateCoins: (value:number) => {},
  GoIdle: () => {},
  EndCoinGame: () => {}
};