# Components

Component catalog for **VibeCode Fest Incremental Current Polish**. Import all components from `@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b`.

### Avatar

```ts
import { Avatar } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

**Props:**

| Prop | Type | Default |
|---|---|---|
| `size` | sm · md · lg | `md` |
| `shape` | circle · rounded | `circle` |
| `ring` | none · gradient | `none` |
| `src` | string | `—` |
| `name` | string | `—` |

### Badge

```ts
import { Badge } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

**Props:**

| Prop | Type | Default |
|---|---|---|
| `variant` | neutral · brand · info · success · warning · destructive | `neutral` |
| `tone` | subtle · solid | `subtle` |
| `iconStart` | any | `—` |
| `iconEnd` | any | `—` |

### Button

```ts
import { Button } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

Use for clear actions with named visual hierarchy. Reserve the muted variant exclusively for gradient backgrounds, including CtaPanel; its label renders in --primary blue. Use gradient, solid, or secondary on cards and plain surfaces.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `variant` | gradient · solid · muted · secondary · ghost · link · destructive | `solid` |
| `size` | sm · md · lg · icon | `md` |
| `asChild` | boolean | `false` |
| `loading` | boolean | `false` |
| `iconStart` | any | `—` |
| `iconEnd` | any | `—` |

**Examples:**

_Muted action on a gradient panel_
```tsx
<div className="bg-gradient-primary"><Button variant="muted">Get tickets</Button></div>
```

**Avoid:**

- Do not use the muted variant on plain, card, or dark-section backgrounds.
- Do not recreate button appearances with one-off className color or border overrides.

### Card

```ts
import { Card } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

**Props:**

| Prop | Type | Default |
|---|---|---|
| `variant` | plain · outline · raised · elevated · overlay · glass · gradient | `outline` |
| `padding` | none · sm · md · lg | `md` |

### CardContent

```ts
import { CardContent } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

### CardDescription

```ts
import { CardDescription } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

### CardFooter

```ts
import { CardFooter } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

### CardHeader

```ts
import { CardHeader } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

### CardTitle

```ts
import { CardTitle } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

### Container

```ts
import { Container } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

**Props:**

| Prop | Type | Default |
|---|---|---|
| `size` | sm · md · lg · full | `lg` |

### CtaPanel

```ts
import { CtaPanel } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

**Props:**

| Prop | Type | Default |
|---|---|---|
| `title` | string | `—` |
| `description` | string | `—` |
| `actionLabel` | string | `—` |
| `actionHref` | string | `—` |
| `onAction` | function | `—` |

### Faq

```ts
import { Faq } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

### FaqContent

```ts
import { FaqContent } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

### FaqItem

```ts
import { FaqItem } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

### FaqTrigger

```ts
import { FaqTrigger } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

### FeatureCard

```ts
import { FeatureCard } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

**Props:**

| Prop | Type | Default |
|---|---|---|
| `icon` | any | `—` |
| `title` | string | `—` |
| `description` | string | `—` |

### Fonts

```ts
import { Fonts } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

Mount once inside the consumer app shell, ideally in <head>, to load the Geist Sans and Geist Mono brand fonts required by the design system.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `children` | any | `—` |

**Examples:**

_Inside a TanStack Start root shell_
```tsx
<html lang="en">
  <head>
    <HeadContent />
    <Fonts />
  </head>
  <body>{children}</body>
</html>
```

**Avoid:**

- Do not render Fonts more than once per page; duplicate link tags are harmless but wasteful.
- Do not skip Fonts when using components that rely on the Geist type scale; fallback fonts will break the intended measure and weight.

### Footer

```ts
import { Footer } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

Use at the end of public pages for a stable three-part layout: top row (brand left, centred tagline, newsletter action right), divider, and bottom row (centred legal links with social actions aligned to the right edge).

**Props:**

| Prop | Type | Default |
|---|---|---|
| `surface` | default · muted · card | `default` |
| `brand` | any | `—` |
| `center` | any | `—` |
| `links` | any | `—` |
| `socials` | any | `—` |
| `newsletterHref` | string | `—` |
| `onNewsletterClick` | any | `—` |

**Examples:**

