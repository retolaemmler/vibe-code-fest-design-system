import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Ticket-styled card for hero pricing / ticket tiers.
 *
 * Visual recipe:
 * - A small pill sits at the very top edge ("Early bird", "Most popular", etc.).
 * - The body is split by a perforated tear line with semi-circle notches.
 * - The bottom area is reserved for the price as plain text.
 *
 * The notches are rendered with a CSS mask so the card stays usable on
 * gradient, muted or image backgrounds — not only on the default page colour.
 */
export const ticketCardVariants = cva(
  "relative flex flex-col rounded-card text-center",
  {
    variants: {
      variant: {
        default: "border border-border bg-card text-card-foreground shadow-raised",
        brand: "bg-gradient-primary text-primary-foreground shadow-glow",
        accent: "border border-primary/30 bg-primary-subtle text-primary shadow-raised",
        muted: "border border-border bg-muted text-foreground shadow-raised",
        outline: "border border-border bg-card text-card-foreground shadow-flat",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface TicketCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ticketCardVariants> {
  /** A pill or badge rendered at the top edge of the ticket. */
  pill?: React.ReactNode;
}

const TICKET_NOTCH_MASK =
  "radial-gradient(circle at 0 50%, transparent 10px, black 11px), radial-gradient(circle at 100% 50%, transparent 10px, black 11px)";

export const TicketCard = React.forwardRef<HTMLDivElement, TicketCardProps>(
  ({ className, variant, pill, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative", pill ? "pt-4" : "", className)}
      {...props}
    >
      {pill ? (
        <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
          {pill}
        </div>
      ) : null}
      <div
        className={cn(ticketCardVariants({ variant }), "overflow-hidden")}
        style={{
          maskImage: TICKET_NOTCH_MASK,
          WebkitMaskImage: TICKET_NOTCH_MASK,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      >
        {children}
      </div>
    </div>
  ),
);
TicketCard.displayName = "TicketCard";

export const TicketHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col items-center gap-2 p-6 pb-8", className)}
    {...props}
  />
));
TicketHeader.displayName = "TicketHeader";

export const TicketTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-caption uppercase tracking-[0.12em] opacity-80", className)}
    {...props}
  />
));
TicketTitle.displayName = "TicketTitle";

export const TicketDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-small opacity-80", className)} {...props} />
));
TicketDescription.displayName = "TicketDescription";

export const TicketPrice = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative flex flex-col items-center gap-1 p-6 pt-8 before:absolute before:inset-x-0 before:top-0 before:border-t before:border-dashed before:border-current before:opacity-30",
      className,
    )}
    {...props}
  />
));
TicketPrice.displayName = "TicketPrice";
