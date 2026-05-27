---
name: Neon Arcade
colors:
  surface: '#091421'
  surface-dim: '#091421'
  surface-bright: '#303a48'
  surface-container-lowest: '#050f1c'
  surface-container-low: '#121c2a'
  surface-container: '#16202e'
  surface-container-high: '#212b39'
  surface-container-highest: '#2b3544'
  on-surface: '#d9e3f6'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#d9e3f6'
  inverse-on-surface: '#27313f'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#ca8100'
  on-tertiary-container: '#3e2400'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#091421'
  on-background: '#d9e3f6'
  surface-variant: '#2b3544'
typography:
  display-score:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.5'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 24px
  element-gap: 16px
  safe-margin: 32px
---

## Brand & Style
The design system is engineered for high-velocity engagement, capturing the "one more try" spirit of classic arcade gaming through a modern lens. The brand personality is energetic, immediate, and playful, designed to evoke a sense of digital adrenaline and focused competition.

The design style is **Modern-Retro**. It blends the crisp usability of contemporary SaaS interfaces with the expressive energy of 8-bit aesthetics. Key visual drivers include high-contrast interactive elements, subtle luminous glows (simulating CRT or LED screens), and a tactile physical quality that makes every tap feel impactful. The interface stays out of the way of the gameplay while providing clear, vibrant feedback for scores and achievements.

## Colors
This design system utilizes a "Glow-on-Dark" strategy. The background is anchored in **Deep Charcoal**, providing a stable foundation that allows the high-vibrancy accent colors to pop without causing eye strain during fast-paced play.

- **Electric Blue (#3B82F6)**: The primary action color, used for main navigation and "Start" interactions.
- **Neon Green (#10B981)**: Used for success states, secondary interactions, and "Go" indicators.
- **Bright Yellow (#F59E0B)**: Reserved exclusively for high-value information like scores, currency, and gold-tier achievements.
- **Warning Red (#EF4444)**: Used for game-over screens, collision alerts, and destructive actions.
- **Deep Charcoal (#1F2937)**: The structural base for all UI containers and panels.

## Typography
The typography strategy creates a tension between technical precision and retro flair. 

**Space Grotesk** serves as the display face; its geometric, slightly unconventional curves mimic the feeling of pixel-art while maintaining modern legibility. It is used for large scores and primary screen titles.

**Plus Jakarta Sans** provides a friendly, approachable contrast for menus, settings, and instructional text. Its soft terminals balance the sharpness of the display font.

**JetBrains Mono** is utilized for metadata and secondary stats (e.g., "Best Score," "FPS," or "Level 01") to reinforce the "Lite FixCheck" technical/diagnostic aesthetic.

## Layout & Spacing
The layout follows a **Fixed-Content/Fluid-Safe-Area** model. The central gameplay area remains the focus, while UI elements are pushed to the edges using generous safe margins to prevent interference with the player's line of sight.

- **Padding**: Elements use a consistent 16px internal padding for comfort.
- **Rhythm**: A strict 8px grid governs all spacing, ensuring that even in a chaotic game environment, the UI feels structured and intentional.
- **Mobile First**: On mobile devices, buttons are scaled to a minimum 48px height to ensure "no-look" interactivity during intense gameplay.

## Elevation & Depth
Depth is created through **Tonal Stacking** and **Luminous Accents** rather than traditional shadows.

1.  **Base Layer**: The Deep Charcoal (#1F2937) game background.
2.  **Surface Layer**: UI Panels use a slightly lighter shade of charcoal with a 1px inner border of 10% white to create a "bezel" effect.
3.  **Active Layer**: Interactive elements use a subtle outer glow (0px 4px 20px) matching their brand color (Blue or Green) to signify they are "powered on."
4.  **Tactile Response**: Buttons use a 4px solid bottom-border (darker shade of the button color) to create a mechanical, "pressable" appearance without using realistic textures.

## Shapes
The shape language is consistently **Rounded (8px-12px)**. This softens the aggressive high-contrast color palette, making the game feel accessible and "bouncy" rather than harsh.

- **Primary Buttons**: 8px corner radius.
- **Main Containers**: 16px corner radius (rounded-lg).
- **Progress Bars**: Fully rounded (pill-shaped) to represent fluid movement.
- **Interactive Chips**: 8px corner radius for a compact look.

## Components

### Buttons
Buttons are high-vibrancy blocks. The "Primary" button is Electric Blue with a darker blue 4px bottom shadow. On press, the shadow disappears and the button translates 2px down to simulate a physical click. Text is always bold and centered.

### Score HUD
The HUD (Heads-Up Display) features the Bright Yellow score at the top center. It uses an "Outer Glow" effect to remain legible against shifting background colors.

### Game-Over Cards
These cards use a Deep Charcoal surface with a thick Neon Red border. They should "pop" into view using a spring animation. The primary action on this card (e.g., "Retry") should pulsate slightly to guide the player back into the loop.

### Stat Chips
Small, JetBrains Mono-driven labels used for "High Score" or "Attempt #" updates. These use a semi-transparent black background (50% opacity) with a thin Electric Blue outline.

### Progress Bars
Used for "FixCheck" loading or health. These should have a "scanning" animation—a lighter streak of color moving across the bar—to emphasize the technical theme.