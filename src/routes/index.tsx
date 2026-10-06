import { createFileRoute, Link as RouterLink } from "@tanstack/react-router";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon, icons, type IconName } from "@/components/ui/icon";
import { Faq, FaqContent, FaqItem, FaqTrigger } from "@/components/ui/faq";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Footer } from "@/components/ui/footer";
import { Container, Section } from "@/components/ui/layout";
import { Link } from "@/components/ui/link";
import { Navbar } from "@/components/ui/navbar";
import { PhotoFrame, type PhotoFramePhoto } from "@/components/ui/photo-frame";
import { Schedule, ScheduleCategory, ScheduleHeader, ScheduleItem } from "@/components/ui/schedule-item";
import { SpeakerCard } from "@/components/ui/speaker-card";
import { SponsorCard } from "@/components/ui/sponsor-card";
import { Stat } from "@/components/ui/stat";
import {
  TicketCard,
  TicketPrice,
  TicketRegular,
} from "@/components/ui/ticket-card";
import { Heading, Text } from "@/components/ui/typography";
import atollLogo from "@/assets/logos/atoll-logo.png";
import vibeLogo from "@/assets/logos/vibe-code-fest-logo.png";
import gallery1 from "@/assets/photography/vcf2026-gallery-1.jpg.asset.json";
import gallery2 from "@/assets/photography/vcf2026-gallery-2.jpg.asset.json";
import gallery3 from "@/assets/photography/vcf2026-gallery-3.jpg.asset.json";
import gallery4 from "@/assets/photography/vcf2026-gallery-4.jpg.asset.json";
import gallery5 from "@/assets/photography/vcf2026-gallery-5.jpg.asset.json";
import gallery6 from "@/assets/photography/vcf2026-gallery-6.jpg.asset.json";

const eventPhotos = [
  { src: gallery1.url, alt: "Vibe Code Fest organizers together", position: "top" },
  { src: gallery2.url, alt: "Organizers celebrating with raised hands", position: "upper" },
  { src: gallery3.url, alt: "Vibe Code Fest winners on stage" },
  { src: gallery4.url, alt: "Speaker presenting at Vibe Code Fest" },
  { src: gallery5.url, alt: "Audience applauding during the event" },
  { src: gallery6.url, alt: "Ice bath experience at Vibe Code Fest", position: "upper" },
] as const satisfies PhotoFramePhoto[];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vibe Design System — Component Showcase" },
      {
        name: "description",
        content:
          "Every component and variant in the Vibe design system: buttons, badges, cards, speakers, schedule, stats and FAQ, all driven by semantic tokens.",
      },
      { property: "og:title", content: "Vibe Design System — Component Showcase" },
      {
        property: "og:description",
        content:
          "Browse the Vibe design system components and variants, built on semantic light and dark tokens.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Showcase,
});

function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <Text size="caption" tone="muted" as="span">
        {title}
      </Text>
      <div className="flex flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}

