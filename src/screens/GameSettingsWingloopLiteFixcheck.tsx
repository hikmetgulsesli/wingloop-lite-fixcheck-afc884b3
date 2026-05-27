// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - WingLoop Lite FixCheck
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Keyboard, Music, Trash2, Volume2 } from "lucide-react";


export type GameSettingsWingloopLiteFixcheckActionId = "easy-1" | "normal-2" | "hard-3" | "slow-4" | "normal-5" | "fast-6" | "button-7-7" | "button-8-8" | "reset-high-score-9" | "save-settings-10" | "back-to-game-11";

export interface GameSettingsWingloopLiteFixcheckProps {
  actions?: Partial<Record<GameSettingsWingloopLiteFixcheckActionId, () => void>>;
}

export function GameSettingsWingloopLiteFixcheck({ actions }: GameSettingsWingloopLiteFixcheckProps) {
  return (
    <>
      {/* Simulated Gameplay Background */}
      <div className="absolute inset-0 z-0 opacity-40 blur-sm" data-alt="A retro 8-bit style arcade game background featuring neon lines and a grid over a dark void, reminiscent of classic arcade games. Deep deep charcoal background with electric blue and bright yellow accents. Luminous, high contrast, modern-retro aesthetic." style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-og43enzfYx57NH1OpngyPwOOvHysgK2dTyuhfFuYAqzi8tyo3R1o269fD0xPTRGHo49fU9KHWNWOtIwtH5pSnKYFQXh0S56fvFxxcNCXBmvJVpAC23jMVqofulxpwNGzC1bsblHXHbdSb5YJWqNvJkS6fNUYJ6_cry0_XIxH05_fiHCuzkWAEfMZOeMS4RjJoUw6y-nOEaCZcdjhHaNHPrRiZ5Z73O_ifRtu3xCjlPB6oJEJEkf1WvzJo2T6lR4NFP1NtLLAIKOD')", backgroundSize: "cover", backgroundPosition: "center"}}></div>
      {/* Modal Container */}
      <main className="relative z-10 w-[90%] max-w-md bg-surface-container-high rounded-lg bezel-effect p-container-padding flex flex-col gap-element-gap shadow-2xl">
      {/* Header */}
      <header className="text-center mb-unit">
      <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-primary tracking-tighter italic">Settings</h1>
      </header>
      {/* Settings Content */}
      <div className="flex flex-col gap-container-padding overflow-y-auto max-h-[614px] pr-2 custom-scrollbar">
      {/* Difficulty Segment */}
      <section className="flex flex-col gap-unit">
      <label className="font-label-mono text-label-mono text-on-surface-variant uppercase">Difficulty</label>
      <div className="flex bg-surface rounded-DEFAULT p-1 bezel-effect">
      <button className="flex-1 py-2 text-center rounded-sm font-label-mono text-label-mono text-on-surface-variant hover:text-on-surface transition-colors" type="button" data-action-id="easy-1" onClick={actions?.["easy-1"]}>Easy</button>
      <button className="flex-1 py-2 text-center rounded-sm font-label-mono text-label-mono bg-primary-container/20 text-primary glow-active transition-colors" type="button" data-action-id="normal-2" onClick={actions?.["normal-2"]}>Normal</button>
      <button className="flex-1 py-2 text-center rounded-sm font-label-mono text-label-mono text-on-surface-variant hover:text-on-surface transition-colors" type="button" data-action-id="hard-3" onClick={actions?.["hard-3"]}>Hard</button>
      </div>
      </section>
      {/* Speed Segment */}
      <section className="flex flex-col gap-unit">
      <label className="font-label-mono text-label-mono text-on-surface-variant uppercase">Speed</label>
      <div className="flex bg-surface rounded-DEFAULT p-1 bezel-effect">
      <button className="flex-1 py-2 text-center rounded-sm font-label-mono text-label-mono text-on-surface-variant hover:text-on-surface transition-colors" type="button" data-action-id="slow-4" onClick={actions?.["slow-4"]}>Slow</button>
      <button className="flex-1 py-2 text-center rounded-sm font-label-mono text-label-mono bg-primary-container/20 text-primary glow-active transition-colors" type="button" data-action-id="normal-5" onClick={actions?.["normal-5"]}>Normal</button>
      <button className="flex-1 py-2 text-center rounded-sm font-label-mono text-label-mono text-on-surface-variant hover:text-on-surface transition-colors" type="button" data-action-id="fast-6" onClick={actions?.["fast-6"]}>Fast</button>
      </div>
      </section>
      {/* Audio Toggles */}
      <section className="flex flex-col gap-element-gap">
      <label className="font-label-mono text-label-mono text-on-surface-variant uppercase mb-[-8px]">Audio</label>
      <div className="flex justify-between items-center bg-surface-container-highest p-3 rounded-DEFAULT bezel-effect">
      <div className="flex items-center gap-2">
      <Music className="text-primary" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">Music</span>
      </div>
      <button aria-pressed="true" className="w-12 h-6 rounded-full bg-primary relative transition-colors focus:outline-none" type="button" aria-label="Button 7" data-action-id="button-7-7" onClick={actions?.["button-7-7"]}>
      <div className="absolute right-1 top-1 w-4 h-4 bg-on-primary rounded-full transition-transform"></div>
      </button>
      </div>
      <div className="flex justify-between items-center bg-surface-container-highest p-3 rounded-DEFAULT bezel-effect">
      <div className="flex items-center gap-2">
      <Volume2 className="text-primary" aria-hidden={true} focusable="false" />
      <span className="font-body-md text-body-md">SFX</span>
      </div>
      <button aria-pressed="true" className="w-12 h-6 rounded-full bg-primary relative transition-colors focus:outline-none" type="button" aria-label="Button 8" data-action-id="button-8-8" onClick={actions?.["button-8-8"]}>
      <div className="absolute right-1 top-1 w-4 h-4 bg-on-primary rounded-full transition-transform"></div>
      </button>
      </div>
      </section>
      {/* Input Help */}
      <section className="flex flex-col gap-unit bg-surface-container-lowest p-3 rounded-DEFAULT bezel-effect">
      <label className="font-label-mono text-label-mono text-tertiary uppercase flex items-center gap-2">
      <Keyboard className="text-[16px]" aria-hidden={true} focusable="false" /> Input Help
                      </label>
      <div className="flex flex-col gap-2">
      <div className="flex justify-between text-sm">
      <span className="text-on-surface-variant">Space / Click</span>
      <span className="font-label-mono text-primary">FLAP</span>
      </div>
      <div className="flex justify-between text-sm">
      <span className="text-on-surface-variant">P Key</span>
      <span className="font-label-mono text-primary">PAUSE</span>
      </div>
      </div>
      </section>
      {/* Danger Zone */}
      <section className="flex justify-center mt-2">
      <button className="bg-error-container text-on-error-container font-label-mono text-label-mono py-2 px-4 rounded-DEFAULT btn-tactile-danger flex items-center gap-2 hover:bg-error hover:text-on-error transition-colors" type="button" data-action-id="reset-high-score-9" onClick={actions?.["reset-high-score-9"]}>
      <Trash2 className="text-[16px]" aria-hidden={true} focusable="false" /> Reset High Score
                      </button>
      </section>
      </div>
      {/* Actions */}
      <footer className="flex flex-col gap-unit mt-unit">
      <button className="bg-primary text-on-primary font-headline-lg-mobile text-headline-lg-mobile py-3 rounded-DEFAULT btn-tactile glow-active w-full uppercase tracking-wider" type="button" data-action-id="save-settings-10" onClick={actions?.["save-settings-10"]}>
                      Save Settings
                  </button>
      <button className="bg-surface text-on-surface font-label-mono text-label-mono py-3 rounded-DEFAULT btn-tactile-secondary w-full uppercase" type="button" data-action-id="back-to-game-11" onClick={actions?.["back-to-game-11"]}>
                      Back to Game
                  </button>
      </footer>
      </main>
      <style>{`
              /* Custom Scrollbar for Settings Area if it gets too tall */
              .custom-scrollbar::-webkit-scrollbar {
                  width: 6px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                  background: #050f1c; /* surface-container-lowest */
                  border-radius: 4px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: #424754; /* outline-variant */
                  border-radius: 4px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background: #8c909f; /* outline */
              }
          `}</style>
    </>
  );
}
