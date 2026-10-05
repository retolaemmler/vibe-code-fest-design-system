import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { Button } from "./button";

export interface PhotoFramePhoto {
  src: string;
  alt: string;
  position?: "center" | "top" | "upper";
}

export const photoFrameVariants = cva(
  "w-full rounded-card bg-gradient-primary p-2 md:p-3",
);

export const photoFrameImageVariants = cva(
  "block aspect-[4/3] size-full rounded-lg object-cover shadow-raised transition-transform duration-base ease-standard hover:rotate-1",
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
  /** Six photographs displayed as one responsive, gradient-framed gallery. */
  photos: readonly [
    PhotoFramePhoto,
    PhotoFramePhoto,
    PhotoFramePhoto,
    PhotoFramePhoto,
    PhotoFramePhoto,
    PhotoFramePhoto,
  ];
  /** Optional destination opened by the gallery button inside the frame. */
  href?: string;
  /** Label for the gallery button inside the frame. */
  linkLabel?: string;
  /** Plain credit text shown under the gallery button, e.g. "Photos by Jane Doe". */
  credit?: string;
  /** Link label rendered in parentheses after the credit text. */
  creditLabel?: string;
  /** Destination of the credit link. */
  creditHref?: string;
}

/**
 * A responsive six-photo event gallery inside one gradient frame. Pass href to
 * render the gallery button inside the frame; pass credit/creditLabel/creditHref
 * to add the photographer credit line with an inline link under the button.
 */
export const PhotoFrame = React.forwardRef<HTMLDivElement, PhotoFrameProps>(
  (
    {
      className,
      photos,
      href,
      linkLabel = "View Full Photo Gallery",
      credit,
      creditLabel,
      creditHref,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(photoFrameVariants(), className)}
        {...props}
      >
        <div className="flex w-full flex-col gap-4 rounded-card bg-card p-4 md:gap-6 md:p-6">
          <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
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
          {href && (
            <Button asChild variant="gradient" className="self-center">
              <a href={href} target="_blank" rel="noopener noreferrer">
                {linkLabel}
              </a>
            </Button>
          )}
          {(credit || creditLabel) && (
            <p className="text-center text-small text-muted-foreground">
              {credit}
              {credit && creditLabel && " "}
              {creditLabel && (
                <>
                  {"( "}
                  <a
                    href={creditHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary underline underline-offset-2 hover:text-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {creditLabel}
                  </a>
                  {" )"}
                </>
              )}
            </p>
          )}
        </div>
      </div>
    );
  },
);
PhotoFrame.displayName = "PhotoFrame";
