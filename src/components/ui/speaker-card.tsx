import * as React from "react";

import { cn } from "@/lib/utils";
import { Avatar } from "./avatar";
import { Badge } from "./badge";
import { Card, type CardProps } from "./card";
import { Heading, Text } from "./typography";

export interface SpeakerCardProps extends Omit<CardProps, "children"> {
  name: string;
  role?: string;
  company?: string;
  photoUrl?: string;
  topics?: string[];
}

export const SpeakerCard = React.forwardRef<HTMLDivElement, SpeakerCardProps>(
  (
    { className, name, role, company, photoUrl, topics, variant = "outline", ...props },
    ref,
  ) => (
    <Card
      ref={ref}
      variant={variant}
      className={cn("flex flex-col items-start gap-4", className)}
      {...props}
    >
      <Avatar name={name} src={photoUrl} size="lg" shape="rounded" />
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
    </Card>
  ),
);
SpeakerCard.displayName = "SpeakerCard";
