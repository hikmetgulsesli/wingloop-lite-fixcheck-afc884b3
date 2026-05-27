// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - WingLoop Lite FixCheck
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Plane, Settings } from "lucide-react";


export type GameplayWingloopLiteFixcheckActionId = "settings-1" | "start-game-2" | "retry-3";

export interface GameplayWingloopLiteFixcheckState {
  score: number;
  highScore: number;
  progress: number;
  level: number;
  paused: boolean;
  gameOver: boolean;
}

export interface GameplayWingloopLiteFixcheckProps {
  actions?: Partial<Record<GameplayWingloopLiteFixcheckActionId, () => void>>;
  gameState?: Partial<GameplayWingloopLiteFixcheckState>;
}

export function GameplayWingloopLiteFixcheck({ actions, gameState }: GameplayWingloopLiteFixcheckProps) {
  const score = gameState?.score ?? 0;
  const highScore = gameState?.highScore ?? 0;
  const progress = gameState?.progress ?? 0;
  const level = gameState?.level ?? 1;
  const paused = gameState?.paused ?? true;
  const gameOver = gameState?.gameOver ?? false;
  const playing = !paused && !gameOver;
  const primaryPrompt = gameOver ? "Crashed" : playing ? "Loop in Progress" : score > 0 ? "Paused" : "Tap or Space to Start";
  const startLabel = score > 0 && paused ? "Resume Game" : "Start Game";

  return (
    <>
      {/* TopAppBar (From JSON) */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-container-padding py-unit bg-surface/50 backdrop-blur-md border-b border-white/10">
      <div className="font-headline-lg-mobile text-headline-lg-mobile text-surface-tint italic tracking-tighter md:font-headline-lg md:text-headline-lg">WingLoop Lite</div>
      <div className="flex items-center gap-element-gap">
      <div className="bg-black/50 border border-primary px-3 py-1 rounded flex items-center">
      <span className="font-label-mono text-label-mono text-primary">HI: {highScore.toString().padStart(4, "0")}</span>
      </div>
      <button className="text-tertiary hover:bg-surface-container-highest transition-colors rounded-full p-2 flex items-center justify-center" type="button" aria-label="Settings" data-action-id="settings-1" onClick={actions?.["settings-1"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* SideNavBar (Hidden on Mobile, Visible on Desktop as per rules, though usually suppressed for purely transactional game screens. Since this is a dedicated gameplay screen, we'll keep it minimal or suppress it. Let's suppress it to maximize canvas as per the "Dead end/Focus" rule). */}
      {/* Main Gameplay Area */}
      <main className="flex-grow relative mt-[56px] md:mt-[72px] bg-surface-container-low overflow-hidden" data-game-state={gameOver ? "game-over" : playing ? "playing" : "paused"} data-score={score} data-progress={progress}>
      {/* Scrolling Background */}
      <div className="absolute inset-0 scrolling-bg z-0 opacity-40" data-alt="A stylized, neon-lit cyberpunk cityscape rendered in 8-bit or pixel art style. The scene is set at night with deep blacks and vibrant electric blues, neon pinks, and glowing cyan accents. Tall skyscrapers stretch into a dark sky, illuminated by glowing signs and flying vehicles. The aesthetic is modern-retro arcade, capturing a sense of speed and digital energy." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAXggqjeV-chiwyB-41mLqSjMVCNYH11U1PeTjxqRGVCA8xsFsj5E_PiwWvMFMlTWC8uc2Mqj5UzVEPUtVc-JjjgJE38eHdyaAv3O6u_87uYqYp-HVMGcdAcYJi555ZdnO_TcP1GlCuAmzgi_Za1_BOS3RuGFqPHF07k_C47vUsZVBkDpbI9F4nXTniBR7j1lOajrjetxjMvrefDMG0R27OxqWrTyOxxzblLomutHvQWQIIe5hSVws_yZ48UUTgioR_uu4MXJwQhFMj')"}}>
      </div>
      {/* Gameplay Canvas */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-between py-safe-margin px-container-padding">
      {/* HUD: Score */}
      <div className="w-full flex justify-center mt-8">
      <h1 className="font-display-score text-display-score text-tertiary text-glow z-20 relative">{score}</h1>
      </div>
      {/* Center Action Area (Initial State) */}
      <div className={`flex flex-col items-center justify-center space-y-8 z-30 ${playing || gameOver ? "hidden" : ""}`} id="start-overlay">
      {/* Floating Character Placeholder */}
      <div className="w-16 h-16 bg-secondary rounded-lg pulse glow-effect border border-white/20 relative shadow-xl flex items-center justify-center mb-8">
      <Plane  style={{fontVariationSettings: "'FILL' 1"}} className="text-background text-3xl" aria-hidden={true} focusable="false" />
      </div>
      <div className="text-center space-y-4">
      <p className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface">{primaryPrompt}</p>
      <button className="bg-primary text-on-primary-fixed font-bold font-body-md text-body-md px-8 py-4 rounded-lg border-b-4 border-on-primary-fixed-variant hover:bg-primary-fixed transition-colors hover-press glow-effect w-full max-w-[200px] mx-auto block min-h-[48px]" id="btn-start" type="button" data-action-id="start-game-2" onClick={actions?.["start-game-2"]}>
                              {startLabel}
                          </button>
      </div>
      </div>
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 w-[min(320px,calc(100vw-32px))]">
      <div className="h-3 w-full rounded-full border border-primary bg-black/50 overflow-hidden" aria-label="Progress">
      <div className="h-full bg-primary transition-all duration-300" style={{width: `${progress}%`}} />
      </div>
      <div className="mt-2 flex justify-between font-label-mono text-label-mono text-on-surface-variant">
      <span>LVL {level}</span>
      <span>{gameOver ? "CRASHED" : playing ? "LIVE" : "PAUSED"}</span>
      </div>
      </div>
      {/* Keyboard Hints (Desktop Only) */}
      <div className="w-full flex justify-between text-on-surface-variant/50 font-label-mono text-label-mono pb-4 hidden md:flex z-20">
      <span>[Space] to Flap</span>
      <span>[P] to Pause</span>
      </div>
      </div>
      {/* Game Over Overlay (Hidden by Default) */}
      <div className={`absolute inset-0 bg-background/80 backdrop-blur-sm z-40 flex items-center justify-center p-container-padding ${gameOver ? "" : "hidden"}`} id="game-over-overlay">
      <div className="bg-surface-variant border-4 border-error p-8 rounded-xl max-w-sm w-full text-center shadow-2xl transform scale-95 transition-transform duration-300" id="game-over-card">
      <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-error mb-2">CRASHED!</h2>
      <div className="font-display-score text-display-score text-tertiary text-glow mb-6">{score}</div>
      <div className="flex gap-4 justify-center">
      <div className="bg-black/50 border border-primary px-4 py-2 rounded flex flex-col items-center">
      <span className="font-label-mono text-[10px] text-on-surface-variant">HIGH SCORE</span>
      <span className="font-label-mono text-label-mono text-primary mt-1">{highScore}</span>
      </div>
      </div>
      <button className="mt-8 bg-error text-on-error font-bold font-body-md text-body-md px-8 py-4 rounded-lg border-b-4 border-error-container hover:bg-error-container hover:text-error transition-colors hover-press w-full min-h-[48px] pulse" id="btn-restart" type="button" data-action-id="retry-3" onClick={actions?.["retry-3"]}>
                          Retry
                      </button>
      </div>
      </div>
      </main>
      
    </>
  );
}
