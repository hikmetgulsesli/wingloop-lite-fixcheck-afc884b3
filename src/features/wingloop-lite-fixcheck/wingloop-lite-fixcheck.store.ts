import { useSyncExternalStore } from 'react';
import {
  advanceWingloopTurn,
  createWingloopInitialState,
  type GameDifficulty,
  type GameSpeed,
  type WingloopGameState,
  type WingloopScreen,
} from '../../game/game-runtime';
import { createWingloopRepository, type WingloopRepository } from './wingloop-lite-fixcheck.repo';

type Listener = () => void;

export interface WingloopActions {
  navigate(screen: WingloopScreen): void;
  startGame(): void;
  retry(): void;
  setDifficulty(difficulty: GameDifficulty): void;
  setSpeed(speed: GameSpeed): void;
  saveSettings(): void;
  resetHighScore(): void;
}

export interface WingloopStore {
  getState(): WingloopGameState;
  subscribe(listener: Listener): () => void;
  actions: WingloopActions;
}

export function createWingloopStore(repository: WingloopRepository = createWingloopRepository()): WingloopStore {
  const loaded = repository.load();
  let state: WingloopGameState = {
    ...createWingloopInitialState(loaded.data),
    storageStatus: loaded.error ? (loaded.recovered ? 'recovered' : 'unavailable') : 'ready',
    lastError: loaded.error ?? null,
  };
  const listeners = new Set<Listener>();

  const emit = () => {
    listeners.forEach((listener) => listener());
  };

  const persist = () => {
    try {
      repository.save({
        highScore: state.highScore,
        settings: state.settings,
      });
      state = { ...state, storageStatus: state.storageStatus === 'recovered' ? 'recovered' : 'ready' };
    } catch {
      state = {
        ...state,
        storageStatus: 'unavailable',
        lastError: 'Preferences could not be saved.',
      };
    }
  };

  const setState = (next: WingloopGameState, shouldPersist = false) => {
    state = next;
    if (shouldPersist) {
      persist();
    }
    emit();
  };

  const actions: WingloopActions = {
    navigate(screen) {
      setState({ ...state, screen, lastError: null });
    },
    startGame() {
      setState(advanceWingloopTurn({ ...state, paused: false }), true);
    },
    retry() {
      setState(
        {
          ...createWingloopInitialState({
            highScore: state.highScore,
            settings: state.settings,
          }),
          paused: false,
          storageStatus: state.storageStatus,
          lastError: null,
        },
        true,
      );
    },
    setDifficulty(difficulty) {
      setState({ ...state, settings: { ...state.settings, difficulty }, lastError: null });
    },
    setSpeed(speed) {
      setState({ ...state, settings: { ...state.settings, speed }, lastError: null });
    },
    saveSettings() {
      persist();
      emit();
    },
    resetHighScore() {
      setState({ ...state, highScore: 0, lastError: null }, true);
    },
  };

  return {
    getState: () => state,
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    actions,
  };
}

export const wingloopStore = createWingloopStore();

export function useWingloopStore(): WingloopGameState {
  return useSyncExternalStore(wingloopStore.subscribe, wingloopStore.getState, wingloopStore.getState);
}
