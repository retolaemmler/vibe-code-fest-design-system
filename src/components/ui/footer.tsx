import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Container } from "./layout";
import { Link } from "./link";

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
  columns: FooterLinkColumn[];
  newsletterLabel?: string;
  newsletterHref?: string;
  onNewsletterClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  (
    {
      className,
      surface,
      brand,
      note,
      columns,
      newsletterLabel = "Subscribe to newsletter",
      newsletterHref,
      onNewsletterClick,
      ...props
    },
    ref,
  ) => (
    <footer ref={ref} className={cn(footerVariants({ surface }), className)} {...props}>
      <Container className="grid gap-10 py-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)_auto] lg:items-start lg:gap-12">
        <div className="flex min-w-0 flex-col gap-2">
          {brand}
          {note && <span className="text-small text-muted-foreground">{note}</span>}
        </div>
        <nav
          aria-label="Footer navigation"
          className="grid min-w-0 grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3"
        >
          {columns.map((column) => (
            <div key={column.title} className="flex min-w-0 flex-col items-start gap-2">
              <span className="text-caption font-semibold text-foreground">
                {column.title}
              </span>
              {column.links.map((link) => (
                <Link key={`${column.title}-${link.label}`} variant="quiet" href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
        <div className="flex min-w-0 flex-col items-start gap-3 lg:items-end">
          <span className="text-caption font-semibold text-foreground">Stay in the loop</span>
          {newsletterHref ? (
            <Button asChild variant="gradient" className="w-full sm:w-auto">
              <a href={newsletterHref}>{newsletterLabel}</a>
            </Button>
          ) : (
            <Button
              variant="gradient"
              className="w-full sm:w-auto"
              onClick={onNewsletterClick}
            >
              {newsletterLabel}
            </Button>
          )}
        </div>
      </Container>
    </footer>
  ),
);
Footer.displayName = "Footer";