_Event footer_
```tsx
<Footer
  brand={<Logo />}
  center={<span>Vibe coded with <Icon name="heart" /> in Zurich</span>}
  links={[
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Legal Notice & Contact', href: '/contact' },
    { label: 'Internal', href: '/internal' },
  ]}
  socials={[
    { name: 'instagram', href: 'https://instagram.com', label: 'Instagram' },
    { name: 'whatsapp', href: 'https://wa.me', label: 'WhatsApp' },
  ]}
  newsletterHref="/newsletter"
/>
```

**Avoid:**

- Do not pass multi-column link groups; use a single flat links array for the bottom row.
- Do not replace the newsletter action with a one-off button style.
- Do not add extra labels to the social buttons; they must remain icon-only.

### Heading

```ts
import { Heading } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

**Props:**

| Prop | Type | Default |
|---|---|---|
| `level` | display · h1 · h2 · h3 | `h2` |
| `tone` | default · muted · gradient | `default` |
| `as` | h1 · h2 · h3 · h4 · p | `—` |

### Icon

```ts
import { Icon } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

**Props:**

| Prop | Type | Default |
|---|---|---|
| `size` | xs · sm · md · lg · xl | `sm` |
| `tone` | current · default · muted · brand · info · success · warning · destructive | `current` |
| `name` | arrowRight · arrowUpRight · calendar · check · chevronDown · chevronRight · clock · code · externalLink · globe · heart · link · spinner · info · instagram · linkedin · mail · moon · mapPin · menu · mic · minus · plus · search · send · sparkles · share · star · sun · ticket · warning · users · video · whatsapp · close | `—` |
| `label` | string | `—` |

### Input

```ts
import { Input } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

**Props:**

| Prop | Type | Default |
|---|---|---|
| `state` | default · invalid | `default` |
| `size` | sm · md · lg | `md` |
| `label` | string | `—` |
| `error` | string | `—` |
| `hint` | string | `—` |

### InstagramIcon

```ts
import { InstagramIcon } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

### Link

```ts
import { Link } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

**Props:**

| Prop | Type | Default |
|---|---|---|
| `variant` | inline · nav · quiet | `inline` |
| `active` | true · false | `false` |

### LinkedInIcon

```ts
import { LinkedInIcon } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

### Navbar

```ts
import { Navbar } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

**Props:**

| Prop | Type | Default |
|---|---|---|
| `variant` | solid · glass · transparent | `solid` |
| `sticky` | true · false | `false` |
| `brand` | any | `—` |
| `actions` | any | `—` |

### Schedule

```ts
import { Schedule } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

Use as the outer frame for an event programme. Its categories connect into a continuous, section-coloured timeline on either a dark branded or default page surface.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `surface` | dark · default | `dark` |
| `children` | any | `—` |

**Examples:**

_Dark event timeline_
```tsx
<Schedule><ScheduleCategory markerTone="accent" headerTransition="primaryAccent">...</ScheduleCategory></Schedule>
```

**Avoid:**

- Do not draw a separate timeline line; ScheduleCategory renders its connected segment.
- Do not place ScheduleItem outside a ScheduleCategory.

### ScheduleCategory

```ts
import { ScheduleCategory } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

Groups one category header and its schedule items. markerTone applies one solid colour to the category spine and all marked items; headerTransition blends the previous line colour into this category's line colour.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `markerTone` | any | `primary` |
| `headerTransition` | any | `primaryAccent` |

**Examples:**

_Community category_
```tsx
<ScheduleCategory markerTone="info" headerTransition="accentInfo"><ScheduleHeader icon="share" title="SHARE" /><ScheduleItem time="11:00" title="Community talk" markerIcon="mic" /></ScheduleCategory>
```

**Avoid:**

- Do not use a category without a ScheduleHeader.
- Do not set marker or line colours item by item; choose markerTone once on ScheduleCategory.
- Do not use an unrelated headerTransition; it should begin with the preceding category and end in this category's markerTone.

### ScheduleHeader

```ts
import { ScheduleHeader } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

Starts a timeline category with a token-backed medallion that transitions between adjacent category colours, plus a heading and optional supporting text.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `icon` | any | `—` |
| `title` | string | `—` |
| `subtext` | string | `—` |

**Examples:**

_Share category_
```tsx
<ScheduleHeader icon="share" title="SHARE" subtext="Interactive sessions led by the community." />
```

**Avoid:**

- Do not style the medallion directly; set headerTransition on the surrounding ScheduleCategory.

### ScheduleItem

