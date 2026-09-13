import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { Button } from "./button";
import { Container } from "./layout";
import { Icon } from "./icon";
import { Link } from "./link";

export const footerVariants = cva("w-full border-t border-border", {
  variants: {
    surface: { default: "bg-background", muted: "bg-muted", card: "bg-card" },
  },
  defaultVariants: { surface: "default" },
});

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSocial {
  name: "instagram" | "whatsapp";
  href: string;
  label: string;
}

export interface FooterProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof footerVariants> {
  /** Brand mark or logo rendered on the far left. */
  brand?: React.ReactNode;
  /** Optional centred content, e.g. a tagline with an icon. */
  center?: React.ReactNode;
  /** Bottom-row legal or secondary links, rendered horizontally and centred. */
  links: FooterLink[];
  /** Icon-only secondary actions rendered to the left of the newsletter button. */
  socials?: FooterSocial[];
  newsletterHref?: string;
  onNewsletterClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  (
    { className, surface, brand, center, links, socials, newsletterHref, onNewsletterClick, ...props },
    ref,
  ) => (
    <footer ref={ref} className={cn(footerVariants({ surface }), className)} {...props}>
      <Container className="flex flex-col gap-8 py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-4">
          <div className="shrink-0">{brand}</div>
          {center ? (
            <div className="order-first text-center md:order-none">{center}</div>
          ) : null}
          <div className="flex items-center gap-2">
            {socials?.map((social) => (
              <Button
                key={social.name}
                asChild
                variant="secondary"
                size="icon"
                aria-label={social.label}
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">{social.label}</span>
                  <Icon name={social.name} size="sm" />
                </a>
              </Button>
            ))}
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
        </div>
        <hr className="w-full border-t border-border" />
        <nav
          aria-label="Footer links"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {links.map((link) => (
            <Link key={link.label} variant="quiet" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  ),
);
Footer.displayName = "Footer";
