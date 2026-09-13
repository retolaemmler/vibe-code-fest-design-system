import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "../../lib/utils";
import { Icon } from "./icon";

export const Faq = AccordionPrimitive.Root;

export const FaqItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-border", className)}
    {...props}
  />
));
FaqItem.displayName = "FaqItem";

export const FaqTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between gap-4 rounded-field py-5 text-left outline-none",
        "text-body font-medium text-foreground",
        "transition-colors duration-(--duration-fast) ease-(--ease-standard) hover:text-primary",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:opacity-50",
        "[&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <Icon
        name="chevronDown"
        tone="muted"
        className="transition-transform duration-(--duration-base) ease-(--ease-standard)"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
FaqTrigger.displayName = "FaqTrigger";

export const FaqContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-body text-muted-foreground"
    {...props}
  >
    <div className={cn("pb-5", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
FaqContent.displayName = "FaqContent";
