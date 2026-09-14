import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

export const avatarVariants = cva(
  "inline-flex shrink-0 items-center justify-center",
  {
    variants: {
      size: {
        sm: "size-10 text-small",
        md: "size-14 text-body",
        lg: "size-20 text-h3",
        xl: "size-28 text-h2",
      },
      shape: { circle: "rounded-pill", rounded: "rounded-card" },
      ring: {
        none: "overflow-hidden bg-muted text-muted-foreground",
        gradient: "bg-gradient-primary p-0.5",
      },
    },
    defaultVariants: { size: "md", shape: "circle", ring: "none" },
  },
);

export interface AvatarProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  /** Describes the person; also used for the image alt text. */
  name: string;
}

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function AvatarContent({ src, name }: { src?: string; name: string }) {
  return src ? (
    <img src={src} alt={name} className="size-full object-cover" loading="lazy" />
  ) : (
    <span aria-hidden="true" className="font-medium">
      {initials(name)}
    </span>
  );
}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, size, shape, ring, src, name, ...props }, ref) => {
    const isGradientRing = ring === "gradient";
    return (
      <span
        ref={ref}
        className={cn(avatarVariants({ size, shape, ring }), className)}
        {...props}
      >
        {isGradientRing ? (
          <span className="flex size-full items-center justify-center overflow-hidden rounded-[inherit] bg-muted text-muted-foreground">
            <AvatarContent src={src} name={name} />
          </span>
        ) : (
          <AvatarContent src={src} name={name} />
        )}
      </span>
    );
  },
);
Avatar.displayName = "Avatar";
