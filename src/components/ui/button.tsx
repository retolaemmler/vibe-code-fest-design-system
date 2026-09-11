import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
    "outline-none transition-colors duration-(--duration-fast) ease-(--ease-standard)",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.98] motion-reduce:active:scale-100",
    "[&_svg]:size-4 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        gradient:
          "bg-gradient-primary text-primary-foreground shadow-soft hover:bg-gradient-primary-hover",
        solid: "bg-primary text-primary-foreground hover:bg-primary-hover",
        outline:
          "border border-border bg-background text-foreground hover:bg-muted",
        ghost: "bg-transparent text-foreground hover:bg-muted",
        link: "bg-transparent text-primary underline underline-offset-4 hover:text-primary-hover",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        sm: "h-8 rounded-field px-3 text-small",
        md: "h-10 rounded-field px-4 text-small",
        lg: "h-12 rounded-pill px-6 text-body",
        icon: "size-10 rounded-field",
      },
    },
    defaultVariants: { variant: "solid", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as the single child element instead of a <button>. */
  asChild?: boolean;
  /** Shows a spinner and blocks interaction while an action is in flight. */
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, children, disabled, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading && !asChild ? (
          <Icon name="spinner" className="animate-spin" aria-hidden />
        ) : null}
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";
