import { useEffect } from 'react';
import {
  GameSettingsWingloopLiteFixcheck,
  GameplayWingloopLiteFixcheck,
  type GameSettingsWingloopLiteFixcheckActionId,
  type GameplayWingloopLiteFixcheckActionId,
} from './screens';
import { installWingloopTestBridge } from './test/bridge';
import { useWingloopStore, wingloopStore } from './features/wingloop-lite-fixcheck/wingloop-lite-fixcheck.store';

export default function App() {
  const state = useWingloopStore();
  const { actions } = wingloopStore;

  useEffect(() => {
    installWingloopTestBridge(wingloopStore);
  }, []);

  const gameplayActions: Partial<Record<GameplayWingloopLiteFixcheckActionId, () => void>> = {
    'settings-1': () => actions.navigate('settings'),
    'start-game-2': actions.startGame,
    'retry-3': actions.retry,
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
      className="min-h-screen bg-background text-on-surface"
    >
      {state.lastError ? (
        <div role="status" className="fixed left-4 right-4 top-4 z-50 rounded bg-error-container px-container-padding py-unit text-on-error-container">
          {state.lastError}
        </div>
      ) : null}
      {state.screen === 'settings' ? (
        <GameSettingsWingloopLiteFixcheck actions={settingsActions} />
      ) : (
        <GameplayWingloopLiteFixcheck actions={gameplayActions} />
      )}
    </div>
  );
}
