import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Code2,
  ExternalLink,
  Globe,
  Link2,
  Loader2,
  Info,
  Mail,
  Moon,
  MapPin,
  Menu,
  Mic,
  Minus,
  Plus,
  Search,
  Send,
  Sparkles,
  Share2,
  Star,
  Sun,
  Ticket,
  TriangleAlert,
  Users,
  Video,
  X,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "./social-icons";

/**
 * The one and only icon set of this design system: Lucide, plus a small
 * set of curated brand/social glyphs that Lucide does not provide.
 * Consumers pick an icon by name from `icons` — never import another
 * icon library, inline SVG, or emoji as an icon.
 */
export const icons = {
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  calendar: Calendar,
  check: Check,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  clock: Clock,
  code: Code2,
  externalLink: ExternalLink,
  globe: Globe,
  link: Link2,
  spinner: Loader2,
  info: Info,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  mail: Mail,
  moon: Moon,
  mapPin: MapPin,
  menu: Menu,
  mic: Mic,
  minus: Minus,
  plus: Plus,
  search: Search,
  send: Send,
  sparkles: Sparkles,
  share: Share2,
  star: Star,
  sun: Sun,
  ticket: Ticket,
  warning: TriangleAlert,
  users: Users,
  video: Video,
  whatsapp: WhatsAppIcon,
  close: X,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

export const iconVariants = cva("shrink-0", {
  variants: {
    size: {
      xs: "size-3.5",
      sm: "size-4",
      md: "size-5",
      lg: "size-6",
      xl: "size-8",
    },
    tone: {
      current: "text-current",
      default: "text-foreground",
      muted: "text-muted-foreground",
      brand: "text-primary",
      info: "text-info",
      success: "text-success",
      warning: "text-warning",
      destructive: "text-destructive",
    },
  },
  defaultVariants: { size: "sm", tone: "current" },
});

export interface IconProps
  extends Omit<React.SVGProps<SVGSVGElement>, "ref" | "name" | "color">,
    VariantProps<typeof iconVariants> {
  /** Icon key from the design system's Lucide set. */
  name: IconName;
  /** Accessible name. Omit for purely decorative icons. */
  label?: string;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size, tone, label, className, ...props }, ref) => {
    const Glyph = icons[name];
    return (
      <Glyph
        ref={ref}
        className={cn(iconVariants({ size, tone }), className)}
        strokeWidth={1.75}
        aria-hidden={label ? undefined : true}
        aria-label={label}
        role={label ? "img" : undefined}
        {...props}
      />
    );
  },
);
Icon.displayName = "Icon";
