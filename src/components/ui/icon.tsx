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
  Github,
  Globe,
  Info,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Mic,
  Minus,
  Plus,
  Search,
  Send,
  Sparkles,
  Star,
  Ticket,
  TriangleAlert,
  Users,
  X,
  Youtube,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * The one and only icon set of this design system: Lucide.
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
  github: Github,
  globe: Globe,
  info: Info,
  linkedin: Linkedin,
  mail: Mail,
  mapPin: MapPin,
  menu: Menu,
  mic: Mic,
  minus: Minus,
  plus: Plus,
  search: Search,
  send: Send,
  sparkles: Sparkles,
  star: Star,
  ticket: Ticket,
  warning: TriangleAlert,
  users: Users,
  close: X,
  youtube: Youtube,
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
