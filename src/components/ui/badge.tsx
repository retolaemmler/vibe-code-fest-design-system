import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { Icon, type IconName } from "./icon";

export const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-pill border px-3 py-1 text-caption [&_svg]:size-3.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        neutral: "",
        brand: "",
        info: "",
        success: "",
        warning: "",
        destructive: "",
      },
      tone: { subtle: "", solid: "" },
    },
    compoundVariants: [
      {
        variant: "neutral",
        tone: "subtle",
        class: "border-border bg-muted text-muted-foreground",
      },
      {
        variant: "neutral",
        tone: "solid",
        class: "border-transparent bg-secondary text-secondary-foreground",
      },
      {
        variant: "brand",
        tone: "subtle",
        class: "border-transparent bg-primary-subtle text-primary",
      },
      {
        variant: "brand",
        tone: "solid",
        class: "border-transparent bg-gradient-primary text-primary-foreground",
      },
      {
        variant: "info",
        tone: "subtle",
        class: "border-transparent bg-info-subtle text-info",
      },
      {
        variant: "info",
        tone: "solid",
        class: "border-transparent bg-info text-info-foreground",
      },
      {
        variant: "success",
        tone: "subtle",
        class: "border-transparent bg-success-subtle text-success",
      },
      {
        variant: "success",
        tone: "solid",
        class: "border-transparent bg-success text-success-foreground",
      },
      {
        variant: "warning",
        tone: "subtle",
        class: "border-transparent bg-warning-subtle text-warning",
      },
      {
        variant: "warning",
        tone: "solid",
        class: "border-transparent bg-warning text-warning-foreground",
      },
      {
        variant: "destructive",
        tone: "subtle",
        class: "border-transparent bg-destructive-subtle text-destructive",
      },
      {
        variant: "destructive",
        tone: "solid",
        class: "border-transparent bg-destructive text-destructive-foreground",
      },
    ],
    defaultVariants: { variant: "neutral", tone: "subtle" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  /** Optional decorative icon rendered before the label. */
  iconStart?: IconName;
  /** Optional decorative icon rendered after the label. */
  iconEnd?: IconName;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, tone, iconStart, iconEnd, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(badgeVariants({ variant, tone }), className)}
      {...props}
    >
      {iconStart ? <Icon name={iconStart} aria-hidden /> : null}
      {children}
      {iconEnd ? <Icon name={iconEnd} aria-hidden /> : null}
    </span>
  ),
);
Badge.displayName = "Badge";
