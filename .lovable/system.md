# Vibe design system — always-on rules

A token-driven system for the Vibe Code Fest site: bold pink-to-blue gradient brand accent,
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

## Dark sections

Use `--dark-section` / `bg-dark-section` for full-bleed alternate bands that
must feel heavy and branded: sponsor strips, large CTAs, footer backgrounds.
It uses the same hue as `--primary` and stays dark in both light and dark
mode. Always pair it with `--dark-section-foreground` (white) and the gradient
or `secondary` button variants; never place default body text
(`text-foreground`) straight on it.

For headings and emphasized text on a dark-section band, use
`--accent-on-dark` / `text-accent-on-dark` — a light violet ramp of
brand-purple that harmonizes with the band. Use it **only** on
`bg-dark-section` surfaces; never on light backgrounds (use `--accent` or
`--primary` there instead). The token is identical in `:root` and `.dark`
because the dark section is dark in both modes.


## Icons — one set, no exceptions

- The design system's icon set is **Lucide**, and it is the only general icon
  library. A small set of curated brand/social glyphs that Lucide does not ship
  (e.g. `instagram`, `linkedin`, `whatsapp`) lives in the same `Icon` registry
  as custom SVG components. Do not add `react-icons`, Heroicons, Font Awesome,
  Material Symbols, emoji-as-icons, or ad-hoc inline `<svg>` glyphs.
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
  `src/components/ui/icon.tsx`. Prefer a Lucide import; for brand logos that
  Lucide does not provide, add a custom SVG glyph in `src/components/ui/social-icons.tsx`.

## Button usage by context

Pick the Button variant from the surface it sits on, not from personal taste.

- **Inside cards** — use `gradient`, `solid` or `secondary`. These sit on a
  `card` or `elevated` surface and need enough visual weight to feel clickable.
- **On gradient backgrounds, including call-to-action panels** — use `muted`.
  Its quiet, borderless surface keeps the action legible without competing with
  the gradient. Never use `muted` on plain, card, or dark-section surfaces.
- **Never use `ghost` or `link` for primary actions** inside cards or CTAs.
  Reserve them for tertiary actions, footer links, and inline text controls.

## Feature card & CTA panel usage

- **`FeatureCard` (plain)** — the default elevated card with a white `card`
  background. Use it when the card is **not interactive**: informational
  content like criteria, perks, and feature descriptions. It has no hover
  state and no link.
- **`FeatureCard` (clickable)** — pass `href` when the **whole area is
  clickable**: the card becomes a link with a primary-purple stroke and
  `primary-subtle` background, as well as a hover lift, pressed state and
  a `focus-visible` ring. Do not nest a `Button` inside it; the card itself
  is the link. The tint and stroke are automatic with `href`, not a separate
  highlight variant.
- **`CtaPanel`** — the closing call-to-action of a page, rendered on the
  brand gradient. Use it once per page, at the end. Its action button is
  `muted` — reserved for gradient surfaces. Pass `image` for the circular
  photo on the left; omit it for a compact centred panel.
- Do not add one-off `className` borders or backgrounds to FeatureCard; its
  appearance follows whether it is interactive (`href`) or not.

## Footer layout

The `Footer` component is a fixed three-part pattern:

1. **Top row** — brand mark on the far left, centred tagline or meta content,
   and the newsletter action on the far right.
2. **Divider** — a full-width `border-border` rule.
3. **Bottom row** — a single centred horizontal list of legal/secondary links,
   rendered with `Link variant="quiet"`, with icon-only social actions aligned
   to the right edge of the same row.

Pass links as a flat `links` array, not grouped columns. Keep the newsletter
button as `variant="gradient"` with `iconStart="mail"` so it matches the brand
action pattern used in the navbar. Social actions use `variant="secondary"`,
`size="icon"`, and must remain label-free; their accessible name is provided
through `aria-label`.

## Font loading

The type tokens reference **Geist Sans** (`--font-sans`) and **Geist Mono**
(`--font-mono`). The design-system CSS does not embed or fetch font files, so
consumers must load both families in their own app shell.

Use the exported `Fonts` component:

```tsx
import { Fonts } from "@/design-system/vibe";

// Inside your root <head>
<head>
  <Fonts />
</head>
```

- Mount `Fonts` once per page, ideally inside `<head>`.
- It loads **Geist** and **Geist Mono** weights 100–900 from Google Fonts with
  the required preconnect hints.
- If the fonts fail to load, the CSS fallback stack (`system-ui` for sans,
  `ui-monospace` for mono) keeps the UI readable.

The showcase app dogfoods the same component in `src/routes/__root.tsx`.

See `.lovable/rules/design-tokens.md` for the token tables and
`.lovable/rules/components.md` for the component catalogue.
