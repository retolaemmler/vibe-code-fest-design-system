import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import { featureMedallionVariants } from "./feature-card";
import { Icon, type IconName } from "./icon";

export const scheduleItemVariants = cva(
  "ml-16 rounded-card text-card-foreground shadow-raised",
  {
    variants: {
      variant: {
        glass: "surface-glass",
        solid: "border border-border/60 bg-card",
      },
      padding: { sm: "p-4", md: "p-5" },
    },
    defaultVariants: { variant: "glass", padding: "md" },
  },
);

export const scheduleMarkerVariants = cva(
  "absolute left-6 top-1/2 z-20 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-pill shadow-raised ring-4 ring-dark-section",
  {
    variants: {
      tone: {
        primary: "bg-primary text-primary-foreground",
        accent: "bg-accent text-accent-foreground",
        info: "bg-info text-info-foreground",
        success: "bg-success text-success-foreground",
        warning: "bg-warning text-warning-foreground",
      },
    },
    defaultVariants: { tone: "primary" },
  },
);

type ScheduleMarkerTone = NonNullable<VariantProps<typeof scheduleMarkerVariants>["tone"]>;
const ScheduleMarkerToneContext = React.createContext<ScheduleMarkerTone>("primary");

export interface ScheduleItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scheduleItemVariants> {
  time: string;
  title: string;
  speaker?: string;
  track?: string;
  /** Adds a solid circular node. Omit it for breaks, lunch, and passive moments. */
  markerIcon?: IconName;
}

export const ScheduleItem = React.forwardRef<HTMLDivElement, ScheduleItemProps>(
  ({ className, variant, padding, time, title, speaker, track, markerIcon, ...props }, ref) => {
    const markerTone = React.useContext(ScheduleMarkerToneContext);
    return (
      <div className="relative">
        {markerIcon ? (
          <span className={scheduleMarkerVariants({ tone: markerTone })} aria-hidden="true">
            <Icon name={markerIcon} size="sm" />
          </span>
        ) : null}
        <div
          ref={ref}
          className={cn(scheduleItemVariants({ variant, padding }), className)}
          {...props}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-caption font-mono text-primary">{time}</p>
              <p className="text-body font-medium text-foreground">{title}</p>
              {speaker ? <p className="text-small text-muted-foreground">{speaker}</p> : null}
            </div>
            {track ? <Badge variant="neutral" className="self-start sm:self-center">{track}</Badge> : null}
          </div>
        </div>
      </div>
    );
  },
);
ScheduleItem.displayName = "ScheduleItem";

export const scheduleHeaderVariants = cva("relative z-10 flex items-start gap-4");

export interface ScheduleHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scheduleHeaderVariants> {
  icon: IconName;
  title: string;
  subtext?: string;
}

export const ScheduleHeader = React.forwardRef<HTMLDivElement, ScheduleHeaderProps>(
  ({ className, icon, title, subtext, ...props }, ref) => (
    <div ref={ref} className={cn(scheduleHeaderVariants(), className)} {...props}>
      <span
        className={cn(
          featureMedallionVariants({ tone: "gradient", size: "md" }),
          "ring-4 ring-dark-section",
        )}
      >
        <Icon name={icon} size="md" />
      </span>
      <div className="min-w-0 flex-1 pt-1">
        <h3 className="text-h3 text-current">{title}</h3>
        {subtext ? <p className="mt-1 text-small text-current opacity-70">{subtext}</p> : null}
      </div>
    </div>
  ),
);
ScheduleHeader.displayName = "ScheduleHeader";

export const scheduleCategoryVariants = cva("relative flex flex-col gap-6 pb-16 last:pb-0");

export interface ScheduleCategoryProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof scheduleCategoryVariants> {
  /** Sets one consistent solid marker colour for every marked item in this category. */
  markerTone?: ScheduleMarkerTone;
}

export const ScheduleCategory = React.forwardRef<HTMLElement, ScheduleCategoryProps>(
  ({ className, markerTone = "primary", children, ...props }, ref) => (
    <ScheduleMarkerToneContext.Provider value={markerTone}>
      <section ref={ref} className={cn(scheduleCategoryVariants(), className)} {...props}>
        {children}
      </section>
    </ScheduleMarkerToneContext.Provider>
  ),
);
ScheduleCategory.displayName = "ScheduleCategory";

export const scheduleVariants = cva("relative isolate overflow-hidden rounded-lg px-4 py-8 sm:px-6", {
  variants: {
    surface: {
      dark: "bg-dark-section text-dark-section-foreground",
      default: "bg-background text-foreground",
    },
  },
  defaultVariants: { surface: "dark" },
});

export interface ScheduleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scheduleVariants> {
  children: React.ReactNode;
}

export const Schedule = React.forwardRef<HTMLDivElement, ScheduleProps>(
  ({ className, children, surface, ...props }, ref) => (
    <div ref={ref} className={cn(scheduleVariants({ surface }), className)} {...props}>
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-10 top-10 z-0 w-1 -translate-x-1/2 bg-gradient-primary opacity-80 sm:left-12"
      />
      <div className="relative z-10">{children}</div>
    </div>
  ),
);
Schedule.displayName = "Schedule";