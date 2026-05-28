import type { WingloopActions } from '../wingloop-lite-fixcheck/wingloop-lite-fixcheck.store';

export function actSavePreferences(actions: Pick<WingloopActions, 'saveSettings'>) {
  actions.saveSettings();
}
