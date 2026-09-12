import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const sponsorCardVariants = cva(
  "flex min-h-48 items-center justify-center overflow-hidden rounded-card border p-6",
  {
    variants: {
      variant: {
        default: "border-border bg-card text-card-foreground shadow-raised",
        highlight:
          "border-primary bg-primary-subtle text-primary shadow-lifted",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface SponsorCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof sponsorCardVariants> {
  /** URL or imported asset for the sponsor logo. */
  logoSrc: string;
  /** Sponsor name used as the logo's accessible alternative text. */
  name: string;
  /** Optional destination that makes the complete card a link. */
  href?: string;
}

export const SponsorCard = React.forwardRef<HTMLDivElement, SponsorCardProps>(
  ({ className, variant, logoSrc, name, href, ...props }, ref) => {
    const logo = (
      <img
        src={logoSrc}
        alt={`${name} logo`}
        className="max-h-32 w-full max-w-64 object-contain"
        loading="lazy"
      />
    );

    return (
      <div
        ref={ref}
        className={cn(sponsorCardVariants({ variant }), className)}
        {...props}
      >
        {href ? (
          <a
            href={href}
            aria-label={`Visit ${name}`}
            className="flex h-full w-full items-center justify-center rounded-field transition-colors duration-fast ease-standard hover:bg-primary-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:bg-primary-subtle"
          >
            {logo}
          </a>
        ) : (
          logo
        )}
      </div>
    );
  },
);
SponsorCard.displayName = "SponsorCard";