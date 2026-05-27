import { describe, expect, it, vi } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { createElement } from 'react';
import App from '../App';
import { createWingloopStore, wingloopStore } from '../features/wingloop-lite-fixcheck/wingloop-lite-fixcheck.store';
import type { WingloopPersistedState, WingloopRepository } from '../features/wingloop-lite-fixcheck/wingloop-lite-fixcheck.repo';
import { installWingloopTestBridge } from './bridge';

function createMemoryRepository(): WingloopRepository {
  let persisted: WingloopPersistedState | undefined;

  return {
    load: () => ({ data: persisted, recovered: false }),
    save: (data) => {
      persisted = data;
    },
    clear: () => {
      persisted = undefined;
    },
  };
}

function resetSharedAppStore() {
  wingloopStore.actions.retry();
  wingloopStore.actions.pauseGame();
}

describe('wingloop gameplay controls', () => {
  it('pauses, resumes, and ticks only while gameplay is active', () => {
    const store = createWingloopStore(createMemoryRepository());
    const listener = vi.fn();

    store.subscribe(listener);
    store.actions.tick();
    expect(store.getState().score).toBe(0);
    expect(listener).not.toHaveBeenCalled();

    store.actions.resumeGame();
    expect(store.getState().paused).toBe(false);

    store.actions.tick();
    expect(store.getState().score).toBe(24);
    expect(store.getState().progress).toBe(40);

    store.actions.pauseGame();
    const pausedScore = store.getState().score;
    store.actions.tick();
    expect(store.getState().score).toBe(pausedScore);

    store.actions.navigate('settings');
    store.actions.resumeGame();
    store.actions.tick();
    expect(store.getState().score).toBe(pausedScore);
  });

  it('exposes the gameplay controls through the window bridge', () => {
    const store = createWingloopStore(createMemoryRepository());
    const bridge = installWingloopTestBridge(store);

    bridge?.actions.resumeGame();
    bridge?.actions.tick();
    expect(window.app?.state.score).toBe(24);

    bridge?.actions.pauseGame();
    bridge?.actions.tick();
    expect(window.app?.getState().score).toBe(24);
  });

  it('wires keyboard and pointer controls through the app shell only while active', () => {
    resetSharedAppStore();
    const { container } = render(createElement(App));
    const root = container.querySelector('[data-setfarm-root="wingloop-lite-fixcheck"]');

    expect(root).toBeInstanceOf(HTMLElement);
    expect(root).toHaveAttribute('data-game-active', 'false');

    fireEvent.keyDown(root as HTMLElement, { key: ' ' });
    expect(root).toHaveAttribute('data-game-active', 'true');

    fireEvent.click(root as HTMLElement);
    expect(window.app?.state.score).toBe(24);

    fireEvent.keyDown(root as HTMLElement, { key: ' ' });
    expect(root).toHaveAttribute('data-game-active', 'false');

    fireEvent.click(root as HTMLElement);
    expect(window.app?.state.score).toBe(24);
  });

  it('renders deterministic gameplay feedback for start, crash, and retry', () => {
    resetSharedAppStore();
    const { container } = render(createElement(App));
    const root = container.querySelector('[data-setfarm-root="wingloop-lite-fixcheck"]');
    const gameplay = screen.getByRole('main');

    expect(gameplay).toHaveAttribute('data-game-state', 'paused');
    expect(gameplay).toHaveAttribute('data-score', '0');

    fireEvent.click(screen.getByRole('button', { name: /start game/i }));
    expect(root).toHaveAttribute('data-game-active', 'true');
    expect(gameplay).toHaveAttribute('data-game-state', 'playing');

    fireEvent.click(root as HTMLElement);
    expect(gameplay).toHaveAttribute('data-score', '24');
    expect(gameplay).toHaveAttribute('data-progress', '40');

    fireEvent.click(root as HTMLElement);
    fireEvent.click(root as HTMLElement);
    expect(gameplay).toHaveAttribute('data-game-state', 'game-over');
    expect(screen.getByText('CRASHED!')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /retry/i }));
    expect(gameplay).toHaveAttribute('data-game-state', 'playing');
    expect(gameplay).toHaveAttribute('data-score', '0');
  });

  it('ignores gameplay keyboard controls outside the gameplay screen', () => {
    resetSharedAppStore();
    const { container } = render(createElement(App));
    const root = container.querySelector('[data-setfarm-root="wingloop-lite-fixcheck"]');

    act(() => {
      wingloopStore.actions.navigate('settings');
    });
    expect(window.app?.state.screen).toBe('settings');
    expect(window.app?.state.paused).toBe(true);

    fireEvent.keyDown(root as HTMLElement, { key: ' ' });
    expect(window.app?.state.paused).toBe(true);

    fireEvent.keyDown(root as HTMLElement, { key: 'Enter' });
    expect(window.app?.state.score).toBe(0);
  });

  it('advances through the app game loop while active and stops after pause', () => {
    vi.useFakeTimers();
    resetSharedAppStore();
    const { container } = render(createElement(App));
    const root = container.querySelector('[data-setfarm-root="wingloop-lite-fixcheck"]');

    fireEvent.keyDown(root as HTMLElement, { key: ' ' });
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(window.app?.state.score).toBe(24);

    fireEvent.keyDown(root as HTMLElement, { key: ' ' });
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(window.app?.state.score).toBe(24);
    vi.useRealTimers();
  });
});
