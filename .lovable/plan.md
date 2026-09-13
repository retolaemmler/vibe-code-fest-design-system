# Section-colored schedule timeline

## Goal
Make each timeline category own a distinct solid spine color, with its header circle visually blending that category color into the next category color.

## Changes
- Replace the single full-height gradient spine with one connected spine segment per `ScheduleCategory`.
- Give `ScheduleCategory` a required visual tone for its line and solid item markers, plus a next tone for the header transition.
- Render each `ScheduleHeader` circle with a token-backed two-color gradient from the category tone to the following category tone.
- Keep unmarked breaks and lunch rows unchanged, and preserve the final marker alignment at the timeline edge.
- Update the showcase and style guide to demonstrate the four-color flow: accent → info → success → warning → primary.
- Update the component schema documentation and roadmap for the revised public API.

## Technical details
- Use only existing semantic color tokens and Tailwind/CVA variants; no raw color values or one-off inline styles.
- Keep marker colors inherited from the category so every marked item in a section stays consistent.
- Preserve responsive alignment, ref forwarding, typed props, the shared Icon registry, and the dark-section ring treatment.
- Verify desktop and mobile timelines for connected segments, correct header gradients, final-marker alignment, overflow, and console errors.
