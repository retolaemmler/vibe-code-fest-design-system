import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { Button } from "./button";

export const linkedinBubbleVariants = cva(
  "relative z-20 size-8 rounded-full border-2 border-card p-0 shadow-raised transition-shadow duration-(--duration-fast) ease-(--ease-standard) hover:shadow-lifted motion-reduce:transition-none",
  {
    variants: {
      placement: {
        inline: "shrink-0",
        avatar: "absolute -bottom-1 -right-1",
      },
    },
    defaultVariants: { placement: "inline" },
  },
);

export interface LinkedInBubbleProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "href">,
    VariantProps<typeof linkedinBubbleVariants> {
  href: string;
  /** Speaker name used to label the icon-only link. */
  name: string;
}

export const LinkedInBubble = React.forwardRef<HTMLAnchorElement, LinkedInBubbleProps>(
  ({ href, name, placement, className, ...props }, ref) => (
    <Button
      asChild
      variant="secondary"
      size="icon"
      iconStart="linkedin"
      className={cn(linkedinBubbleVariants({ placement }), className)}
    >
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name} on LinkedIn`}
        title={`${name} on LinkedIn`}
        {...props}
      />
    </Button>
  ),
);
LinkedInBubble.displayName = "LinkedInBubble";