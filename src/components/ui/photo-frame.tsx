import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

export interface PhotoFramePhoto {
  src: string;
  alt: string;
  position?: "center" | "top" | "upper";
}

export const photoFrameVariants = cva(
  "grid grid-cols-2 gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-3",
  {
    variants: {
      interactive: {
        false: "",
        true: "transition-colors duration-fast hover:border-primary-hover active:border-primary",
      },
    },
    defaultVariants: { interactive: false },
  },
);

export const photoFrameImageVariants = cva(
  "block aspect-[4/3] size-full object-cover",
  {
    variants: {
      position: {
        center: "object-center",
        top: "object-top",
        upper: "object-[center_25%]",
      },
    },
    defaultVariants: { position: "center" },
  },
);

export interface PhotoFrameProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  /** Six photographs displayed as one responsive, thin-lined frame. */
  photos: readonly [
    PhotoFramePhoto,
    PhotoFramePhoto,
    PhotoFramePhoto,
    PhotoFramePhoto,
    PhotoFramePhoto,
    PhotoFramePhoto,
  ];
  /** Optional destination that makes the complete frame a link. */
  href?: string;
  /** Accessible label for the linked frame. */
  linkLabel?: string;
}

/**
 * A responsive six-photo event frame with shared hairline dividers. Pass href
 * only when the entire frame should open a larger gallery.
 */
export const PhotoFrame = React.forwardRef<HTMLDivElement, PhotoFrameProps>(
  ({ className, photos, href, linkLabel = "View full photo gallery", ...props }, ref) => {
    const images = (
      <div className={photoFrameVariants({ interactive: Boolean(href) })}>
        {photos.slice(0, 6).map((photo) => (
          <img
            key={`${photo.src}-${photo.alt}`}
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            className={photoFrameImageVariants({ position: photo.position })}
          />
        ))}
      </div>
    );

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {href ? (
          <a
            href={href}
            aria-label={linkLabel}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-card outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {images}
          </a>
        ) : (
          images
        )}
      </div>
    );
  },
);
PhotoFrame.displayName = "PhotoFrame";