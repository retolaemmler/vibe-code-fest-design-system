import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Badge } from "./badge";
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
  "absolute left-6 z-20 flex size-10 -translate-x-1/2 items-center justify-center rounded-pill shadow-raised ring-4 ring-dark-section",
  {
    variants: {
      tone: {
        primary: "bg-primary text-primary-foreground",
        accent: "bg-accent text-accent-foreground",
        info: "bg-info text-info-foreground",
        success: "bg-success text-success-foreground",
        warning: "bg-warning text-warning-foreground",
      },
      position: {
        center: "top-1/2 -translate-y-1/2",
        end: "bottom-0",
      },
    },
    defaultVariants: { tone: "primary", position: "center" },
  },
);

type ScheduleMarkerTone = NonNullable<VariantProps<typeof scheduleMarkerVariants>["tone"]>;
const ScheduleMarkerToneContext = React.createContext<ScheduleMarkerTone>("primary");

export const scheduleLineVariants = cva(
  "absolute -bottom-6 left-6 top-6 z-0 w-1 -translate-x-1/2",
  {
    variants: {
      tone: {
        primary: "bg-primary",
        accent: "bg-accent",
        info: "bg-info",
        success: "bg-success",
        warning: "bg-warning",
      },
    },
    defaultVariants: { tone: "primary" },
  },
);

export const scheduleHeaderMedallionVariants = cva(
  "flex size-12 shrink-0 items-center justify-center rounded-pill text-primary-foreground shadow-raised ring-4 ring-dark-section",
  {
    variants: {
      transition: {
        primaryAccent: "bg-gradient-primary-accent",
        accentInfo: "bg-gradient-accent-info",
        infoSuccess: "bg-gradient-info-success",
        successWarning: "bg-gradient-success-warning",
      },
    },
    defaultVariants: { transition: "primaryAccent" },
  },
);

type ScheduleHeaderTransition = NonNullable<
  VariantProps<typeof scheduleHeaderMedallionVariants>["transition"]
>;
const ScheduleHeaderTransitionContext = React.createContext<ScheduleHeaderTransition>("primaryAccent");

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
    const isLast = (props as Record<string, unknown>)["data-schedule-last"] === "true";
    return (
      <div className="relative">
        {markerIcon ? (
          <span
            className={scheduleMarkerVariants({ tone: markerTone, position: isLast ? "end" : "center" })}
            aria-hidden="true"
          >
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
              <p className="text-small font-mono font-semibold text-primary">{time}</p>
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
  ({ className, icon, title, subtext, ...props }, ref) => {
    const transition = React.useContext(ScheduleHeaderTransitionContext);
    return (
      <div ref={ref} className={cn(scheduleHeaderVariants(), className)} {...props}>
        <span className={scheduleHeaderMedallionVariants({ transition })}>
          <Icon name={icon} size="md" />
        </span>
        <div className="min-w-0 flex-1 pt-1">
          <h3 className="text-h3 text-current">{title}</h3>
          {subtext ? <p className="mt-1 text-small text-current opacity-70">{subtext}</p> : null}
        </div>
      </div>
    );
  },
);
ScheduleHeader.displayName = "ScheduleHeader";

export const scheduleCategoryVariants = cva(
  "relative flex flex-col gap-6 pb-16 last:pb-0 last:[&>[data-schedule-line]]:bottom-0",
);

export interface ScheduleCategoryProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof scheduleCategoryVariants> {
  /** Sets one consistent solid colour for this category's spine and marked items. */
  markerTone?: ScheduleMarkerTone;
  /** Blends the line colour above the header into this category's line colour below it. */
  headerTransition?: ScheduleHeaderTransition;
}

export const ScheduleCategory = React.forwardRef<HTMLElement, ScheduleCategoryProps>(
  ({ className, markerTone = "primary", headerTransition = "primaryAccent", children, ...props }, ref) => (
    <ScheduleMarkerToneContext.Provider value={markerTone}>
      <ScheduleHeaderTransitionContext.Provider value={headerTransition}>
        <section ref={ref} className={cn(scheduleCategoryVariants(), className)} {...props}>
          <span
            aria-hidden="true"
            data-schedule-line
            className={scheduleLineVariants({ tone: markerTone })}
          />
          {children}
        </section>
      </ScheduleHeaderTransitionContext.Provider>
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

function isScheduleItemElement(node: React.ReactNode): node is React.ReactElement<ScheduleItemProps> {
  return React.isValidElement(node) && node.type === ScheduleItem;
}

function findLastMarkedItemPath(
  nodes: React.ReactNode,
  path: number[] = [],
): number[] | null {
  const arr = React.Children.toArray(nodes);
  let result: number[] | null = null;
  arr.forEach((child, index) => {
    if (!React.isValidElement<{ children?: React.ReactNode }>(child)) return;
    const childPath = [...path, index];
    if (isScheduleItemElement(child) && child.props.markerIcon) {
      result = childPath;
    }
    const nested = findLastMarkedItemPath(child.props.children, childPath);
    if (nested) result = nested;
  });
  return result;
}

function cloneWithLastMarker(nodes: React.ReactNode, targetPath: number[], depth = 0): React.ReactNode {
  const arr = React.Children.toArray(nodes);
  return arr.map((child, index) => {
    if (!React.isValidElement<{ children?: React.ReactNode }>(child)) return child;
    if (depth === targetPath.length - 1 && index === targetPath[depth]) {
      return React.cloneElement(child, { "data-schedule-last": "true" } as Record<string, unknown>);
    }
    if (depth < targetPath.length - 1 && index === targetPath[depth]) {
      return React.cloneElement(child, {
        children: cloneWithLastMarker(child.props.children, targetPath, depth + 1),
      } as Record<string, unknown>);
    }
    return child;
  });
}

export const Schedule = React.forwardRef<HTMLDivElement, ScheduleProps>(
  ({ className, children, surface, ...props }, ref) => {
    const lastMarkedPath = React.useMemo(() => findLastMarkedItemPath(children), [children]);
    const timelineChildren = lastMarkedPath
      ? cloneWithLastMarker(children, lastMarkedPath)
      : children;
    return (
      <div ref={ref} className={cn(scheduleVariants({ surface }), className)} {...props}>
        <div className="relative z-10">{timelineChildren}</div>
      </div>
    );
  },
);
Schedule.displayName = "Schedule";