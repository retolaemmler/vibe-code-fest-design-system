# Vibe design system — always-on rules

A token-driven system for the Vibe Code Fest site: bold gradient brand accent,
calm neutral surfaces, technical-but-friendly voice (Geist Sans / Geist Mono).

## Hard constraints

- **Tokens only.** No hex, `rgb()`, `hsl()` literals, no `text-white` /
  `bg-black` / `text-gray-500`, no arbitrary values like `bg-[#1C1C1B]`.
  Every colour, radius, shadow and motion value comes from a semantic token.
- **Variants live in `cva()`.** A new look is a new variant on the existing
  component, never a one-off `className` override or a near-duplicate
  component. `className` at a call site is for layout only.
- **`cn()` for all class merging.**
- **Every interactive element** has a hover state, a disabled state and a
  visible `focus-visible` ring built on `--ring`.
- **Motion only confirms an action** (press, toggle, expand). No blanket
  fade-and-slide-up entrances or hover transitions on cards.
- **Type scale by name**: `text-display`, `text-h1`…`text-caption`. No ad-hoc
  font sizes or weights.
- **Spacing** uses the standard 4px Tailwind scale.

## Elevation — one ladder, four steps

Every shadow in the system is one of these tokens. Never write a raw
`box-shadow`, a Tailwind default (`shadow-md`, `shadow-xl`) or an arbitrary
`shadow-[...]` value.

| Level | Class | Token | Use |
| --- | --- | --- | --- |
| 0 flat | `shadow-flat` | `--shadow-flat` | Flush with the page; separation via `border-border` only |
| 1 raised | `shadow-raised` | `--shadow-raised` | Resting lift: cards, gradient button, sticky header |
| 2 lifted | `shadow-lifted` | `--shadow-lifted` | Hover or drag of a level-1 surface |
| 3 overlay | `shadow-overlay` | `--shadow-overlay` | Popovers, dropdowns, dialogs, toasts |
| accent | `shadow-glow` | `--shadow-glow` | Brand emphasis behind gradient surfaces — not a depth step |

- Skip no more than one step: a level-1 surface hovers to level 2, never 3.
- Elevation belongs to a component's `cva()` variant (see `Card`'s
  `plain | outline | raised | elevated | overlay | glass | gradient`), not to a
  call-site `className`.
- Both themes define all five tokens; dark mode deepens the shadow rather than
  dropping it.

## Icons — one set, no exceptions

- The design system's icon set is **Lucide**, and it is the only one.
  Do not add `react-icons`, Heroicons, Font Awesome, Material Symbols,
  emoji-as-icons, or hand-written inline `<svg>` glyphs.
- Always render icons through the system's `Icon` component:
  `<Icon name="ticket" />`. Do not import glyphs from `lucide-react`
  directly in app code — the `icons` registry is the allowed surface.
- Sizes come from `Icon`'s `size` prop (`xs | sm | md | lg | xl`); tone from
  its `tone` prop, defaulting to `current` so icons inherit their container's
  token colour. Never set an icon colour with a raw class.
- Icons inside `Button`, `Badge` and similar components are auto-sized by
  those components — pass the `Icon` as a child and leave sizing alone.
- Decorative icons stay `aria-hidden`; an icon that carries meaning (or an
  icon-only control) needs `label` on `Icon` or an `aria-label` on the control.
- Need a glyph that isn't in the registry? Add it to `icons` in
  `src/components/ui/icon.tsx` from Lucide. Never reach for another library.

## Button usage by context

Pick the Button variant from the surface it sits on, not from personal taste.

- **Inside cards** — use `gradient`, `solid` or `secondary`. These sit on a
  `card` or `elevated` surface and need enough visual weight to feel clickable.
- **Inside call-to-action panels** — use `secondary`. The CTA panel already has
  high contrast (gradient background or strong border), so the button should
  read as an invitation, not another heavy accent.
- **Never use `ghost` or `link` for primary actions** inside cards or CTAs.
  Reserve them for tertiary actions, footer links, and inline text controls.

See `.lovable/rules/design-tokens.md` for the token tables and
`.lovable/rules/components.md` for the component catalogue.
