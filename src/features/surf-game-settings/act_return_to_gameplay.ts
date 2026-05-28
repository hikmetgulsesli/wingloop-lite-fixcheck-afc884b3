import type { WingloopActions } from '../wingloop-lite-fixcheck/wingloop-lite-fixcheck.store';

export function actReturnToGameplay(actions: Pick<WingloopActions, 'navigate'>) {
  actions.navigate('gameplay');
}
