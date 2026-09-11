import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const linkVariants = cva(
  [
    "inline-flex items-center gap-1.5 outline-none rounded-field",
    "transition-colors duration-(--duration-fast) ease-(--ease-standard)",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "aria-disabled:pointer-events-none aria-disabled:opacity-50",
    "[&_svg]:size-4 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        inline:
          "px-1 py-1 text-primary underline underline-offset-2 hover:text-primary-hover",
        nav: "px-3 py-2 text-small text-muted-foreground hover:text-foreground",
        quiet: "px-1 py-1 text-muted-foreground hover:text-foreground",
      },
      active: { true: "", false: "" },
    },
    compoundVariants: [
      { variant: "nav", active: true, class: "text-foreground" },
    ],
    defaultVariants: { variant: "inline", active: false },
  },
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, active, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(linkVariants({ variant, active }), className)}
      {...props}
    />
  ),
);
Link.displayName = "Link";
