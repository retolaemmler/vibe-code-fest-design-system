import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const sponsorCardVariants = cva(
  "group flex min-h-48 items-center justify-center overflow-hidden rounded-card border p-6 transition-all duration-fast ease-standard",
  {
    variants: {
      variant: {
        default:
          "border-border bg-card text-card-foreground shadow-raised hover:-translate-y-1 hover:border-primary hover:shadow-lifted",
        highlight:
          "border-primary bg-primary-subtle text-primary shadow-lifted hover:-translate-y-1 hover:shadow-glow",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface SponsorCardProps
  extends Omit<React.HTMLAttributes<HTMLAnchorElement>, "children">,
    VariantProps<typeof sponsorCardVariants> {
  /** URL or imported asset for the sponsor logo. */
  logoSrc: string;
  /** Sponsor name used as the logo's accessible alternative text. */
  name: string;
  /** Optional destination that makes the complete card a link. */
  href?: string;
}

export const SponsorCard = React.forwardRef<HTMLAnchorElement, SponsorCardProps>(
  ({ className, variant, logoSrc, name, href, ...props }, ref) => {
    const logo = (
      <img
        src={logoSrc}
        alt={`${name} logo`}
        className="max-h-32 w-full max-w-64 object-contain transition-transform duration-fast ease-standard group-hover:scale-[1.02]"
        loading="lazy"
      />
    );

    if (href) {
      return (
        <a
          ref={ref}
          href={href}
          aria-label={`Visit ${name}`}
          className={cn(sponsorCardVariants({ variant }), className)}
          {...props}
        >
          {logo}
        </a>
      );
    }

    return (
      <div
        className={cn(sponsorCardVariants({ variant }), className)}
        {...props}
      >
        {logo}
      </div>
    );
  },
);
SponsorCard.displayName = "SponsorCard";