import * as React from "react";

import { cn } from "@/lib/utils";
import { Avatar } from "./avatar";
import { Badge } from "./badge";
import { Button } from "./button";
import { Card, type CardProps } from "./card";
import { Icon } from "./icon";
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
      className={cn("flex flex-col items-start gap-4", className)}
      {...props}
    >
      <div className="relative self-start">
        <Avatar name={name} src={photoUrl} size="lg" shape="circle" />
        {linkedinHref && (
          <Button
            variant="secondary"
            size="icon"
            asChild
            className="absolute -bottom-1 -right-1 size-8 rounded-full border-2 border-card shadow-raised transition-shadow duration-(--duration-fast) ease-(--ease-standard) hover:shadow-lifted"
            aria-label={`${name} on LinkedIn`}
          >
            <a href={linkedinHref} target="_blank" rel="noopener noreferrer">
              <Icon name="linkedin" size="sm" />
            </a>
          </Button>
        )}
      </div>
      <div className="flex flex-col gap-1">
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
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <Badge key={topic} variant="brand">
              {topic}
            </Badge>
          ))}
        </div>
      )}
      {action && <div className="mt-auto pt-2">{action}</div>}
    </Card>
  ),
);
SpeakerCard.displayName = "SpeakerCard";
