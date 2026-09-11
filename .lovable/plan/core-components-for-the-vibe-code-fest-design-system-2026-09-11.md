# Core components for the Vibe Code Fest design system

Build the first wave of components that the event landing page leans on most, all driven by the tokens already defined in `src/index.css`. No page or marketing content in this step — only reusable pieces plus a showcase to see them.

## What gets built

Wave 1 — the primitives that appear on nearly every section of the landing page:

- **Button** — variants: `gradient` (the pink→purple primary action), `solid`, `outline`, `ghost`, `link`, `destructive`; sizes: `sm`, `md`, `lg`, `icon`. Focus ring, hover and disabled states on all of them.
- **Badge / Pill** — variants: `neutral`, `brand`, `info`, `success`, `warning`, `destructive`, plus `subtle` vs `solid` tone. Used for tags, "Free", date chips, track labels.
- **Card** — variants: `plain`, `elevated`, `glass` (the frosted surface), `outline`. Sub-parts: header, title, description, content, footer. No entrance animation, no blanket hover motion.
- **Section + Container** — page rhythm wrappers with size options, so spacing stays on the standard 4px scale instead of ad-hoc padding.
- **Heading + Text** — bound to the named type scale (display / h1 / h2 / h3 / body / small / caption), with a `gradient` option for headline accents.
- **Link** — inline and nav variants with the required focus ring.

Wave 2 — the composite pieces the landing page repeats:

- **Speaker card**, **schedule/agenda item**, **stat block**, **FAQ accordion item**, **navbar shell**, **footer shell**.

Each wave: build, export, add to the showcase, verify it renders, then continue.

## Rules being followed

- Every colour comes from a semantic token — no `text-white`, no hex, no arbitrary values.
- Visual variation lives in each component's `cva()` definition; `className` from a call site is for layout only.
- A new look means a new variant on the existing component, not a new near-duplicate component.
- `cn()` is used everywhere for class merging.
- Every interactive element gets a visible `--ring` focus-visible outline, a hover state and a disabled state.
- Motion only on action confirmation (button press, toggle) — no fade-and-slide-up on cards.

## Technical notes

- Add dependencies: `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react` (icons), and Radix primitives only where a component genuinely needs behaviour (accordion).
- New files: `src/lib/utils.ts` (`cn()`), one file per component under `src/components/ui/`, and `src/index.ts` as the barrel that re-exports everything — this is what consuming projects import from.
- A showcase route renders every component and every variant so the system can be reviewed visually; it stays preview-only and never ships to consuming projects.
- No changes to `src/index.css` tokens unless a component needs a value the token set genuinely lacks — in which case the token is added there first.

## Open question

Icons: fine to use Lucide, or should the system stay icon-library-free for now?