function Showcase() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        sticky
        variant="glass"
        brand={
          <Link variant="quiet" href="/" aria-label="Vibe Code Fest home">
            <img src={vibeLogo} alt="Vibe Code Fest" className="size-12 object-contain" />
          </Link>
        }
        actions={
          <Button variant="gradient" size="sm">
            <Icon name="ticket" />
            Get tickets
          </Button>
        }
      >
        <Link variant="nav" href="#buttons" active>
          Buttons
        </Link>
        <Link variant="nav" href="#cards">
          Cards
        </Link>
        <Link variant="nav" href="#event">
          Event blocks
        </Link>
        <Link variant="nav" asChild>
          <RouterLink to="/style-guide">Style guide</RouterLink>
        </Link>
      </Navbar>

      <Section spacing="lg" surface="gradient">
        <Container className="flex flex-col items-start gap-6">
          <Badge variant="brand" tone="solid">
            <Icon name="calendar" />
            Design system v1
          </Badge>
          <Heading level="display" tone="gradient">
            Components, tokens, nothing hardcoded
          </Heading>
          <Text size="body" tone="muted" className="max-w-2xl">
            Every colour, radius, shadow and motion value below comes from a
            semantic token, in both light and dark themes.
          </Text>
          <div className="flex flex-wrap gap-3">
            <Button variant="gradient" size="lg">
              Primary action
              <Icon name="arrowRight" />
            </Button>
            <Button variant="muted" size="lg">
              Muted
            </Button>
          </div>

          <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <TicketCard
              pill={<Badge variant="brand" tone="solid">Early bird</Badge>}
            >
              <TicketPrice>
                <span className="text-body font-semibold">89 CHF</span>
              </TicketPrice>
              <TicketRegular label="regular price" price="129 CHF" />
            </TicketCard>
            <TicketCard variant="accent">
              <TicketPrice>
                <span className="text-body font-semibold">199 CHF</span>
              </TicketPrice>
              <TicketRegular label="regular price" price="129 CHF" />
            </TicketCard>
            <TicketCard variant="muted">
              <TicketPrice>
                <span className="text-body font-semibold">49 CHF</span>
              </TicketPrice>
              <TicketRegular label="regular price" price="129 CHF" />
            </TicketCard>
          </div>
        </Container>
      </Section>

      <Section id="buttons">
        <Container className="flex flex-col gap-10">
          <Heading level="h2">Buttons</Heading>
          <Row title="Variants">
            <Button variant="gradient">Gradient</Button>
            <Button variant="solid">Solid</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </Row>
          <Row title="Sizes">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="Next">
              <Icon name="arrowRight" />
            </Button>
          </Row>
          <Row title="Disabled">
            <Button variant="gradient" disabled>
              Gradient
            </Button>
            <Button variant="secondary" disabled>
              Secondary
            </Button>
          </Row>

          <Heading level="h2">Badges</Heading>
          <Row title="Subtle">
            <Badge variant="neutral">Neutral</Badge>
            <Badge variant="brand">Brand</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="destructive">Sold out</Badge>
          </Row>
          <Row title="Solid">
            <Badge variant="neutral" tone="solid">
              Neutral
            </Badge>
            <Badge variant="brand" tone="solid">
              Brand
            </Badge>
            <Badge variant="info" tone="solid">
              Info
            </Badge>
            <Badge variant="success" tone="solid">
              Free
            </Badge>
            <Badge variant="warning" tone="solid">
              Few left
            </Badge>
            <Badge variant="destructive" tone="solid">
              Closed
            </Badge>
          </Row>

          <Heading level="h2">Icons</Heading>
          <Text size="small" tone="muted" className="max-w-2xl">
            One icon set only (Lucide), always rendered through the Icon
            component. Colour is inherited from the surrounding token by
            default.
          </Text>
          <Row title="Sizes">
            {(["xs", "sm", "md", "lg", "xl"] as const).map((size) => (
              <Icon key={size} name="sparkles" size={size} />
            ))}
          </Row>
          <Row title="Tones">
            {(
              ["default", "muted", "brand", "info", "success", "warning", "destructive"] as const
            ).map((tone) => (
              <Icon key={tone} name="star" size="md" tone={tone} />
            ))}
          </Row>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-6 lg:grid-cols-9">
            {(Object.keys(icons) as IconName[]).map((name) => (
              <div
                key={name}
                className="flex flex-col items-center gap-2 rounded-card border border-border p-3"
              >
                <Icon name={name} size="md" tone="muted" />
                <Text size="caption" tone="muted" family="mono" as="span">
                  {name}
                </Text>
              </div>
            ))}
          </div>

          <Heading level="h2">Typography</Heading>
          <div className="flex flex-col gap-3">
            <Heading level="display">Display</Heading>
            <Heading level="h1">Heading 1</Heading>
            <Heading level="h2">Heading 2</Heading>
            <Heading level="h3">Heading 3</Heading>
            <Text>Body text sits at a comfortable reading measure.</Text>
            <Text size="small" tone="muted">
              Small muted text for supporting detail.
            </Text>
            <Text size="caption" tone="muted" family="mono" as="span">
              Caption / mono label
            </Text>
          </div>
        </Container>
      </Section>

      <Section id="cards" surface="muted">
        <Container className="flex flex-col gap-8">
          <Heading level="h2">Cards</Heading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {(["plain", "outline", "elevated", "glass"] as const).map((variant) => (
              <Card key={variant} variant={variant} className="flex flex-col gap-4">
                <CardHeader>
                  <CardTitle className="capitalize">{variant}</CardTitle>
                  <CardDescription>Surface variant</CardDescription>
                </CardHeader>
                <CardContent>
                  <Text size="small" tone="muted">
                    Content area using body tokens.
                  </Text>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" size="sm">
                    Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Heading level="h2">Stats</Heading>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <Stat value="600+" label="Attendees" tone="brand" />
            <Stat value="24" label="Talks" />
            <Stat value="12" label="Workshops" />
            <Stat value="1" label="Day" tone="brand" />
          </div>
        </Container>
      </Section>

      <Section id="event">
        <Container className="flex flex-col gap-10">
          <Heading level="h2">Speakers</Heading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SpeakerCard
              name="Nora Keller"
              role="Design Engineer"
              company="Studio Nord"
              topics={["Design systems", "Tokens"]}
              linkedinHref="https://linkedin.com/in/nora-keller"
              cornerAction={
                <Button variant="ghost" size="icon" aria-label="Edit">
                  <Icon name="pencil" />
                </Button>
              }
              action={<Button variant="secondary" size="sm">View profile</Button>}
            />
            <SpeakerCard
              name="Luca Bianchi"
              role="Founder"
              company="Shipfast"
              topics={["AI tooling"]}
              variant="elevated"
              linkedinHref="https://linkedin.com/in/luca-bianchi"
              cornerAction={
                <Button variant="ghost" size="icon" aria-label="Edit">
                  <Icon name="pencil" />
                </Button>
              }
              action={<Button variant="secondary" size="sm">View profile</Button>}
            />
            <SpeakerCard
              name="Ada Mwangi"
              role="Staff Engineer"
              company="Northwind"
              topics={["Performance", "DX"]}
              variant="glass"
              linkedinHref="https://linkedin.com/in/ada-mwangi"
              cornerAction={
                <Button variant="ghost" size="icon" aria-label="Edit">
                  <Icon name="pencil" />
                </Button>
              }
              action={<Button variant="secondary" size="sm">View profile</Button>}
            />
          </div>

          <Heading level="h2">Schedule</Heading>
          <Schedule>
            <ScheduleCategory markerTone="accent" headerTransition="primaryAccent">
              <ScheduleHeader icon="sparkles" title="SPARK" subtext="An inspiring opening to ignite creativity and set the tone for the day." />
              <div className="grid gap-3">
                <ScheduleItem time="10:00" title="Arrival & coffee" />
                <ScheduleItem
                  time="10:30–11:00"
                  title="Keynote & fireside chat"
                  speaker="Nora Keller & Marco Frei"
                  linkedinHref="https://linkedin.com/in/nora-keller"
                  description="Nora shares how design systems help teams build together, followed by an open conversation about turning ideas into useful products."
                  avatars={[
                    { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face", name: "Nora Keller" },
                    { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face", name: "Marco Frei" },
                  ]}
                />
              </div>
            </ScheduleCategory>
            <ScheduleCategory markerTone="info" headerTransition="accentInfo">
              <ScheduleHeader icon="share" title="SHARE" subtext="Interactive sessions led by you, the community." />
              <div className="grid gap-3">
                <ScheduleItem
                  time="11:00–11:25"
                  title="Community talk"
                  speaker="Luca Bianchi"
                  linkedinHref="https://linkedin.com/in/luca-bianchi"
                  description="A conversation about the tools, decisions, and lessons behind building with the community."
                  avatar={{ src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face", name: "Luca Bianchi" }}
                />
                <ScheduleItem time="12:30" title="Lunch" />
              </div>
            </ScheduleCategory>
            <ScheduleCategory markerTone="violet" headerTransition="infoViolet">
              <ScheduleHeader icon="code" title="BUILD" subtext="Turn ideas into working products alongside mentors and peers." />
              <div className="grid gap-3">
                <ScheduleItem
                  time="15:00–18:15"
                  title="Hackathon"
                  speaker="Ada Mwangi"
                  linkedinHref="https://linkedin.com/in/ada-mwangi"
                  description="Build a working prototype with support from mentors and peers, then get ready to share what you made."
                  avatar={{ src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face", name: "Ada Mwangi" }}
                />
                <ScheduleItem time="18:15" title="Pizza break" />
              </div>
            </ScheduleCategory>
            <ScheduleCategory markerTone="warning" headerTransition="violetWarning">
              <ScheduleHeader icon="star" title="CELEBRATE" subtext="Share the results, recognise the winners, and close the day together." />
              <div className="grid gap-3">
                <ScheduleItem time="19:30" title="Top five app pitches" speaker="Community voting and winner selection" markerIcon="star" />
                <ScheduleItem time="20:00–22:00" title="Awards and celebration" markerIcon="users" />
              </div>
            </ScheduleCategory>
          </Schedule>

          <Heading level="h2">FAQ</Heading>
          <Faq type="single" collapsible className="max-w-3xl">
            <FaqItem value="tickets">
              <FaqTrigger>Do I need a ticket?</FaqTrigger>
              <FaqContent>
                Yes — registration is free but seats are limited.
              </FaqContent>
            </FaqItem>
            <FaqItem value="beginner">
              <FaqTrigger>Is it beginner friendly?</FaqTrigger>
              <FaqContent>
                Absolutely. Tracks are marked by level, and workshops start from
                the basics.
              </FaqContent>
            </FaqItem>
          </Faq>

          <Heading level="h2">Tabs</Heading>
          <Tabs defaultValue="talk" className="w-full max-w-md">
            <TabsList aria-label="Ways to contribute">
              <TabsTrigger value="talk">Talk/Session</TabsTrigger>
              <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
            </TabsList>
            <TabsContent value="talk">
              <Heading level="h3">Share your expertise</Heading>
              <Text tone="muted">Propose a talk or hands-on session for the festival.</Text>
            </TabsContent>
            <TabsContent value="volunteer">
              <Heading level="h3">Help make it happen</Heading>
              <Text tone="muted">Join the team welcoming and supporting attendees.</Text>
            </TabsContent>
          </Tabs>
        </Container>
      </Section>

      <Section>
        <Container size="md" className="flex flex-col gap-8">
          <div className="flex flex-col gap-3 text-center">
            <Heading level="h2">Impressions from the last event</Heading>
            <Text size="body" tone="muted" className="mx-auto max-w-2xl">
              A glimpse of the energy, the people and the fun at Vibe Code Fest 2026.
            </Text>
          </div>
          <PhotoFrame
            photos={eventPhotos}
            href="https://vibe-code-fest.pictureclub.io/camera-roll/6999d4b6-7886-4091-8c64-f2837ab42ad7?scrolltostart=1"
            credit="Photos by Silvan Mühlelemann"
            creditLabel="mühlelemann+popp AG"
            creditHref="https://www.muehlemannpopp.ch"
          />
        </Container>
      </Section>

      <Section surface="muted">
        <Container className="flex flex-col gap-8">
          <Heading level="h2">Sponsors</Heading>
          <div className="grid gap-6 sm:grid-cols-2">
            <SponsorCard
              logoSrc={atollLogo}
              name="ATOLL by EUTIMA"
              href="https://atoll-by-eutima.example.com"
            />
            <SponsorCard
              logoSrc={atollLogo}
              name="ATOLL by EUTIMA"
              variant="highlight"
              href="https://atoll-by-eutima.example.com"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 sm:max-w-3xl sm:grid-cols-4">
            <SponsorCard logoSrc={atollLogo} name="ATOLL by EUTIMA" size="sm" href="https://atoll-by-eutima.example.com" />
            <SponsorCard logoSrc={atollLogo} name="ATOLL by EUTIMA" size="sm" href="https://atoll-by-eutima.example.com" />
            <SponsorCard logoSrc={atollLogo} name="ATOLL by EUTIMA" size="sm" href="https://atoll-by-eutima.example.com" />
            <SponsorCard logoSrc={atollLogo} name="ATOLL by EUTIMA" size="sm" href="https://atoll-by-eutima.example.com" />
          </div>
        </Container>
      </Section>

      <Footer
        surface="muted"
        brand={
          <Link variant="quiet" href="/" aria-label="Vibe Code Fest home">
            <img src={vibeLogo} alt="Vibe Code Fest" className="size-16 object-contain" />
          </Link>
        }
        center={
          <span className="flex items-center gap-1 text-small text-muted-foreground">
            Vibe coded with <Icon name="heart" size="xs" className="text-destructive" aria-label="love" /> in Zurich
          </span>
        }
        links={[
          { label: "Terms & Conditions", href: "#" },
          { label: "Privacy Policy", href: "#" },
          { label: "Legal Notice & Contact", href: "#" },
          { label: "Internal", href: "#" },
        ]}
        socials={[
          { name: "instagram", href: "https://instagram.com", label: "Instagram" },
          { name: "whatsapp", href: "https://wa.me", label: "WhatsApp" },
        ]}
        newsletterHref="mailto:hello@vibecodefest.ch?subject=Newsletter"
      />
    </div>
  );
}
