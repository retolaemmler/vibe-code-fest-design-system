import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

export interface TabsProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {}

/** A controlled or uncontrolled set of mutually exclusive content panels. */
export const Tabs = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Root>, TabsProps>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.Root ref={ref} className={cn("min-w-0", className)} {...props} />
  ),
);
Tabs.displayName = "Tabs";

export const tabsListVariants = cva(
  "flex min-h-10 w-full min-w-0 items-stretch gap-1 rounded-field bg-muted p-1 text-muted-foreground",
);

export interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {}

export const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, TabsListProps>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.List ref={ref} className={cn(tabsListVariants(), className)} {...props} />
  ),
);
TabsList.displayName = "TabsList";

export const tabsTriggerVariants = cva(
  [
    "inline-flex min-w-0 flex-1 items-center justify-center rounded-field px-3 py-1 text-center text-small font-medium",
    "outline-none transition-colors duration-(--duration-fast) ease-(--ease-standard)",
    "hover:bg-background/60 hover:text-foreground",
    "focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-raised",
  ].join(" "),
);

export interface TabsTriggerProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {}

export const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, TabsTriggerProps>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.Trigger ref={ref} className={cn(tabsTriggerVariants(), className)} {...props} />
  ),
);
TabsTrigger.displayName = "TabsTrigger";

export interface TabsContentProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {}

export const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, TabsContentProps>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.Content
      ref={ref}
      className={cn("mt-6 min-w-0 rounded-field outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background", className)}
      {...props}
    />
  ),
);
TabsContent.displayName = "TabsContent";