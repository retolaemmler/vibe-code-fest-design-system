import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import { Heading, Text } from "./typography";
import { Icon, type IconName } from "./icon";

export const scheduleItemVariants = cva(
  "flex flex-col gap-2 border-border py-5 sm:flex-row sm:items-baseline sm:gap-6",
  {
    variants: {
      variant: {
        list: "border-b last:border-b-0",
        boxed: "rounded-card border bg-card px-5",
      },
    },
    defaultVariants: { variant: "list" },
  },
);

export interface ScheduleItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scheduleItemVariants> {
  time: string;
  title: string;
  speaker?: string;
  track?: string;
}

export const ScheduleItem = React.forwardRef<HTMLDivElement, ScheduleItemProps>(
  ({ className, variant, time, title, speaker, track, ...props }, ref) => (
    <div ref={ref} className={cn(scheduleItemVariants({ variant }), className)} {...props}>
      <Text as="span" size="small" family="mono" tone="primary" className="sm:w-24">
        {time}
      </Text>
      <div className="flex flex-1 flex-col gap-1">
        <Text as="span" className="font-medium">
          {title}
        </Text>
        {speaker && (
          <Text as="span" size="small" tone="muted">
            {speaker}
          </Text>
        )}
      </div>
      {track && <Badge variant="neutral">{track}</Badge>}
    </div>
  ),
);
ScheduleItem.displayName = "ScheduleItem";

export const scheduleHeaderVariants = cva(
  "flex items-start gap-4 rounded-card border p-5",
  {
    variants: {
      tone: {
        default: "border-border bg-card",
        brand: "border-primary/20 bg-primary-subtle",
        accent: "border-accent/20 bg-accent-subtle",
        info: "border-info/20 bg-info-subtle",
        success: "border-success/20 bg-success-subtle",
        warning: "border-warning/20 bg-warning-subtle",
        destructive: "border-destructive/20 bg-destructive-subtle",
      },
    },
    defaultVariants: { tone: "default" },
  },
);

const headerIconTone = {
  default: "muted",
  brand: "brand",
  accent: "accent",
  info: "info",
  success: "success",
  warning: "warning-foreground",
  destructive: "destructive",
} as const satisfies Record<
  NonNullable<VariantProps<typeof scheduleHeaderVariants>["tone"]>,
  string
>;

const headerTitleTone = {
  default: "foreground",
  brand: "primary",
  accent: "accent",
  info: "info",
  success: "success",
  warning: "warning-foreground",
  destructive: "destructive",
} as const satisfies Record<
  NonNullable<VariantProps<typeof scheduleHeaderVariants>["tone"]>,
  string
>;

export interface ScheduleHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scheduleHeaderVariants> {
  icon: IconName;
  title: string;
  subtext?: string;
}

export const ScheduleHeader = React.forwardRef<HTMLDivElement, ScheduleHeaderProps>(
  ({ className, tone, icon, title, subtext, ...props }, ref) => {
    const toneKey = tone ?? "default";
    return (
      <div
        ref={ref}
        className={cn(scheduleHeaderVariants({ tone }), className)}
        {...props}
      >
        <div className="flex size-10 shrink-0 items-center justify-center rounded-field bg-background p-2">
          <Icon
            name={icon}
            size="md"
            className={cn(`text-${headerIconTone[toneKey]}`)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Heading
            level="h3"
            as="h3"
            className={cn(`text-${headerTitleTone[toneKey]}`)}
          >
            {title}
          </Heading>
          {subtext && (
            <Text size="small" tone="muted">
              {subtext}
            </Text>
          )}
        </div>
      </div>
    );
  },
);
ScheduleHeader.displayName = "ScheduleHeader";
