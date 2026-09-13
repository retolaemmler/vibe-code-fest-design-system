# VibeCode Fest Incremental Current Polish — Guidelines

## Components

The design system exports these components — import them from `@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b` and compose them before building anything from scratch:

`Avatar`, `Badge`, `Button`, `CardContent`, `CardDescription`, `CardFooter`, `CardHeader`, `CardTitle`, `Card`, `Container`, `CtaPanel`, `FaqContent`, `FaqItem`, `FaqTrigger`, `Faq`, `FeatureCard`, `Footer`, `Heading`, `Icon`, `Input`, `InstagramIcon`, `Link`, `LinkedInIcon`, `Navbar`, `ScheduleCategory`, `ScheduleHeader`, `ScheduleItem`, `Schedule`, `Section`, `SpeakerCard`, `SponsorCard`, `Stat`, `Text`, `TicketCard`, `TicketDescription`, `TicketHeader`, `TicketPrice`, `TicketTitle`, `WhatsAppIcon`

Per-component details (import stanzas, props, variants, examples) live in `.lovable/rules/libraries/{slug}/components.md` — on disk, not auto-loaded. Read that file or the component source when the name alone isn't enough.

## Theme Files

The design system's theme is delivered through the following files. The author's original source files carry the full wiring the design system needs — variable declarations, framework-specific directives, provider objects, etc. — and are the canonical import target.

- `@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b/index.css` (source — preferred import)
- `@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b/styles.css` (source — preferred import)
- `@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b/dist/tokens.css` (auto-generated flat list of CSS custom properties — a raw-values fallback only; does NOT carry framework-specific wiring that the source files above provide)

