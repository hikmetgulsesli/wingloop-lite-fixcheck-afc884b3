import type { WingloopActions, WingloopStore } from '../features/wingloop-lite-fixcheck/wingloop-lite-fixcheck.store';
import type { WingloopGameState } from '../game/game-runtime';

export interface WingloopTestBridge {
  getState(): WingloopGameState;
  state: WingloopGameState;
  actions: WingloopActions;
}

declare global {
  interface Window {
    app?: WingloopTestBridge;
  }
}

export function installWingloopTestBridge(store: WingloopStore): WingloopTestBridge | undefined {
  if (typeof window === 'undefined') {
    return undefined;
  }

  const bridge: WingloopTestBridge = {
    getState: store.getState,
    get state() {
      return store.getState();
    },
    actions: store.actions,
  };

  window.app = bridge;
  return bridge;
}
