import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { Text } from "./typography";

export const inputVariants = cva(
  [
    "w-full rounded-field border bg-background px-3 text-small text-foreground",
    "placeholder:text-muted-foreground",
    "outline-none transition-colors duration-(--duration-fast) ease-(--ease-standard)",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:cursor-not-allowed disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      state: {
        default: "border-input hover:border-muted-foreground/40 focus-visible:ring-ring",
        invalid:
          "border-destructive bg-destructive-subtle focus-visible:ring-destructive",
      },
      size: { sm: "h-8", md: "h-10", lg: "h-12" },
    },
    defaultVariants: { state: "default", size: "md" },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  /** Visible field label. */
  label?: string;
  /** Error message; setting it puts the field in its invalid state. */
  error?: string;
  /** Supporting hint shown when there is no error. */
  hint?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, state, size, label, error, hint, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const messageId = `${inputId}-message`;
    const resolvedState = error ? "invalid" : state;

    return (
      <div className={cn("flex flex-col gap-1.5", className)}>
        {label ? (
          <label htmlFor={inputId} className="text-caption text-muted-foreground">
            {label}
          </label>
        ) : null}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={error || hint ? messageId : undefined}
          className={inputVariants({ state: resolvedState, size })}
          {...props}
        />
        {error || hint ? (
          <Text
            id={messageId}
            as="span"
            size="small"
            tone={error ? "destructive" : "muted"}
          >
            {error ?? hint}
          </Text>
        ) : null}
      </div>
    );
  },
);
Input.displayName = "Input";
