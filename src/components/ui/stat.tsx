import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const statVariants = cva("flex flex-col gap-1", {
  variants: {
    align: { start: "items-start text-left", center: "items-center text-center" },
    tone: { default: "", brand: "" },
  },
  defaultVariants: { align: "center", tone: "default" },
});

export interface StatProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statVariants> {
  value: string;
  label: string;
}

export const Stat = React.forwardRef<HTMLDivElement, StatProps>(
  ({ className, align, tone, value, label, ...props }, ref) => (
    <div ref={ref} className={cn(statVariants({ align, tone }), className)} {...props}>
      <span
        className={cn(
          "text-h1",
          tone === "brand" ? "text-gradient-primary" : "text-foreground",
        )}
      >
        {value}
      </span>
      <span className="text-caption text-muted-foreground">{label}</span>
    </div>
  ),
);
Stat.displayName = "Stat";
