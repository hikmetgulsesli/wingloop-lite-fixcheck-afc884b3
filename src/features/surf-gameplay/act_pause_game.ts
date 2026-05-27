import type { WingloopActions } from '../wingloop-lite-fixcheck/wingloop-lite-fixcheck.store';

export function actPauseGame(actions: Pick<WingloopActions, 'pauseGame' | 'resumeGame'>, paused: boolean) {
  if (paused) {
    actions.resumeGame();
    return;
  }

  actions.pauseGame();
}
