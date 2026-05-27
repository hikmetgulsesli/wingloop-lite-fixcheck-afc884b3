import { useCallback, useEffect, type KeyboardEvent, type MouseEvent, type TouchEvent } from 'react';
import {
  GameSettingsWingloopLiteFixcheck,
  GameplayWingloopLiteFixcheck,
  type GameSettingsWingloopLiteFixcheckActionId,
  type GameplayWingloopLiteFixcheckActionId,
} from './screens';
import { installWingloopTestBridge } from './test/bridge';
import { useWingloopStore, wingloopStore } from './features/wingloop-lite-fixcheck/wingloop-lite-fixcheck.store';
import { actPauseGame } from './features/surf-gameplay/act_pause_game';
import { actRestartGame } from './features/surf-gameplay/act_restart_game';
import { actStartGame } from './features/surf-gameplay/act_start_game';

export default function App() {
  const state = useWingloopStore();
  const { actions } = wingloopStore;
  const gameplayActive = state.screen === 'gameplay' && !state.paused && !state.gameOver;

  useEffect(() => {
    installWingloopTestBridge(wingloopStore);
  }, []);

  useEffect(() => {
    if (!gameplayActive) {
      return undefined;
    }

    const speedDelay = {
      slow: 1600,
      normal: 1000,
      fast: 650,
    }[state.settings.speed];
    const timer = window.setInterval(actions.tick, speedDelay);

    return () => window.clearInterval(timer);
  }, [actions.tick, gameplayActive, state.settings.speed]);

  const handleGameplayTick = useCallback(() => {
    actions.tick();
  }, [actions]);

  const handleRootKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (state.screen !== 'gameplay' || state.gameOver) {
        return;
      }

      if (event.key === ' ' || event.key === 'Spacebar') {
        event.preventDefault();
        actPauseGame(actions, state.paused);
        return;
      }

      if (event.key === 'Enter' || event.key === 'ArrowRight' || event.key.toLowerCase() === 't') {
        event.preventDefault();
        handleGameplayTick();
      }
    },
    [actions, handleGameplayTick, state.gameOver, state.paused, state.screen],
  );

  const isInteractiveEventTarget = (target: EventTarget | null) =>
    target instanceof HTMLElement && Boolean(target.closest('button, a, input, select, textarea, [role="button"]'));

  const handleRootClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (!isInteractiveEventTarget(event.target)) {
        handleGameplayTick();
      }
    },
    [handleGameplayTick],
  );

  const handleRootTouchStart = useCallback(
    (event: TouchEvent<HTMLDivElement>) => {
      if (!isInteractiveEventTarget(event.target)) {
        handleGameplayTick();
      }
    },
    [handleGameplayTick],
  );

  const gameplayActions: Partial<Record<GameplayWingloopLiteFixcheckActionId, () => void>> = {
    'settings-1': () => actions.navigate('settings'),
    'start-game-2': () => actStartGame(actions),
    'retry-3': () => actRestartGame(actions),
  };

  const settingsActions: Partial<Record<GameSettingsWingloopLiteFixcheckActionId, () => void>> = {
    'easy-1': () => actions.setDifficulty('easy'),
    'normal-2': () => actions.setDifficulty('normal'),
    'hard-3': () => actions.setDifficulty('hard'),
    'slow-4': () => actions.setSpeed('slow'),
    'normal-5': () => actions.setSpeed('normal'),
    'fast-6': () => actions.setSpeed('fast'),
    'reset-high-score-9': actions.resetHighScore,
    'save-settings-10': actions.saveSettings,
    'back-to-game-11': () => actions.navigate('gameplay'),
  };

  return (
    <div
      data-setfarm-root="wingloop-lite-fixcheck"
      data-screen={state.screen}
      data-storage-status={state.storageStatus}
      data-game-active={gameplayActive ? 'true' : 'false'}
      className="min-h-screen bg-background text-on-surface"
      tabIndex={0}
      onKeyDown={handleRootKeyDown}
      onClick={handleRootClick}
      onTouchStart={handleRootTouchStart}
    >
      {state.lastError ? (
        <div role="status" className="fixed left-4 right-4 top-4 z-50 rounded bg-error-container px-container-padding py-unit text-on-error-container">
          {state.lastError}
        </div>
      ) : null}
      {state.screen === 'settings' ? (
        <GameSettingsWingloopLiteFixcheck actions={settingsActions} />
      ) : (
        <GameplayWingloopLiteFixcheck actions={gameplayActions} gameState={state} />
      )}
    </div>
  );
}
