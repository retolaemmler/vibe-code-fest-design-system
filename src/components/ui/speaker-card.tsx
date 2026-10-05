import * as React from "react";

import { cn } from "../../lib/utils";
import { Avatar } from "./avatar";
import { Badge } from "./badge";
import { Card, type CardProps } from "./card";
import { LinkedInBubble } from "./linkedin-bubble";
import { Heading, Text } from "./typography";

export interface SpeakerCardProps extends Omit<CardProps, "children"> {
  name: string;
  role?: string;
  company?: string;
  photoUrl?: string;
  topics?: string[];
  /** Optional LinkedIn profile URL. When provided, a bubble icon button is placed on the avatar. */
  linkedinHref?: string;
  /** Optional bottom action, typically a Button with variant="secondary". */
  action?: React.ReactNode;
  /** Optional icon-only action pinned to the card's top-right corner, e.g. an edit button. */
  cornerAction?: React.ReactNode;
}

export const SpeakerCard = React.forwardRef<HTMLDivElement, SpeakerCardProps>(
  (
    {
      className,
      name,
      role,
      company,
      photoUrl,
      topics,
      linkedinHref,
      action,
      variant = "outline",
      ...props
    },
    ref,
  ) => (
    <Card
      ref={ref}
      variant={variant}
      className={cn(
        "flex flex-col gap-4",
        variant === "plain" ? "items-center" : "items-start",
        className,
      )}
      {...props}
    >
      <div className={cn("relative", variant === "plain" ? "self-center" : "self-start")}>
        <Avatar name={name} src={photoUrl} size="xl" shape="circle" ring="gradient" />
        {linkedinHref && <LinkedInBubble href={linkedinHref} name={name} placement="avatar" />}
      </div>
      <div
        className={cn(
          "flex flex-col gap-1",
          variant === "plain" && "items-center text-center",
        )}
      >
        <Heading as="h3" level="h3">
          {name}
        </Heading>
        {(role || company) && (
          <Text size="small" tone="muted">
            {[role, company].filter(Boolean).join(" · ")}
          </Text>
        )}
      </div>
      {topics && topics.length > 0 && (
        <div
          className={cn(
            "flex flex-wrap gap-2",
            variant === "plain" && "justify-center",
          )}
        >
          {topics.map((topic) => (
            <Badge key={topic} variant="brand">
              {topic}
            </Badge>
          ))}
        </div>
      )}
      {action && (
        <div
          className={cn(
            "mt-auto pt-2",
            variant === "plain" && "self-center",
          )}
        >
          {action}
        </div>
      )}
    </Card>
  ),
);
SpeakerCard.displayName = "SpeakerCard";
