import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { Container } from "./layout";

export const navbarVariants = cva("w-full", {
  variants: {
    variant: {
      solid: "border-b border-border bg-background",
      glass: "surface-glass rounded-none",
      transparent: "bg-transparent",
    },
    sticky: { true: "sticky top-0 z-50", false: "" },
  },
  defaultVariants: { variant: "solid", sticky: false },
});

export interface NavbarProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navbarVariants> {
  brand?: React.ReactNode;
  actions?: React.ReactNode;
}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, variant, sticky, brand, actions, children, ...props }, ref) => (
    <header
      ref={ref}
      className={cn(navbarVariants({ variant, sticky }), className)}
      {...props}
    >
      <Container className="flex h-16 items-center justify-between gap-2 lg:gap-6">
        <div className="flex shrink-0 items-center gap-2">{brand}</div>
        <nav className="hidden min-w-0 items-center gap-0 md:flex lg:gap-1">{children}</nav>
        <div className="flex shrink-0 items-center gap-2">{actions}</div>
      </Container>
    </header>
  ),
);
Navbar.displayName = "Navbar";
