import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { Avatar } from "./avatar";
import { Badge } from "./badge";
import { Button } from "./button";
import { Icon, type IconName } from "./icon";

export interface ScheduleItemAvatar {
  src?: string;
  /** Describes the person; also used for the image alt text. */
  name: string;
}

export const scheduleItemVariants = cva(
  "ml-16 rounded-card text-card-foreground shadow-raised",
  {
    variants: {
      tone: {
        primary: "bg-primary-subtle",
        accent: "bg-accent-subtle",
        info: "bg-info-subtle",
        success: "bg-success-subtle",
        warning: "bg-warning-subtle",
        violet: "bg-violet-subtle",
      },
      padding: { sm: "p-4", md: "p-5" },
    },
    defaultVariants: { tone: "primary", padding: "md" },
  },
);

/* Hover darkens each card with its own section hue — a neutral overlay reads
   muddy over the tinted subtle backgrounds. */
export const scheduleHoverOverlayVariants = cva("", {
  variants: {
    tone: {
      primary: "hover:bg-primary/15",
      accent: "hover:bg-accent/15",
      info: "hover:bg-info/15",
      success: "hover:bg-success/15",
      warning: "hover:bg-warning/15",
      violet: "hover:bg-violet/15",
    },
  },
  defaultVariants: { tone: "primary" },
});

export const scheduleMarkerVariants = cva(
  "absolute left-6 z-20 flex -translate-x-1/2 items-center justify-center rounded-pill shadow-raised ring-4",
  {
    variants: {
      tone: {
        primary: "bg-primary text-primary-foreground ring-primary",
        accent: "bg-accent text-accent-foreground ring-accent",
        info: "bg-info text-info-foreground ring-info",
        success: "bg-success text-success-foreground ring-success",
        warning: "bg-warning text-warning-foreground ring-warning",
        violet: "bg-violet text-violet-foreground ring-violet",
      },
      position: {
        titleSm: "top-14 -translate-y-1/2",
        titleMd: "top-16 -translate-y-1/2",
        end: "bottom-7 sm:bottom-3",
      },
      size: {
        icon: "size-10",
        avatar: "size-14",
      },
    },
    defaultVariants: { tone: "primary", position: "titleMd", size: "icon" },
  },
);

export type ScheduleMarkerTone = NonNullable<VariantProps<typeof scheduleMarkerVariants>["tone"]>;
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
        violet: "bg-violet",
      },
    },
    defaultVariants: { tone: "primary" },
  },
);

export const scheduleTimeVariants = cva("text-h3 font-mono", {
  variants: {
    tone: {
      primary: "text-schedule-time-primary",
      accent: "text-schedule-time-accent",
      info: "text-schedule-time-info",
      success: "text-schedule-time-success",
      warning: "text-schedule-time-warning",
      violet: "text-schedule-time-violet",
    },
  },
  defaultVariants: { tone: "primary" },
});

export const scheduleHeaderMedallionVariants = cva(
  "flex size-12 shrink-0 items-center justify-center rounded-pill text-primary-foreground shadow-raised ring-4 ring-background",
  {
    variants: {
      transition: {
        primaryAccent: "bg-gradient-primary-accent",
        accentInfo: "bg-gradient-accent-info",
        infoSuccess: "bg-gradient-info-success",
        successWarning: "bg-gradient-success-warning",
        infoViolet: "bg-gradient-info-violet",
        violetWarning: "bg-gradient-violet-warning",
      },
    },
    defaultVariants: { transition: "primaryAccent" },
  },
);

export type ScheduleHeaderTransition = NonNullable<
  VariantProps<typeof scheduleHeaderMedallionVariants>["transition"]
>;
const ScheduleHeaderTransitionContext = React.createContext<ScheduleHeaderTransition>("primaryAccent");

export interface ScheduleItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scheduleItemVariants> {
  time: string;
  title: string;
  speaker?: string;
  /** Optional URL for the speaker's LinkedIn profile; shown beside their name. */
  linkedinHref?: string;
  /** When provided, the whole card can be expanded to reveal these talk details. */
  description?: string;
  track?: string;
  /** Adds a solid circular icon node. Omit it for breaks, lunch, and passive moments. */
  markerIcon?: IconName;
  /** Replaces the icon marker with a speaker avatar (size="md"). */
  avatar?: ScheduleItemAvatar;
}

