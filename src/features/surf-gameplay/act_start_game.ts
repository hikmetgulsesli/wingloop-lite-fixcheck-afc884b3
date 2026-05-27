import type { WingloopActions } from '../wingloop-lite-fixcheck/wingloop-lite-fixcheck.store';

export function actStartGame(actions: Pick<WingloopActions, 'startGame'>) {
  actions.startGame();
}
