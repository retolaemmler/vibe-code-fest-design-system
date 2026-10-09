import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";

export const containerVariants = cva("mx-auto w-full px-4 sm:px-6", {
  variants: {
    size: {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-6xl",
      full: "max-w-none",
    },
  },
  defaultVariants: { size: "lg" },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, ...props }, ref) => (
    <div ref={ref} className={cn(containerVariants({ size }), className)} {...props} />
  ),
);
Container.displayName = "Container";

export const sectionVariants = cva("w-full", {
  variants: {
    spacing: { sm: "py-12", md: "py-20", lg: "py-28" },
    surface: {
      none: "",
      muted: "bg-muted",
      "muted-alternate": "bg-muted-alternate",
      card: "bg-card",
      gradient: "bg-gradient-surface",
    },
  },
  defaultVariants: { spacing: "md", surface: "none" },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing, surface, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(sectionVariants({ spacing, surface }), className)}
      {...props}
    />
  ),
);
Section.displayName = "Section";
