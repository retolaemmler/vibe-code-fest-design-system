# Replace outline button with muted variant

## Changes
- Rename the `outline` Button variant to `muted` and remove its border, keeping a quiet token-backed background and clear hover, focus, pressed, and disabled states.
- Switch the call-to-action panel from `secondary` to `muted`.
- Remove all remaining `outline` Button usages from the showcase and style guide, replacing them with context-appropriate existing variants where the surface is not a gradient.
- Document that `muted` is reserved for buttons on gradient backgrounds only.
- Update the component catalog metadata so consumers see the new variant name and usage restriction.

## Verification
- Check that no `variant="outline"` usages remain.
- Run the focused type check.
- Verify the call-to-action panel and button specimens in light and dark modes, including mobile layout.
