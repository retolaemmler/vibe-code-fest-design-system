import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import { Heading, Text } from "./typography";
import { Icon, type IconName } from "./icon";
import { featureMedallionVariants } from "./feature-card";

export const scheduleItemVariants = cva(
  "flex flex-col gap-2 border-border py-5 sm:flex-row sm:items-baseline sm:gap-6",
  {
    variants: {
      variant: {
        list: "border-b last:border-b-0",
        boxed: "rounded-card border bg-card px-5",
        grouped: "border-b last:border-b-0 px-5",
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
  "flex items-start gap-4 p-5",
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
      layout: {
        card: "rounded-card border",
        flush: "rounded-none border-x-0 border-t-0 border-b border-border",
      },
    },
    defaultVariants: { tone: "default", layout: "card" },
  },
);

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
  ({ className, tone, layout, icon, title, subtext, ...props }, ref) => {
    const toneKey = tone ?? "default";
    const medallionTone =
      toneKey === "default" || toneKey === "brand" ? "gradient" : toneKey;
    return (
      <div
        ref={ref}
        className={cn(scheduleHeaderVariants({ tone, layout }), className)}
        {...props}
      >
        <span className={featureMedallionVariants({ tone: medallionTone, size: "sm" })}>
          <Icon name={icon} size="sm" />
        </span>
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

export interface ScheduleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Schedule = React.forwardRef<HTMLDivElement, ScheduleProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden rounded-card border border-border bg-card shadow-raised",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
Schedule.displayName = "Schedule";
