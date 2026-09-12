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
      <Container className="flex flex-col gap-8 py-10">
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
        <hr className="w-full border-t border-border" />
        <nav
          aria-label="Footer navigation"
          className="grid min-w-0 grid-cols-2 place-items-center gap-x-4 gap-y-6 sm:grid-cols-3"
        >
          {columns.map((column, index) => (
            <div key={column.title ?? `column-${index}`} className="flex min-w-0 flex-col items-center gap-2">
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
