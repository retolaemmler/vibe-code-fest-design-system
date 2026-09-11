import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * The named type-scale utilities (text-display … text-caption) and the
 * gradient text utility are custom, so tailwind-merge is told which group each
 * belongs to — otherwise it treats them as text colours and drops one.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: ["display", "h1", "h2", "h3", "body", "small", "caption"],
        },
      ],
      "text-color": ["text-gradient-primary"],
    },
  },
});

/** Merge conditional class names, with Tailwind conflict resolution. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
