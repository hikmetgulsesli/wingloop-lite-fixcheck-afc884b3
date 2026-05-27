export type GameDifficulty = 'easy' | 'normal' | 'hard';
export type GameSpeed = 'slow' | 'normal' | 'fast';
export type WingloopScreen = 'gameplay' | 'settings';

export interface WingloopSettings {
  difficulty: GameDifficulty;
  speed: GameSpeed;
}

export interface WingloopGameState {
  screen: WingloopScreen;
  score: number;
  progress: number;
  level: number;
  paused: boolean;
  gameOver: boolean;
  highScore: number;
  settings: WingloopSettings;
  storageStatus: 'ready' | 'recovered' | 'unavailable';
  lastError: string | null;
}

export const WINGLOOP_STORAGE_KEY = 'wingloop-lite-fixcheck:v1';

export const DEFAULT_WINGLOOP_STATE: WingloopGameState = {
  screen: 'gameplay',
  score: 0,
  progress: 0,
  level: 1,
  paused: true,
  gameOver: false,
  highScore: 0,
  settings: {
    difficulty: 'normal',
    speed: 'normal',
  },
  storageStatus: 'ready',
  lastError: null,
};

export function normalizeHighScore(value: unknown): number {
  return typeof value === 'number' && Number.isFinite(value) && value > 0 ? Math.floor(value) : 0;
}

export function normalizeDifficulty(value: unknown): GameDifficulty {
  return value === 'easy' || value === 'normal' || value === 'hard' ? value : 'normal';
}

export function normalizeSpeed(value: unknown): GameSpeed {
  return value === 'slow' || value === 'normal' || value === 'fast' ? value : 'normal';
}

export function createWingloopInitialState(
  persisted?: Partial<Pick<WingloopGameState, 'highScore' | 'settings'>>,
): WingloopGameState {
  return {
    ...DEFAULT_WINGLOOP_STATE,
    highScore: normalizeHighScore(persisted?.highScore),
    settings: {
      difficulty: normalizeDifficulty(persisted?.settings?.difficulty),
      speed: normalizeSpeed(persisted?.settings?.speed),
    },
  };
}

export function advanceWingloopTurn(state: WingloopGameState): WingloopGameState {
  if (state.gameOver) {
    return state;
  }

  const difficultyMultiplier = {
    easy: 8,
    normal: 12,
    hard: 16,
  }[state.settings.difficulty];

  const speedMultiplier = {
    slow: 1,
    normal: 2,
    fast: 3,
  }[state.settings.speed];

  const score = state.score + difficultyMultiplier * speedMultiplier;
  const progress = Math.min(100, state.progress + 20 * speedMultiplier);
  const gameOver = progress >= 100;

  return {
    ...state,
    score,
    progress,
    paused: false,
    gameOver,
    level: gameOver ? state.level : state.level + 1,
    highScore: Math.max(state.highScore, score),
    lastError: null,
  };
}
