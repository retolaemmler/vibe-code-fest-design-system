import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Container } from "./layout";

export const footerVariants = cva("w-full border-t border-border", {
  variants: {
    surface: { default: "bg-background", muted: "bg-muted", card: "bg-card" },
  },
  defaultVariants: { surface: "default" },
});

export interface FooterProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof footerVariants> {
  brand?: React.ReactNode;
  note?: React.ReactNode;
}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, surface, brand, note, children, ...props }, ref) => (
    <footer ref={ref} className={cn(footerVariants({ surface }), className)} {...props}>
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          {brand}
          {note && <span className="text-small text-muted-foreground">{note}</span>}
        </div>
        <nav className="flex flex-wrap items-center gap-4">{children}</nav>
      </Container>
    </footer>
  ),
);
Footer.displayName = "Footer";
