import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import { Text } from "./typography";

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
