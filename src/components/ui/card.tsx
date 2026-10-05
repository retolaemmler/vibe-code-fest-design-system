import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

/**
 * Elevation ladder (see --shadow-* tokens in index.css):
 * plain / outline -> level 0 flat, raised -> level 1, elevated -> level 2,
 * overlay -> level 3, gradient -> brand glow.
 */
export const cardVariants = cva("rounded-card relative text-card-foreground", {
  variants: {
    variant: {
      plain: "bg-card shadow-flat",
      outline: "border border-border bg-card shadow-flat",
      raised: "border border-border/60 bg-card shadow-raised",
      elevated: "border border-border/60 bg-card shadow-lifted",
      overlay: "border border-border/60 bg-popover text-popover-foreground shadow-overlay",
      glass: "surface-glass rounded-card shadow-raised",
      gradient: "bg-gradient-primary text-primary-foreground shadow-glow",
    },
    padding: { none: "", sm: "p-4", md: "p-6", lg: "p-8" },
  },
  defaultVariants: { variant: "outline", padding: "md" },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding }), className)}
      {...props}
    />
  ),
);
Card.displayName = "Card";

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-1.5", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

export const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn("text-h3 text-foreground", className)} {...props} />
));
CardTitle.displayName = "CardTitle";

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-small text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

export const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-body", className)} {...props} />
));
CardContent.displayName = "CardContent";

export const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center gap-3", className)} {...props} />
));
CardFooter.displayName = "CardFooter";
