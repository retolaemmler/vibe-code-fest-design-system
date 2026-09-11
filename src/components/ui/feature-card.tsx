import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Icon, type IconName } from "@/components/ui/icon";

export const featureMedallionVariants = cva(
  "flex items-center justify-center rounded-pill",
  {
    variants: {
      tone: {
        gradient: "bg-gradient-primary text-primary-foreground shadow-soft",
        muted: "bg-muted text-foreground",
        outline: "border border-border bg-card text-foreground",
      },
      size: {
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
}

/**
 * Elevated card with an icon medallion, heading and short supporting text —
 * the pattern used for criteria, perks and highlights.
 */
export const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, icon, title, description, tone, size, ...props }, ref) => (
    <Card
      ref={ref}
      variant="elevated"
      padding="lg"
      className={cn("flex flex-col gap-5", className)}
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
  ),
);
FeatureCard.displayName = "FeatureCard";
