import {
  type GameDifficulty,
  type GameSpeed,
  type WingloopSettings,
  WINGLOOP_STORAGE_KEY,
  normalizeDifficulty,
  normalizeHighScore,
  normalizeSpeed,
} from '../../game/game-runtime';

export interface WingloopPersistedState {
  highScore: number;
  settings: WingloopSettings;
}

export interface WingloopLoadResult {
  data?: WingloopPersistedState;
  recovered: boolean;
  error?: string;
}

export interface WingloopRepository {
  load(): WingloopLoadResult;
  save(data: WingloopPersistedState): void;
  clear(): void;
}

function getLocalStorage(): Storage | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function parsePersistedState(raw: string): WingloopPersistedState {
  const parsed = JSON.parse(raw) as {
    highScore?: unknown;
    settings?: {
      difficulty?: unknown;
      speed?: unknown;
    };
  };

  return {
    highScore: normalizeHighScore(parsed.highScore),
    settings: {
      difficulty: normalizeDifficulty(parsed.settings?.difficulty) as GameDifficulty,
      speed: normalizeSpeed(parsed.settings?.speed) as GameSpeed,
    },
  };
}

export function createWingloopRepository(storageKey = WINGLOOP_STORAGE_KEY): WingloopRepository {
  return {
    load() {
      const storage = getLocalStorage();
      if (!storage) {
        return { recovered: false, error: 'Persistent storage is unavailable.' };
      }

      try {
        const raw = storage.getItem(storageKey);
        if (!raw) {
          return { recovered: false };
        }

        return { data: parsePersistedState(raw), recovered: false };
      } catch {
        try {
          storage.removeItem(storageKey);
        } catch {
          return { recovered: true, error: 'Saved data was corrupted and storage could not be reset.' };
        }

        return { recovered: true, error: 'Saved data was corrupted and has been reset.' };
      }
    },
    save(data) {
      const storage = getLocalStorage();
      if (!storage) {
        return;
      }

      storage.setItem(storageKey, JSON.stringify(data));
    },
    clear() {
      const storage = getLocalStorage();
      if (!storage) {
        return;
      }

      storage.removeItem(storageKey);
    },
  };
}
