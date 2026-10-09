# Components

Component catalog for **Vibe Code Fest Design System**. Import all components from `@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b`.

### Avatar

```ts
import { Avatar } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

**Props:**

| Prop | Type | Default |
|---|---|---|
| `size` | sm · md · lg · xl | `md` |
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

Use for clear actions with named visual hierarchy. Reserve the muted variant exclusively for gradient backgrounds, including CtaPanel; its label renders in --primary purple. Use gradient, solid, or secondary on cards and plain surfaces.

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

General-purpose content surface with elevation, padding and glass variants. Pass an optional `action` (typically an icon-only ghost Button, e.g. edit) to pin a corner action to the top-right.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `variant` | plain · outline · raised · elevated · overlay · glass · gradient | `outline` |
| `padding` | none · sm · md · lg | `md` |
| `action` | any | `—` |

**Examples:**

_Card with corner edit action_
```tsx
<Card
  variant="elevated"
  action={
    <Button variant="ghost" size="icon" aria-label="Edit">
      <Icon name="pencil" />
    </Button>
  }
>
  <CardHeader>
    <CardTitle>Workshop pass</CardTitle>
  </CardHeader>
</Card>
```

**Avoid:**

- Do not position a corner action with ad-hoc absolute className overrides — use the `action` prop, which places and offsets it correctly.

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

Use as the closing call-to-action on a page, on a gradient surface. Pass image to show a circular photo on the left; omit it for a compact centred panel.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `title` | string | `—` |
| `description` | string | `—` |
| `actionLabel` | string | `—` |
| `actionHref` | string | `—` |
| `onAction` | function | `—` |
| `image` | object | `—` |

**Examples:**

_Panel with circular photo_
```tsx
<CtaPanel
  title="Ready to build with us?"
  description="Join 600+ attendees in Zurich."
  actionLabel="Get your ticket"
  actionHref="/tickets"
  image={{ src: speakerPhoto, alt: "Speaker" }}
/>
```

**Avoid:**

- Do not use the muted action button outside gradient surfaces — here it is the correct pairing.
- Do not pass more than one photo or non-square images without object-cover cropping; the image renders as a circle.

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

Elevated card with a heading and short supporting text. The top slot is an icon medallion by default, or a circular photo when imageSrc is set (icon is ignored then). Without href it has a plain white elevated background for non-interactive content. With href, the entire card is clickable with a primary-purple stroke, primary-subtle light purple background, hover lift and focus ring. The clickable look is automatic, not a separate highlight variant.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `icon` | any | `—` |
| `imageSrc` | string | `—` |
| `imageAlt` | string | `—` |
| `title` | string | `—` |
| `description` | string | `—` |
| `href` | string | `—` |

**Examples:**

_Clickable feature card_
```tsx
<FeatureCard href="/programme" icon="ticket" title="Live workshops" description="Hands-on sessions across two tracks." />
```

_Feature card with picture_
```tsx
<FeatureCard imageSrc={speakerPhoto} imageAlt="Speaker" title="Community" description="Meet the people behind the fest." />
```

**Avoid:**

- Do not add a one-off className border or background to make a card stand out.
- Do not nest a Button inside a card that already has href; the whole card is the link.
- Do not use FeatureCard for the closing page action; use CtaPanel on a gradient surface instead.

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
| `name` | arrowRight · arrowUpRight · calendar · check · chevronDown · chevronRight · clock · code · externalLink · globe · heart · link · spinner · info · instagram · linkedin · mail · moon · mapPin · menu · mic · minus · pencil · plus · search · send · sparkles · share · star · sun · ticket · warning · users · video · whatsapp · close | `—` |
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

### Link

```ts
import { Link } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

**Props:**

| Prop | Type | Default |
|---|---|---|
| `variant` | inline · nav · quiet | `inline` |
| `active` | true · false | `false` |
| `asChild` | boolean | `false` |

### LinkedInBubble

```ts
import { LinkedInBubble } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

Use for an icon-only LinkedIn profile link beside a speaker name or attached to a speaker avatar. Both placements use the same circular secondary action styling.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `href` | string | `—` |
| `name` | string | `—` |

**Examples:**

_Speaker profile link_
```tsx
<LinkedInBubble href="https://linkedin.com/in/ada-mwangi" name="Ada Mwangi" />
```

**Avoid:**

- Do not rebuild the LinkedIn bubble using custom Button styling; use this component in both schedule and speaker contexts.
- Do not use the avatar placement outside a positioned avatar container.

### NavDropdown

```ts
import { NavDropdown } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

Use for grouped desktop navigation options. Within Navbar's mobile menu the label and all options display inline without a dropdown trigger.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `label` | any | `—` |
| `active` | boolean | `false` |
| `align` | start · end | `start` |
| `className` | string | `px-3 py-2 text-small text-muted-foreground` |
| `children` | any | `—` |

**Examples:**