export const ScheduleItem = React.forwardRef<HTMLDivElement, ScheduleItemProps>(
  ({ className, tone, padding, time, title, speaker, linkedinHref, description, track, markerIcon, avatar, ...props }, ref) => {
    const categoryTone = React.useContext(ScheduleMarkerToneContext);
    const [expanded, setExpanded] = React.useState(false);
    const descriptionId = React.useId();
    const isLast = (props as Record<string, unknown>)["data-schedule-last"] === "true";
    const hasMarker = markerIcon || avatar;
    return (
      <div className="relative">
        {hasMarker ? (
          <span
            className={scheduleMarkerVariants({
              tone: tone ?? categoryTone,
              position: isLast ? "end" : padding === "sm" ? "titleSm" : "titleMd",
              size: avatar ? "avatar" : "icon",
            })}
            aria-hidden="true"
          >
            {avatar ? (
              <Avatar size="md" src={avatar.src} name={avatar.name} />
            ) : markerIcon ? (
              <Icon name={markerIcon} size="sm" />
            ) : null}
          </span>
        ) : null}
        <div
          ref={ref}
          className={cn(scheduleItemVariants({ tone: tone ?? categoryTone, padding }), "relative", className)}
          {...props}
        >
          {description ? (
            <Button
              variant="ghost"
              size="icon"
              className="absolute inset-0 z-10 h-full w-full items-start justify-end rounded-card p-4 hover:bg-foreground/5 sm:p-5 [&_svg]:size-6"
              aria-label={`${expanded ? "Hide" : "Show"} details for ${title}`}
              aria-expanded={expanded}
              aria-controls={descriptionId}
              onClick={() => setExpanded((current) => !current)}
            >
              <Icon name="chevronDown" size="lg" tone="brand" className={cn("transition-transform duration-(--duration-base) motion-reduce:transition-none", expanded && "rotate-180")} />
            </Button>
          ) : null}
          <div className={cn("flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", description && "pr-8")}>
            <div className="min-w-0 flex-1">
              <p className={scheduleTimeVariants({ tone: tone ?? categoryTone })}>{time}</p>
              <p className="text-body font-semibold text-foreground md:text-h3">{title}</p>
              {speaker ? (
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="mt-1 text-small leading-none text-muted-foreground">{speaker}</span>
                  {linkedinHref ? (
                    <Button asChild variant="ghost" size="sm" className="relative z-20 size-6 p-0" iconStart="linkedin">
                      <a href={linkedinHref} target="_blank" rel="noopener noreferrer" aria-label={`${speaker} on LinkedIn`} title={`${speaker} on LinkedIn`} />
                    </Button>
                  ) : null}
                </div>
              ) : null}
            </div>
            {track ? <Badge variant="neutral" className="self-start sm:self-center">{track}</Badge> : null}
          </div>
          {description ? (
            <div id={descriptionId} hidden={!expanded} className="mt-4 border-t border-border pt-4 text-body text-foreground">
              {description}
            </div>
          ) : null}
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
  "relative flex flex-col gap-6 pb-16 last:pb-0 last:[&>[data-schedule-line]]:bottom-12 sm:last:[&>[data-schedule-line]]:bottom-8",
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

export const scheduleVariants = cva("relative isolate py-8");

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
    if (isScheduleItemElement(child) && (child.props.markerIcon || child.props.avatar)) {
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
  ({ className, children, ...props }, ref) => {
    const lastMarkedPath = React.useMemo(() => findLastMarkedItemPath(children), [children]);
    const timelineChildren = lastMarkedPath
      ? cloneWithLastMarker(children, lastMarkedPath)
      : children;
    return (
      <div ref={ref} className={cn(scheduleVariants(), className)} {...props}>
        <div className="relative z-10">{timelineChildren}</div>
      </div>
    );
  },
);
Schedule.displayName = "Schedule";
