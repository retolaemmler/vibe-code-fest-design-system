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
  newsletterHref?: string;
  onNewsletterClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkColumn {
  title?: string;
  links: FooterLink[];
}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  (
    { className, surface, brand, note, columns, newsletterHref, onNewsletterClick, ...props },
    ref,
  ) => (
    <footer ref={ref} className={cn(footerVariants({ surface }), className)} {...props}>
      <Container className="flex flex-col gap-10 py-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 flex-col gap-2">
            {brand}
            {note && <span className="text-small text-muted-foreground">{note}</span>}
          </div>
          {newsletterHref ? (
            <Button asChild variant="gradient" size="sm" iconStart="mail">
              <a href={newsletterHref}>Subscribe to newsletter</a>
            </Button>
          ) : (
            <Button
              variant="gradient"
              size="sm"
              iconStart="mail"
              onClick={onNewsletterClick}
            >
              Subscribe to newsletter
            </Button>
          )}
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
      </Container>
    </footer>
  ),
);
Footer.displayName = "Footer";
