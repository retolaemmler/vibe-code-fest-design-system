import * as React from "react";

import { cn } from "../../lib/utils";
import { Card, CardDescription, CardTitle } from "./card";
import { Button } from "./button";

export interface CtaPanelProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: string;
  description?: string;
  /** Label of the primary action. */
  actionLabel: string;
  /** When set, the action renders as a link. */
  actionHref?: string;
  onAction?: () => void;
  /** Optional photo rendered as a circle on the left side of the panel. */
  image?: {
    src: string;
    alt: string;
  };
}

/**
 * Full-bleed gradient panel for the closing action on a page.
 * All content — photo, title, description and action — is centred.
 * Pass `image` to show a circular photo above the content.
 */
export const CtaPanel = React.forwardRef<HTMLDivElement, CtaPanelProps>(
  (
    {
      className,
      title,
      description,
      actionLabel,
      actionHref,
      onAction,
      image,
      ...props
    },
    ref,
  ) => (
    <Card
      ref={ref}
      variant="gradient"
      padding="lg"
      className={cn(
        "flex flex-col items-center gap-6 text-center",
        className,
      )}
      {...props}
    >
      {image ? (
        <img
          src={image.src}
          alt={image.alt}
          className="size-24 shrink-0 rounded-full object-cover shadow-raised ring-4 ring-primary-foreground/25 md:size-32"
        />
      ) : null}
      <div className="flex flex-col items-center gap-4">
        <CardTitle className="text-h2 text-primary-foreground">{title}</CardTitle>
        {description ? (
          <CardDescription className="text-body text-primary-foreground/85">
            {description}
          </CardDescription>
        ) : null}
        <Button
          variant="muted"
          size="lg"
          asChild={Boolean(actionHref)}
          onClick={onAction}
          className="mt-2"
        >
          {actionHref ? <a href={actionHref}>{actionLabel}</a> : actionLabel}
        </Button>
      </div>
    </Card>
  ),
);
CtaPanel.displayName = "CtaPanel";
