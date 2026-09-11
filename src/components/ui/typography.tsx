import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const headingVariants = cva("text-balance", {
  variants: {
    level: {
      display: "text-display",
      h1: "text-h1",
      h2: "text-h2",
      h3: "text-h3",
    },
    tone: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      gradient: "text-gradient-primary",
    },
  },
  defaultVariants: { level: "h2", tone: "default" },
});

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "p";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  /** Rendered element — keep the document outline correct independently of size. */
  as?: HeadingTag;
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level, tone, as, ...props }, ref) => {
    const Comp = (as ?? (level === "display" ? "h1" : level ?? "h2")) as HeadingTag;
    return (
      <Comp
        ref={ref}
        className={cn(headingVariants({ level, tone }), className)}
        {...props}
      />
    );
  },
);
Heading.displayName = "Heading";

export const textVariants = cva("", {
  variants: {
    size: { body: "text-body", small: "text-small", caption: "text-caption" },
    tone: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
    },
    family: { sans: "font-sans", mono: "font-mono" },
  },
  defaultVariants: { size: "body", tone: "default", family: "sans" },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size, tone, family, as: Comp = "p", ...props }, ref) => (
    <Comp
      ref={ref}
      className={cn(textVariants({ size, tone, family }), className)}
      {...props}
    />
  ),
);
Text.displayName = "Text";
