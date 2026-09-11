import * as React from "react";

import { cn } from "@/lib/utils";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface CtaPanelProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: string;
  description?: string;
  /** Label of the primary action. */
  actionLabel: string;
  /** When set, the action renders as a link. */
  actionHref?: string;
  onAction?: () => void;
}

/**
 * Full-bleed gradient panel for the closing action on a page.
 */
export const CtaPanel = React.forwardRef<HTMLDivElement, CtaPanelProps>(
  (
    { className, title, description, actionLabel, actionHref, onAction, ...props },
    ref,
  ) => (
    <Card
      ref={ref}
      variant="gradient"
      padding="lg"
      className={cn("flex flex-col items-start gap-4", className)}
      {...props}
    >
      <CardTitle className="text-h2 text-primary-foreground">{title}</CardTitle>
      {description ? (
        <CardDescription className="text-body text-primary-foreground/85">
          {description}
        </CardDescription>
      ) : null}
      <Button
        variant="inverse"
        size="lg"
        asChild={Boolean(actionHref)}
        onClick={onAction}
        className="mt-2"
      >
        {actionHref ? <a href={actionHref}>{actionLabel}</a> : actionLabel}
      </Button>
    </Card>
  ),
);
CtaPanel.displayName = "CtaPanel";