```ts
import { ScheduleItem } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

Shows a timed programme entry on a glassy or solid surface. Its enlarged title aligns with the marker icon, while the prominent time label follows its ScheduleCategory marker hue with a contrast-safe text tone. Add markerIcon for active sessions; omit it for breaks, lunch, and other passive moments.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `variant` | glass · solid | `glass` |
| `padding` | sm · md | `md` |
| `time` | string | `—` |
| `title` | string | `—` |
| `speaker` | string | `—` |
| `track` | string | `—` |
| `markerIcon` | any | `—` |

**Examples:**

_Talk with marker_
```tsx
<ScheduleItem time="11:00–11:25" title="Community talk" markerIcon="mic" />
```

_Lunch without marker_
```tsx
<ScheduleItem time="12:30" title="Lunch" />
```

**Avoid:**

- Do not add a marker to breaks or lunch.
- Do not override the time colour; it is inherited from the category and adjusted for readable contrast.
- Do not apply one-off glass, shadow, or marker colours through className.

### Section

```ts
import { Section } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

**Props:**

| Prop | Type | Default |
|---|---|---|
| `spacing` | sm · md · lg | `md` |
| `surface` | none · muted · card · gradient | `none` |

### SpeakerCard

```ts
import { SpeakerCard } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

Use to introduce a speaker with their photo, role, company and topic tags. Pass linkedinHref to add a bubble LinkedIn action on the avatar; use the action slot for a secondary bottom button such as "View profile".

**Props:**

| Prop | Type | Default |
|---|---|---|
| `name` | string | `linkedin` |
| `role` | string | `—` |
| `company` | string | `—` |
| `photoUrl` | string | `—` |
| `topics` | any | `—` |
| `linkedinHref` | string | `—` |
| `action` | any | `—` |

**Examples:**

_Speaker with LinkedIn bubble_
```tsx
<SpeakerCard
  name="Ada Mwangi"
  role="Staff Engineer"
  company="Northwind"
  photoUrl="https://example.com/ada.jpg"
  topics={['Performance', 'DX']}
  linkedinHref="https://linkedin.com/in/ada-mwangi"
  action={<Button variant="secondary" size="sm">View profile</Button>}
/>
```

**Avoid:**

- Do not add extra social icons below the card; the avatar bubble is the single social action.
- Do not use the action slot for the LinkedIn link; the bubble button is reserved for that.

### SponsorCard

```ts
import { SponsorCard } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

Use to present sponsor logos in a consistent, responsive grid. Provide an href to make the whole card a clickable link with a lift-and-glow hover effect. Choose highlight only for sponsors that need stronger visual prominence.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `variant` | default · highlight | `default` |
| `logoSrc` | string | `—` |
| `name` | string | `—` |
| `href` | string | `—` |

**Examples:**

_Default sponsor card_
```tsx
<SponsorCard logoSrc={atollLogo} name="ATOLL by EUTIMA" href="https://atoll-by-eutima.example.com" />
```

_Highlighted sponsor card_
```tsx
<SponsorCard logoSrc={atollLogo} name="ATOLL by EUTIMA" variant="highlight" href="https://atoll-by-eutima.example.com" />
```

**Avoid:**

- Do not crop, stretch, or place sponsor logos directly on inconsistent page surfaces.
- Do not add extra hover transitions or shadows at the call site; elevation and motion are built into the component when href is provided.

### Stat

```ts
import { Stat } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

**Props:**

| Prop | Type | Default |
|---|---|---|
| `align` | start · center | `center` |
| `tone` | default · brand | `default` |
| `value` | string | `—` |
| `label` | string | `—` |

### Text

```ts
import { Text } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

**Props:**

| Prop | Type | Default |
|---|---|---|
| `size` | body · small · caption | `body` |
| `tone` | default · muted · primary · destructive | `default` |
| `family` | sans · mono | `sans` |
| `as` | p · span · div | `—` |

### TicketCard

```ts
import { TicketCard } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

**Props:**

| Prop | Type | Default |
|---|---|---|
| `variant` | default · brand · accent · muted · outline | `default` |
| `pill` | any | `—` |

### TicketDescription

```ts
import { TicketDescription } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

### TicketHeader

```ts
import { TicketHeader } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

### TicketPrice

```ts
import { TicketPrice } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

### TicketTitle

```ts
import { TicketTitle } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

### WhatsAppIcon

```ts
import { WhatsAppIcon } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