_Grouped navigation_
```tsx
<NavDropdown label="Contribute"><NavDropdownItem href="/volunteer">Volunteer</NavDropdownItem></NavDropdown>
```

**Avoid:**

- Do not hide mobile options behind another dropdown.

### NavDropdownItem

```ts
import { NavDropdownItem } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

Use for an option inside NavDropdown; renders as a direct link in mobile navigation.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `active` | true · false | `false` |
| `disabled` | boolean | `—` |

**Examples:**

_Navigation option_
```tsx
<NavDropdownItem href="/volunteer">Volunteer</NavDropdownItem>
```

**Avoid:**

- Do not use outside NavDropdown.

### Navbar

```ts
import { Navbar } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

Use for shared site navigation. On mobile its burger opens a fixed full-viewport menu with direct dropdown links and locked page scrolling.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `variant` | solid · glass · transparent | `solid` |
| `sticky` | true · false | `false` |
| `brand` | any | `—` |
| `actions` | any | `—` |

**Examples:**

_Site navigation_
```tsx
<Navbar sticky brand={<BrandLogo />}><Link variant="nav" href="/">Home</Link><NavDropdown label="Contribute"><NavDropdownItem href="/volunteer">Volunteer</NavDropdownItem></NavDropdown></Navbar>
```

**Avoid:**

- Do not add a second mobile menu or a page-scrolling menu container.
- Do not nest dropdown menus inside the mobile navigation.

### PhotoFrame

```ts
import { PhotoFrame } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

Use for the six-image “Impressions from the last event” gallery. One pink→purple gradient frame wraps rounded photo tiles (two columns on mobile, three on larger screens), with the gradient gallery button and an optional photographer-credit link inside the frame.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `photos` | any | `—` |
| `href` | string | `—` |
| `linkLabel` | string | `View Full Photo Gallery` |
| `credit` | string | `—` |
| `creditLabel` | string | `—` |
| `creditHref` | string | `—` |

**Examples:**

_Event impressions frame_
```tsx
<PhotoFrame photos={eventPhotos} href="https://example.com/full-gallery" credit="Photos by Silvan Mühlelemann" creditLabel="mühlelemann+popp AG" creditHref="https://example.com" />
```

**Avoid:**

- Do not recreate the gradient frame with separate cards, rotations, or per-image shadows.
- Do not pass decorative or duplicate alt text; describe the distinct event moment in each photograph.
- Do not link the whole frame; the gallery button inside the frame is the single interactive action.

### Schedule

```ts
import { Schedule } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

Use as the outer frame for an event programme. Its categories connect into a continuous, section-coloured timeline placed directly on the page background — Schedule itself adds no card or surface of its own.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `children` | any | `—` |

**Examples:**

_Event timeline_
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

Shows a timed programme entry on a very light tint of its category colour. Pass description for an expandable talk with a chevron; omit it for passive entries. Pass linkedinHref alongside speaker for an icon-only profile link by the name. Pass avatar for one speaker, avatars for two or more stacked on the line, markerIcon for active sessions without a known speaker, or omit both for breaks and lunch.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `tone` | primary · accent · info · success · warning · violet | `primary` |
| `padding` | sm · md | `md` |
| `time` | string | `—` |
| `title` | string | `—` |
| `speaker` | string | `—` |
| `linkedinHref` | string | `—` |
| `description` | string | `—` |
| `track` | string | `—` |
| `markerIcon` | any | `—` |
| `avatar` | any | `—` |
| `avatars` | any | `—` |

**Examples:**

_Talk with speaker avatar_
```tsx
<ScheduleItem
  time="11:00–11:25"
  title="Community talk"
  speaker="Luca Bianchi"
  linkedinHref="https://linkedin.com/in/luca-bianchi"
  description="A conversation about building with the community."
  avatar={{ src: 'https://example.com/luca.jpg', name: 'Luca Bianchi' }}
/>
```

_Talk with icon marker_
```tsx
<ScheduleItem time="11:00–11:25" title="Community talk" markerIcon="mic" />
```

_Lunch without marker_
```tsx
<ScheduleItem time="12:30" title="Lunch" />
```

**Avoid:**

- Do not add a marker to breaks or lunch.
- Do not pass an empty description just to show a chevron, or pass a LinkedIn URL without a speaker name.
- Do not override the time colour; it is inherited from the category and adjusted for readable contrast.
- Do not apply one-off backgrounds, shadows, or marker colours through className; the light tint is inherited from ScheduleCategory.

### Section

```ts
import { Section } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

Use Section for full-width page bands. Alternate muted and muted-alternate surfaces behind raised cards.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `spacing` | sm · md · lg | `md` |
| `surface` | none · muted · muted-alternate · card · gradient | `none` |

**Examples:**

_Alternating quiet bands_
```tsx
<Section surface="muted"><Container><Card variant="raised">First section</Card></Container></Section>
<Section surface="muted-alternate"><Container><Card variant="raised">Next section</Card></Container></Section>
```

**Avoid:**

- Do not override section backgrounds with className; choose a surface variant.
- Do not use these quiet fills as brand-action or status colors.

### SpeakerCard

```ts
import { SpeakerCard } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

