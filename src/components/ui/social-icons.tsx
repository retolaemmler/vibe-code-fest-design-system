import * as React from "react";
import type { LucideIcon } from "lucide-react";

/**
 * Curated brand/social glyphs that Lucide does not ship.
 * These live in the same Icon registry and follow the same styling contract
 * (currentColor, 24×24 viewBox, 1.75 stroke) so they feel like the rest of the set.
 */

export const InstagramIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
) as LucideIcon;
InstagramIcon.displayName = "InstagramIcon";

export const LinkedInIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="4" ry="4" />
      <path d="M8 11v6" />
      <circle cx="8" cy="8.5" r="0.8" fill="currentColor" stroke="none" />
      <path d="M13 11v6" />
      <path d="M13 11C13 9 16 9 16 11v6" />
    </svg>
  ),
) as LucideIcon;
LinkedInIcon.displayName = "LinkedInIcon";

export const WhatsAppIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.38 8.38 0 0 1-3.8-.9L3 21l1.7-5.7A8.38 8.38 0 0 1 3.7 11.5 8.5 8.5 0 0 1 12.5 3a8.38 8.38 0 0 1 3.8.9 8.5 8.5 0 0 1 4.7 7.6 8.38 8.38 0 0 1-.9 3.8" />
      <path d="M14.5 13.5c-1 1.5-2.5 1.5-3.5.5l-1-1.2 1.5-1 .5-1.5-1.5-1-1 1.2c-.5.5-.7 1.5-.2 2l1.5 2c1.2 1.2 3.2 1 4.7-.7l1-1.2Z" />
    </svg>
  ),
) as LucideIcon;
WhatsAppIcon.displayName = "WhatsAppIcon";
