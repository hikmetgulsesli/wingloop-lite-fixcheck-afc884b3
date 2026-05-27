import type { WingloopGameState } from '../game/game-runtime';
import { createWingloopInitialState } from '../game/game-runtime';

export const wingloopLiteFixcheckFixture: WingloopGameState = {
  ...createWingloopInitialState(),
  highScore: 120,
  score: 24,
  progress: 40,
  paused: false,
};
