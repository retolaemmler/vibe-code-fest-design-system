import * as React from "react";
import { createFileRoute, Link as RouterLink } from "@tanstack/react-router";

import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/feature-card";
import { CtaPanel } from "@/components/ui/cta-panel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Faq, FaqContent, FaqItem, FaqTrigger } from "@/components/ui/faq";
import { Footer } from "@/components/ui/footer";
import { Icon, icons, type IconName } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Container, Section } from "@/components/ui/layout";
import { Link } from "@/components/ui/link";
import { Navbar } from "@/components/ui/navbar";
import { ScheduleItem } from "@/components/ui/schedule-item";
import { SpeakerCard } from "@/components/ui/speaker-card";
import { Stat } from "@/components/ui/stat";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/style-guide")({
  head: () => ({
    meta: [
      { title: "Style Guide — Vibe Design System" },
      {
        name: "description",
        content:
          "Living style guide for the Vibe design system: colour roles read straight from the tokens, the type scale, spacing, radius, shadow, motion and every component variant and state.",
      },
      { property: "og:title", content: "Style Guide — Vibe Design System" },
      {
        property: "og:description",
        content:
          "Colour roles, type scale, spacing, elevation, motion and every component state — documented from the live design tokens.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StyleGuide,
});

/* -------------------------------------------------------------------------
   Preview-only helpers. Nothing here is exported from the library barrel.
   ---------------------------------------------------------------------- */

/** Reads a CSS custom property off <html> so specimens can never drift. */
function useTokenValues(names: readonly string[], theme: string) {
  const [values, setValues] = React.useState<Record<string, string>>({});
  React.useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    const next: Record<string, string> = {};
    for (const name of names) next[name] = styles.getPropertyValue(name).trim();
    setValues(next);
    // names is a module-level constant list; theme re-reads on toggle.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);
  return values;
}

function TokenName({ children }: { children: React.ReactNode }) {
  return (
    <code className="w-fit rounded-field bg-muted px-1.5 py-0.5 font-mono text-caption text-muted-foreground">
      {children}
    </code>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <Text as="span" size="caption" tone="muted">
      {children}
    </Text>
  );
}

function Snippet({ code }: { code: string }) {
  return (
    <details className="group rounded-card border border-border bg-muted/50">
      <summary className="flex cursor-pointer items-center gap-2 rounded-card px-3 py-2 text-caption text-muted-foreground outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
        <Icon name="chevronRight" size="xs" className="transition-transform group-open:rotate-90" />
        Code
      </summary>
      <pre className="overflow-x-auto px-3 pb-3 font-mono text-small text-foreground">
        {code}
      </pre>
    </details>
  );
}

function Spec({
  label,
  token,
  children,
  className,
}: {
  label: string;
  token?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex flex-col gap-1">{children}</div>
      <div className="flex flex-wrap items-center gap-2">
        <Caption>{label}</Caption>
        {token ? <TokenName>{token}</TokenName> : null}
      </div>
    </div>
  );
}

function Block({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <Heading level="h2">{title}</Heading>
        {intro ? (
          <Text tone="muted" className="max-w-3xl">
            {intro}
          </Text>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function StateGrid({
  columns,
  children,
}: {
  columns: readonly string[];
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-auto rounded-card border border-border">
      <div
        className="grid min-w-max items-center gap-x-6 gap-y-4 px-4 py-4"
        style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, auto))` }}
      >
        {columns.map((c) => (
          <Caption key={c}>{c}</Caption>
        ))}
        {children}
      </div>
    </div>
  );
}

/* ------------------------------- colour map ---------------------------- */

type Swatch = { token: string; usage: string; on?: string };

const COLOR_GROUPS: { group: string; blurb: string; swatches: Swatch[] }[] = [
  {
    group: "Surface",
    blurb:
      "The layers a page is built from. Pick the flattest one that still separates content — page, then card, then a raised popover.",
    swatches: [
      { token: "background", usage: "The page itself. Every screen starts here." },
      { token: "card", usage: "Panels sitting on the page: cards, speaker tiles, schedule rows." },
      { token: "popover", usage: "Floating layers above the page: menus, tooltips, dialogs." },
      { token: "muted", usage: "Quiet bands and fills that separate a section without a border." },
      { token: "secondary", usage: "Neutral chips and secondary fills that must not read as brand." },
      { token: "surface-glass", usage: "The frosted sticky header and glass cards." },
    ],
  },
  {
    group: "Content",
    blurb:
      "Text and icons. Each surface has a matching foreground — never pair a foreground with a surface it was not made for.",
    swatches: [
      { token: "foreground", usage: "Default body and heading text on the page.", on: "background" },
      { token: "card-foreground", usage: "Text inside cards and panels.", on: "card" },
      { token: "popover-foreground", usage: "Text inside floating layers.", on: "popover" },
      { token: "muted-foreground", usage: "Supporting text: captions, labels, metadata, placeholders.", on: "background" },
      { token: "primary-foreground", usage: "Text and icons on a primary or gradient fill.", on: "primary" },
      { token: "accent-foreground", usage: "Text and icons on the pink accent fill.", on: "accent" },
    ],
  },
  {
    group: "Interactive",
    blurb:
      "Anything a person can act on. The pink-to-purple gradient is the brand's primary action; the flat primary is its calm sibling for dense UI.",
    swatches: [
      { token: "primary", usage: "The main action, active nav state and key numbers." },
      { token: "primary-hover", usage: "Hover and pressed state of a primary control." },
      { token: "primary-subtle", usage: "Tinted background behind a brand badge or selected row." },
      { token: "accent", usage: "The pink half of the brand. Highlights, never a second button style." },
      { token: "accent-subtle", usage: "Tinted background for accent chips." },
      { token: "border", usage: "Dividers and the outline of outline buttons and cards." },
      { token: "input", usage: "Field borders in their resting state." },
      { token: "ring", usage: "The focus ring on every keyboard-focusable control." },
    ],
  },
  {
    group: "Feedback",
    blurb:
      "Status only — never decoration. Each has a solid fill for badges and a subtle tint for message backgrounds.",
    swatches: [
      { token: "success", usage: "Confirmed, free, available, registration complete." },
      { token: "success-subtle", usage: "Background of a success message." },
      { token: "warning", usage: "Few seats left, deadline approaching, needs attention." },
      { token: "warning-subtle", usage: "Background of a warning message." },
      { token: "destructive", usage: "Errors, sold out, cancel and delete actions." },
      { token: "destructive-subtle", usage: "Background of an error message or invalid field." },
      { token: "info", usage: "Neutral information: venue notes, track labels." },
      { token: "info-subtle", usage: "Background of an informational note." },
    ],
  },
];

const COLOR_TOKEN_NAMES = COLOR_GROUPS.flatMap((g) =>
  g.swatches.map((s) => `--${s.token}`),
);

const TYPE_STEPS = [
  {
    name: "display",
    sample: "One day of building in the open",
    use: "The single hero headline of a page. Never twice on one screen.",
  },
  {
    name: "h1",
    sample: "Talks, workshops and a lot of coffee",
    use: "Page titles below the hero.",
  },
  { name: "h2", sample: "Meet this year's speakers", use: "Section headings." },
  { name: "h3", sample: "Designing with tokens, not pixels", use: "Card and list-item titles." },
  {
    name: "body",
    sample:
      "Doors open at nine in Zurich. Bring a laptop, a project you care about, and expect to leave with something that runs.",
    use: "Paragraphs and default reading text.",
  },
  {
    name: "small",
    sample: "Tickets are free, but seats are limited to six hundred.",
    use: "Supporting text, helper copy and dense lists.",
  },
  { name: "caption", sample: "Main stage · 10:00", use: "Labels, chips, metadata and eyebrows." },
] as const;

const TYPE_TOKEN_NAMES = TYPE_STEPS.flatMap((s) => [
  `--text-${s.name}-size`,
  `--text-${s.name}-weight`,
  `--text-${s.name}-leading`,
]);

const SPACING_STEPS = [1, 2, 3, 4, 6, 8, 12, 16] as const;
const RADII = [
  { cls: "rounded-field", token: "--radius-field", use: "Inputs, small and medium buttons" },
  { cls: "rounded-card", token: "--radius-card", use: "Cards, panels, schedule rows" },
  { cls: "rounded-lg", token: "--radius-lg", use: "Large feature surfaces" },
  { cls: "rounded-pill", token: "--radius-pill", use: "Badges and large buttons" },
] as const;
const SHADOWS = [
  {
    level: "Level 0",
    cls: "shadow-flat",
    token: "--shadow-flat",
    use: "Flush with the page. Separation comes from border-border alone: outline cards, table rows, section blocks.",
  },
  {
    level: "Level 1",
    cls: "shadow-raised",
    token: "--shadow-raised",
    use: "Resting lift: raised cards, the gradient button, sticky headers, feature medallions.",
  },
  {
    level: "Level 2",
    cls: "shadow-lifted",
    token: "--shadow-lifted",
    use: "Something is being acted on: hover or drag of a level-1 surface, elevated cards.",
  },
  {
    level: "Level 3",
    cls: "shadow-overlay",
    token: "--shadow-overlay",
    use: "Floats above the page and closes: popovers, dropdowns, dialogs, toasts.",
  },
  {
    level: "Accent",
    cls: "shadow-glow",
    token: "--shadow-glow",
    use: "Not a depth step. Brand emphasis behind gradient surfaces such as the hero CTA panel.",
  },
] as const;
const SHADOW_TOKEN_NAMES = SHADOWS.map((s) => s.token);
const MOTION = [
  { token: "--duration-fast", use: "Colour changes on buttons and links" },
  { token: "--duration-base", use: "Lifts, expands, toggles" },
  { token: "--duration-slow", use: "Large surfaces entering" },
  { token: "--ease-standard", use: "Default easing for state changes" },
  { token: "--ease-emphasized", use: "Motion that should feel confident" },
] as const;

const MOTION_TOKEN_NAMES = MOTION.map((m) => m.token);
const SURFACE_TOKEN_NAMES = [
  ...RADII.map((r) => r.token),
  "--radius",
  "--blur-surface",
  "--hover-lift",
];

const NAV = [
  { id: "colour", label: "Colour" },
  { id: "typography", label: "Typography" },
  { id: "spacing", label: "Spacing" },
  { id: "shape", label: "Radius & elevation" },
  { id: "motion", label: "Motion" },
  { id: "icons", label: "Icons" },
  { id: "components", label: "Components" },
] as const;

/* --------------------------------- page -------------------------------- */

function StyleGuide() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  const [iconQuery, setIconQuery] = React.useState("");

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    return () => document.documentElement.classList.remove("dark");
  }, [theme]);

  const colorValues = useTokenValues(COLOR_TOKEN_NAMES, theme);
  const typeValues = useTokenValues(TYPE_TOKEN_NAMES, theme);
  const motionValues = useTokenValues(MOTION_TOKEN_NAMES, theme);
  const surfaceValues = useTokenValues(SURFACE_TOKEN_NAMES, theme);
  const shadowValues = useTokenValues(SHADOW_TOKEN_NAMES, theme);

  const iconNames = (Object.keys(icons) as IconName[]).filter((n) =>
    n.toLowerCase().includes(iconQuery.trim().toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        sticky
        variant="glass"
        brand={<span className="text-h3 text-gradient-primary">Vibe</span>}
        actions={
          <Button
            variant="outline"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-pressed={theme === "dark"}
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} />
            {theme === "dark" ? "Light" : "Dark"}
          </Button>
        }
      >
        <RouterLink
          to="/"
          className="text-small text-muted-foreground rounded-field px-2 py-1 outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Showcase
        </RouterLink>
        <Link variant="nav" href="#colour" active>
          Style guide
        </Link>
      </Navbar>

      <Section spacing="md" surface="gradient">
        <Container className="flex flex-col items-start gap-5">
          <Badge variant="brand" tone="subtle">
            <Icon name="sparkles" size="xs" />
            Source of truth
          </Badge>
          <Heading level="display" tone="gradient">
            Style guide
          </Heading>
          <Text tone="muted" className="max-w-2xl">
            Every specimen below is rendered from the live design tokens, so this
            page cannot drift from the system. Each one is labelled with the exact
            token or variant name to type when reusing it.
          </Text>
        </Container>
      </Section>

      <Container className="flex flex-col gap-16 py-12 lg:flex-row lg:items-start lg:gap-12">
        <nav
          aria-label="Style guide sections"
          className="flex flex-wrap gap-2 lg:sticky lg:top-24 lg:w-48 lg:shrink-0 lg:flex-col"
        >
          {NAV.map((item) => (
            <Link key={item.id} variant="quiet" href={`#${item.id}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex min-w-0 flex-1 flex-col gap-20">
          {/* ------------------------------ colour --------------------- */}
          <Block
            id="colour"
            title="Colour"
            intro="Swatches read their value straight from the CSS variable, in whichever theme is active. Use the semantic name, never the raw value — that is what makes light and dark work for free."
          >
            {COLOR_GROUPS.map((group) => (
              <div key={group.group} className="flex flex-col gap-4">
                <Heading level="h3">{group.group}</Heading>
                <Text size="small" tone="muted" className="max-w-3xl">
                  {group.blurb}
                </Text>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {group.swatches.map((swatch) => (
                    <div
                      key={swatch.token}
                      className="flex flex-col gap-3 rounded-card border border-border bg-card p-4"
                    >
                      <div
                        className="flex h-16 items-center justify-center rounded-field border border-border"
                        style={{
                          background: swatch.on
                            ? `hsl(var(--${swatch.on}))`
                            : `hsl(var(--${swatch.token}))`,
                          color: swatch.on
                            ? `hsl(var(--${swatch.token}))`
                            : undefined,
                        }}
                      >
                        {swatch.on ? (
                          <span className="text-small font-medium">Aa — sample text</span>
                        ) : null}
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <TokenName>{`--${swatch.token}`}</TokenName>
                        <TokenName>
                          {swatch.token.includes("foreground")
                            ? `text-${swatch.token}`
                            : `bg-${swatch.token}`}
                        </TokenName>
                      </div>
                      <Caption>{colorValues[`--${swatch.token}`] ?? "—"}</Caption>
                      <Text size="small" tone="muted">
                        {swatch.usage}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex flex-col gap-4">
              <Heading level="h3">Gradient</Heading>
              <Text size="small" tone="muted" className="max-w-3xl">
                The pink-to-purple gradient is the brand's primary. It belongs on
                the one leading action of a screen and on hero headlines — nowhere
                else.
              </Text>
              <div className="grid gap-4 sm:grid-cols-2">
                <Spec label="Primary action fill" token="bg-gradient-primary">
                  <div className="h-20 rounded-card bg-gradient-primary" />
                </Spec>
                <Spec label="Headline fill" token="text-gradient-primary">
                  <span className="text-h2 text-gradient-primary">Build in the open</span>
                </Spec>
              </div>
            </div>
          </Block>

          {/* --------------------------- typography -------------------- */}
          <Block
            id="typography"
            title="Typography"
            intro="Geist for everything, Geist Mono for anything technical: times, ticket codes, token names. Sizes come from named steps, never from ad-hoc classes."
          >
            <div className="flex flex-col gap-8">
              {TYPE_STEPS.map((step) => (
                <div
                  key={step.name}
                  className="flex flex-col gap-3 border-b border-border pb-8 last:border-b-0"
                >
                  <p className={`text-${step.name}`}>{step.sample}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <TokenName>{`text-${step.name}`}</TokenName>
                    <Caption>
                      {typeValues[`--text-${step.name}-size`] ?? "—"} ·{" "}
                      {typeValues[`--text-${step.name}-weight`] ?? "—"} weight ·{" "}
                      {typeValues[`--text-${step.name}-leading`] ?? "—"} line-height
                    </Caption>
                  </div>
                  <Text size="small" tone="muted">
                    {step.use}
                  </Text>
                </div>
              ))}
              <div className="flex flex-wrap gap-6">
                <Spec label="Sans — headings and body" token="font-sans">
                  <span className="font-sans text-h3">Vibe Code Fest 2026</span>
                </Spec>
                <Spec label="Mono — times, codes, labels" token="font-mono">
                  <span className="font-mono text-h3">09:00 · VCF-2026</span>
                </Spec>
              </div>
            </div>
          </Block>

          {/* ---------------------------- spacing ---------------------- */}
          <Block
            id="spacing"
            title="Spacing"
            intro="The standard 4px scale — no parallel system. Gaps inside a component step by 2 and 3; gaps between blocks step by 6, 8 and 12."
          >
            <div className="flex flex-col gap-3">
              {SPACING_STEPS.map((step) => (
                <div key={step} className="flex items-center gap-4">
                  <TokenName>{`p-${step} / gap-${step}`}</TokenName>
                  <div
                    className="h-4 rounded-field bg-primary"
                    style={{ width: `calc(var(--spacing) * ${step})` }}
                  />
                  <Caption>{step * 4}px</Caption>
                </div>
              ))}
            </div>
          </Block>

          {/* --------------------- radius and elevation ---------------- */}
          <Block
            id="shape"
            title="Radius & elevation"
            intro="Every radius derives from one token, so changing --radius rescales the whole system. Elevation is one ladder of four steps plus a brand accent — every shadow in the system is one of these variables, never a hand-written box-shadow."
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {RADII.map((r) => (
                <Spec
                  key={r.cls}
                  label={`${r.use} · ${surfaceValues[r.token] ?? ""}`}
                  token={r.cls}
                >
                  <div className={cn("h-20 border border-border bg-muted", r.cls)} />
                </Spec>
              ))}
            </div>
            <div className="space-y-4">
              {SHADOWS.map((s) => (
                <div
                  key={s.cls}
                  className="grid items-center gap-4 rounded-card border border-border bg-card p-4 sm:grid-cols-[10rem_1fr]"
                >
                  <div
                    className={cn(
                      "h-20 rounded-card border border-border/60 bg-card",
                      s.cls,
                    )}
                  />
                  <div className="min-w-0 space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <Caption>{s.level}</Caption>
                      <code className="rounded-field bg-muted px-2 py-0.5 font-mono text-caption text-foreground">
                        {s.cls}
                      </code>
                      <code className="rounded-field bg-muted px-2 py-0.5 font-mono text-caption text-muted-foreground">
                        {s.token}
                      </code>
                    </div>
                    <Text className="text-small text-muted-foreground">{s.use}</Text>
                    <Caption>
                      {shadowValues[s.token] ?? "—"}
                    </Caption>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <Spec label="Frosted header and glass cards" token="surface-glass">
                <div className="h-20 rounded-card bg-gradient-primary p-3">
                  <div className="h-full rounded-field surface-glass" />
                </div>
              </Spec>
              <Spec
                label={`Hover lift · ${surfaceValues["--hover-lift"] ?? ""}`}
                token="hover-lift"
              >
                <div className="h-20 rounded-card border border-border bg-card hover-lift" />
              </Spec>
            </div>
          </Block>

          {/* ----------------------------- motion ---------------------- */}
          <Block
            id="motion"
            title="Motion"
            intro="Motion confirms an action — a press, a toggle, an expand. Nothing fades in on load, and nothing moves that the person did not touch. Hover each bar to see its timing."
          >
            <div className="flex flex-col gap-4">
              {MOTION.map((m) => (
                <div key={m.token} className="flex flex-wrap items-center gap-4">
                  <TokenName>{m.token}</TokenName>
                  <Caption>{motionValues[m.token] ?? "—"}</Caption>
                  <div className="h-8 flex-1 min-w-40 rounded-field bg-muted p-1">
                    <div
                      className="h-full w-8 rounded-field bg-primary transition-transform hover:translate-x-[calc(100%*4)]"
                      style={{
                        transitionDuration: motionValues[m.token]?.startsWith("cubic")
                          ? "var(--duration-slow)"
                          : `var(${m.token})`,
                        transitionTimingFunction: motionValues[m.token]?.startsWith("cubic")
                          ? `var(${m.token})`
                          : "var(--ease-standard)",
                      }}
                    />
                  </div>
                  <Text size="small" tone="muted" className="basis-full sm:basis-auto">
                    {m.use}
                  </Text>
                </div>
              ))}
            </div>
          </Block>

          {/* ------------------------------ icons ---------------------- */}
          <Block
            id="icons"
            title="Icons"
            intro="Lucide is the only icon set, always rendered through the Icon component so size and colour stay on-system."
          >
            <Input
              label="Search icons"
              placeholder="ticket, calendar, arrow…"
              value={iconQuery}
              onChange={(e) => setIconQuery(e.target.value)}
              className="max-w-sm"
            />
            <div className="flex flex-wrap items-end gap-6">
              {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
                <Spec key={size} label={`size="${size}"`}>
                  <Icon name="ticket" size={size} />
                </Spec>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-7">
              {iconNames.map((name) => (
                <div
                  key={name}
                  className="flex flex-col items-center gap-2 rounded-card border border-border p-3"
                >
                  <Icon name={name} size="md" tone="muted" />
                  <Caption>{name}</Caption>
                </div>
              ))}
              {iconNames.length === 0 ? (
                <Text size="small" tone="muted">
                  No icon matches that name.
                </Text>
              ) : null}
            </div>
            <Snippet code={`<Icon name="ticket" size="md" tone="brand" />`} />
          </Block>

          {/* --------------------------- components -------------------- */}
          <Block
            id="components"
            title="Components"
            intro="Every variant and every state that applies, side by side. States that a component does not own are marked so — they are handled by the field or the surrounding form."
          >
            {/* Button */}
            <div className="flex flex-col gap-4">
              <Heading level="h3">Button</Heading>
              <StateGrid columns={["Variant", "Default", "Hover (point at it)", "Focus", "Disabled", "Loading"]}>
                {(["gradient", "solid", "outline", "ghost", "link", "destructive"] as const).map(
                  (variant) => (
                    <React.Fragment key={variant}>
                      <TokenName>{`variant="${variant}"`}</TokenName>
                      <Button variant={variant}>Get tickets</Button>
                      <Button variant={variant} className="hover:!opacity-100" data-state="hover">
                        Get tickets
                      </Button>
                      <Button
                        variant={variant}
                        className="ring-2 ring-ring ring-offset-2 ring-offset-background"
                      >
                        Get tickets
                      </Button>
                      <Button variant={variant} disabled>
                        Get tickets
                      </Button>
                      <Button variant={variant} loading>
                        Booking
                      </Button>
                    </React.Fragment>
                  ),
                )}
              </StateGrid>
              <div className="flex flex-wrap items-center gap-3">
                {(["sm", "md", "lg"] as const).map((size) => (
                  <Button key={size} variant="gradient" size={size}>
                    Size {size}
                  </Button>
                ))}
                <Button size="icon" variant="outline" aria-label="Next speaker">
                  <Icon name="arrowRight" />
                </Button>
              </div>
              <Text size="small" tone="muted">
                Hover and focus are live — point at or tab to any button above. The
                focus column shows the ring statically so both can be compared.
              </Text>
              <Snippet
                code={`<Button variant="gradient" size="lg" loading={isSaving}>\n  Get tickets\n</Button>`}
              />
              <Card variant="elevated" className="max-w-md">
                <CardHeader>
                  <CardTitle>In context</CardTitle>
                  <CardDescription>Registration form</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <Input label="Full name" placeholder="Nora Keller" />
                  <Input
                    label="Email"
                    placeholder="nora@studionord.ch"
                    hint="We only email you the ticket."
                  />
                </CardContent>
                <CardFooter className="flex gap-3">
                  <Button variant="gradient">Reserve seat</Button>
                  <Button variant="ghost">Cancel</Button>
                </CardFooter>
              </Card>
            </div>

            {/* Feature card & CTA panel */}
            <div className="flex flex-col gap-4">
              <Heading level="h3">Feature card &amp; CTA panel</Heading>
              <div className="grid gap-6 lg:grid-cols-2">
                <FeatureCard
                  icon="sparkles"
                  title="Feature card"
                  description="Icon medallion, heading and short supporting text — the pattern used for criteria, perks and highlights."
                />
                <CtaPanel
                  title="Call-to-action panel"
                  description="Full-bleed gradient panel for the closing action on a page."
                  actionLabel="Get your ticket"
                  actionHref="#"
                />
              </div>
              <Snippet
                code={`<FeatureCard\n  icon="sparkles"\n  title="Feature card"\n  description="Short supporting text."\n/>\n\n<CtaPanel\n  title="Call-to-action panel"\n  description="Full-bleed gradient panel."\n  actionLabel="Get your ticket"\n  actionHref="/tickets"\n/>`}
              />
            </div>

            {/* Input */}
            <div className="flex flex-col gap-4">
              <Heading level="h3">Input</Heading>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Input label="Default" placeholder="nora@studionord.ch" />
                <Input
                  label="Focus"
                  placeholder="nora@studionord.ch"
                  className="[&_input]:ring-2 [&_input]:ring-ring [&_input]:ring-offset-2 [&_input]:ring-offset-background"
                />
                <Input label="Disabled" placeholder="nora@studionord.ch" disabled />
                <Input
                  label="Error"
                  defaultValue="nora@"
                  error="That email address looks incomplete."
                />
              </div>
              <Snippet
                code={`<Input\n  label="Email"\n  error={errors.email}\n  hint="We only email you the ticket."\n/>`}
              />
            </div>

            {/* Badge */}
            <div className="flex flex-col gap-4">
              <Heading level="h3">Badge</Heading>
              <StateGrid columns={["Variant", "Subtle", "Solid"]}>
                {(
                  ["neutral", "brand", "info", "success", "warning", "destructive"] as const
                ).map((variant) => (
                  <React.Fragment key={variant}>
                    <TokenName>{`variant="${variant}"`}</TokenName>
                    <Badge variant={variant}>Workshop</Badge>
                    <Badge variant={variant} tone="solid">
                      Workshop
                    </Badge>
                  </React.Fragment>
                ))}
              </StateGrid>
              <Text size="small" tone="muted">
                Badges are static labels: no hover, focus, disabled or loading state.
              </Text>
              <Snippet code={`<Badge variant="success" tone="solid">Free</Badge>`} />
            </div>

            {/* Card */}
            <div className="flex flex-col gap-4">
              <Heading level="h3">Card</Heading>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {(["plain", "outline", "elevated", "glass"] as const).map((variant) => (
                  <div key={variant} className="flex flex-col gap-2">
                    <Card variant={variant} className="flex flex-col gap-4">
                      <CardHeader>
                        <CardTitle>Workshop pass</CardTitle>
                        <CardDescription>Twelve seats, hands on</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Text size="small" tone="muted">
                          Build a small app end to end with a mentor at your table.
                        </Text>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm">
                          Details
                        </Button>
                      </CardFooter>
                    </Card>
                    <TokenName>{`variant="${variant}"`}</TokenName>
                  </div>
                ))}
              </div>
              <Snippet
                code={`<Card variant="glass">\n  <CardHeader><CardTitle>Workshop pass</CardTitle></CardHeader>\n</Card>`}
              />
            </div>

            {/* Typography components */}
            <div className="flex flex-col gap-4">
              <Heading level="h3">Heading & Text</Heading>
              <div className="flex flex-wrap gap-6">
                {(["default", "muted", "gradient"] as const).map((tone) => (
                  <Spec key={tone} label={`Heading tone="${tone}"`}>
                    <Heading level="h3" tone={tone}>
                      Speakers
                    </Heading>
                  </Spec>
                ))}
                {(["default", "muted", "primary", "destructive"] as const).map((tone) => (
                  <Spec key={tone} label={`Text tone="${tone}"`}>
                    <Text tone={tone}>Doors open at nine.</Text>
                  </Spec>
                ))}
              </div>
            </div>

            {/* Link */}
            <div className="flex flex-col gap-4">
              <Heading level="h3">Link</Heading>
              <StateGrid columns={["Variant", "Default", "Focus", "Active"]}>
                {(["inline", "nav", "quiet"] as const).map((variant) => (
                  <React.Fragment key={variant}>
                    <TokenName>{`variant="${variant}"`}</TokenName>
                    <Link variant={variant} href="#components">
                      Full schedule
                    </Link>
                    <Link
                      variant={variant}
                      href="#components"
                      className="ring-2 ring-ring ring-offset-2 ring-offset-background"
                    >
                      Full schedule
                    </Link>
                    <Link variant={variant} href="#components" active>
                      Full schedule
                    </Link>
                  </React.Fragment>
                ))}
              </StateGrid>
            </div>

            {/* Avatar */}
            <div className="flex flex-col gap-4">
              <Heading level="h3">Avatar</Heading>
              <div className="flex flex-wrap items-end gap-6">
                {(["sm", "md", "lg"] as const).map((size) => (
                  <Spec key={size} label={`size="${size}"`}>
                    <Avatar name="Nora Keller" size={size} />
                  </Spec>
                ))}
              </div>
            </div>

            {/* Speaker card */}
            <div className="flex flex-col gap-4">
              <Heading level="h3">Speaker card</Heading>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {(["plain", "elevated", "glass"] as const).map((variant) => (
                  <div key={variant} className="flex flex-col gap-2">
                    <SpeakerCard
                      name="Ada Mwangi"
                      role="Staff Engineer"
                      company="Northwind"
                      photoUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face"
                      topics={["Performance", "DX"]}
                      variant={variant}
                    />
                    <TokenName>{`variant="${variant}"`}</TokenName>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule item */}
            <div className="flex flex-col gap-4">
              <Heading level="h3">Schedule item</Heading>
              <div className="flex flex-col">
                <ScheduleItem time="09:00" title="Doors & coffee" track="All" />
                <ScheduleItem
                  time="10:00"
                  title="Designing with tokens, not pixels"
                  speaker="Nora Keller"
                  track="Main stage"
                />
                <ScheduleItem
                  time="11:30"
                  title="Shipping AI features fast"
                  speaker="Luca Bianchi"
                  track="Workshop"
                />
              </div>
              <Snippet
                code={`<ScheduleItem time="10:00" title="Designing with tokens" speaker="Nora Keller" track="Main stage" />`}
              />
            </div>

            {/* Stat */}
            <div className="flex flex-col gap-4">
              <Heading level="h3">Stat</Heading>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <Stat value="600+" label="Attendees" />
                <Stat value="24" label="Talks" tone="brand" />
                <Stat value="12" label="Workshops" />
                <Stat value="1" label="Day in Zurich" tone="brand" />
              </div>
              <Caption>tone=&quot;default&quot; · tone=&quot;brand&quot;</Caption>
            </div>

            {/* FAQ */}
            <div className="flex flex-col gap-4">
              <Heading level="h3">FAQ</Heading>
              <Faq type="single" collapsible className="max-w-3xl">
                <FaqItem value="tickets">
                  <FaqTrigger>Do I need a ticket?</FaqTrigger>
                  <FaqContent>
                    Yes — registration is free, but seats are limited to six hundred.
                  </FaqContent>
                </FaqItem>
                <FaqItem value="level">
                  <FaqTrigger>Is it beginner friendly?</FaqTrigger>
                  <FaqContent>
                    Tracks are marked by level and every workshop starts from the basics.
                  </FaqContent>
                </FaqItem>
              </Faq>
              <Text size="small" tone="muted">
                Open, closed, hover and keyboard focus are all live — tab into the
                questions above.
              </Text>
            </div>

            {/* Navbar & footer */}
            <div className="flex flex-col gap-4">
              <Heading level="h3">Navbar & Footer</Heading>
              <div className="overflow-hidden rounded-card border border-border">
                <Navbar
                  brand={<span className="text-h3 text-gradient-primary">Vibe</span>}
                  actions={
                    <Button variant="gradient" size="sm">
                      <Icon name="ticket" />
                      Tickets
                    </Button>
                  }
                >
                  <Link variant="nav" href="#components" active>
                    Speakers
                  </Link>
                  <Link variant="nav" href="#components">
                    Schedule
                  </Link>
                </Navbar>
                <Footer
                  surface="muted"
                  brand={<span className="text-h3 text-gradient-primary">Vibe</span>}
                  note="Zurich · 2026"
                >
                  <Link variant="quiet" href="#components">
                    Code of conduct
                  </Link>
                  <Link variant="quiet" href="#components">
                    Contact
                  </Link>
                </Footer>
              </div>
              <Caption>Navbar variant=&quot;glass&quot; | &quot;solid&quot; · Footer surface=&quot;muted&quot;</Caption>
            </div>
          </Block>
        </div>
      </Container>
    </div>
  );
}
