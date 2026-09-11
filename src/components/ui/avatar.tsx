import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const avatarVariants = cva(
  "inline-flex shrink-0 items-center justify-center overflow-hidden bg-muted text-muted-foreground",
  {
    variants: {
      size: {
        sm: "size-10 text-small",
        md: "size-14 text-body",
        lg: "size-20 text-h3",
      },
      shape: { circle: "rounded-pill", rounded: "rounded-card" },
    },
    defaultVariants: { size: "md", shape: "circle" },
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

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, size, shape, src, name, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(avatarVariants({ size, shape }), className)}
      {...props}
    >
      {src ? (
        <img src={src} alt={name} className="size-full object-cover" loading="lazy" />
      ) : (
        <span aria-hidden="true" className="font-medium">
          {initials(name)}
        </span>
      )}
    </span>
  ),
);
Avatar.displayName = "Avatar";
