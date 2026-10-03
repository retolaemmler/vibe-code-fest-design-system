import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { Card, CardDescription, CardTitle } from "./card";
import { Icon, type IconName } from "./icon";

export const featureMedallionVariants = cva(
  "flex shrink-0 items-center justify-center rounded-pill",
  {
    variants: {
      tone: {
        gradient: "bg-gradient-primary text-primary-foreground shadow-raised",
        muted: "bg-muted text-foreground",
        outline: "border border-border bg-card text-foreground",
        accent: "bg-accent text-accent-foreground shadow-raised",
        info: "bg-info text-info-foreground shadow-raised",
        success: "bg-success text-success-foreground shadow-raised",
        warning: "bg-warning text-warning-foreground shadow-raised",
        destructive: "bg-destructive text-destructive-foreground shadow-raised",
      },
      size: {
        sm: "size-10",
        md: "size-12",
        lg: "size-14",
      },
    },
    defaultVariants: { tone: "gradient", size: "lg" },
  },
);

export interface FeatureCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof featureMedallionVariants> {
  /** Icon shown in the medallion at the top of the card. */
  icon: IconName;
  title: string;
  description: string;
  /** When set, the whole card becomes a clickable link to this href. */
  href?: string;
}

/**
 * Elevated card with an icon medallion, heading and short supporting text —
 * the pattern used for criteria, perks and highlights. Use it as-is for
 * non-interactive content; pass `href` to make the whole card a clickable
 * link with hover lift and a focus ring.
 */
export const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, icon, title, description, tone, size, href, ...props }, ref) => {
    const card = (
      <Card
        ref={ref}
        variant="elevated"
        padding="lg"
        className={cn(
          "flex flex-col gap-5 transition",
          href &&
            "group-hover:-translate-y-1 group-hover:shadow-lifted group-active:translate-y-0",
          className,
        )}
        {...props}
      >
        <span className={featureMedallionVariants({ tone, size })}>
          <Icon name={icon} size={size === "md" ? "md" : "lg"} />
        </span>
        <div className="flex flex-col gap-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-body">{description}</CardDescription>
        </div>
      </Card>
    );

    if (!href) return card;

    return (
      <a
        href={href}
        className={cn(
          "group block rounded-card outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
      >
        {card}
      </a>
    );
  },
);
FeatureCard.displayName = "FeatureCard";