Use to introduce a speaker with their photo, role, company and topic tags. Pass linkedinHref to add a bubble LinkedIn action on the avatar; use the action slot for a secondary bottom button such as "View profile", and cornerAction for an optional icon-only edit button pinned to the top-right corner.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `name` | string | `—` |
| `role` | string | `—` |
| `company` | string | `—` |
| `photoUrl` | string | `—` |
| `topics` | any | `—` |
| `linkedinHref` | string | `—` |
| `action` | any | `—` |
| `cornerAction` | any | `—` |

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

Use to present sponsor logos in a consistent, responsive grid. size="lg" is the large tile for headline sponsors; size="sm" is the compact tile for smaller sponsor rows. Default is a white card with shadow and no stroke; highlight carries the purple brand stroke with light-purple background and glow. Provide an href to make the whole card a clickable link with a lift hover effect.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `variant` | default · highlight | `default` |
| `size` | lg · sm | `lg` |
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

_Small sponsor card_
```tsx
<SponsorCard logoSrc={atollLogo} name="ATOLL by EUTIMA" size="sm" href="https://atoll-by-eutima.example.com" />
```

**Avoid:**

- Do not crop, stretch, or place sponsor logos directly on inconsistent page surfaces.
- Do not add extra hover transitions or shadows at the call site; elevation and motion are built into the component when href is provided.
- Do not add a border or stroke to the default variant; it is strokeless by design and relies on shadow for elevation.

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

### Tabs

```ts
import { Tabs } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

Controlled or uncontrolled group of mutually exclusive panels. Set defaultValue or value, and match each trigger value to one content panel.

**Examples:**

_Contribute tabs_
```tsx
<Tabs defaultValue="talk"><TabsList aria-label="Ways to contribute"><TabsTrigger value="talk">Talk/Session</TabsTrigger><TabsTrigger value="volunteer">Volunteer</TabsTrigger></TabsList><TabsContent value="talk">Propose a session</TabsContent><TabsContent value="volunteer">Join the team</TabsContent></Tabs>
```

**Avoid:**

- Do not use tabs for navigation between separate pages; tabs switch related content in place.

### TabsContent

```ts
import { TabsContent } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

Panel displayed when its matching trigger is selected; accepts any composed content.

**Examples:**

_Contribute tabs_
```tsx
<TabsContent value="volunteer"><Text>Join the team.</Text></TabsContent>
```

**Avoid:**

- Do not leave a trigger without a matching panel.

### TabsList

```ts
import { TabsList } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

A muted, evenly spaced segmented track for TabsTrigger controls; add an accessible label when there is no adjacent heading.

**Examples:**

_Contribute tabs_
```tsx
<TabsList aria-label="Ways to contribute"><TabsTrigger value="talk">Talk/Session</TabsTrigger><TabsTrigger value="volunteer">Volunteer</TabsTrigger></TabsList>
```

**Avoid:**

- Do not restyle the track with arbitrary color classes.

### TabsTrigger

```ts
import { TabsTrigger } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

A keyboard-reachable segment with token-backed selected, hover, focus, and disabled states.

**Examples:**

_Contribute tabs_
```tsx
<TabsTrigger value="volunteer">Volunteer</TabsTrigger>
```

**Avoid:**

- Do not use a standalone Button or omit the matching TabsContent value.

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

Use for ticket tiers and pricing highlights. The price sits at the top of the card in a smaller, tighter format; the bottom area shows the regular-pass comparison price separated by a dashed tear line.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `variant` | default · accent · muted · outline | `default` |
| `pill` | any | `—` |

**Examples:**

_Early-bird ticket_
```tsx
<TicketCard pill={<Badge variant="brand" tone="solid">Early bird</Badge>}>
  <TicketPrice><span className="text-h3">89 CHF</span></TicketPrice>
  <TicketRegular label="regular price" price="129 CHF" />
</TicketCard>
```

**Avoid:**

- Do not place a long description inside the ticket; use the regular-pass comparison area for concise price context only.
- Do not use the ticket card for non-pricing content; use Card instead.

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

### TicketRegular

```ts
import { TicketRegular } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

Bottom area of a TicketCard. Shows the regular-pass price below the dashed tear line, with a small uppercase label and a tight price value.

**Props:**

| Prop | Type | Default |
|---|---|---|
| `label` | string | `regular price` |
| `price` | string | `—` |

**Examples:**

_Regular-pass comparison_
```tsx
<TicketRegular label="regular price" price="129 CHF" />
```

**Avoid:**

- Do not use TicketRegular outside a TicketCard; it relies on the surrounding card styling and tear line.

### TicketTitle

```ts
import { TicketTitle } from "@ws-05nvb9wgger8dlwh2bqp/de82839c-64ec-44ae-973b-ceb1bab7994b"
```

