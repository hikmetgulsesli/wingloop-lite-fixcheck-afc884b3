import type { WingloopActions } from '../wingloop-lite-fixcheck/wingloop-lite-fixcheck.store';

export function actRestartGame(actions: Pick<WingloopActions, 'retry'>) {
  actions.retry();
}
