# Four-category schedule timeline

## Goal
Replace the current card-style schedule with a reusable timeline based on the Daryna VCF Playground pattern and the supplied reference.

## Changes
- Rework `Schedule` into the timeline container with a continuous vertical gradient line and a dark-section presentation option.
- Rework `ScheduleHeader` into a category header with a fixed circular gradient icon, heading, and supporting text.
- Rework `ScheduleItem` into a glassy schedule row positioned beside the timeline.
- Add an optional solid timeline marker to `ScheduleItem`; omit it for breaks, lunch, and other passive moments.
- Add a `ScheduleCategory` composition component so each category groups its header and items consistently.
- Showcase four categories with responsive examples on both the main preview and style guide.
- Update the barrel export and component schema documentation for every changed or added public component.

## Technical details
- Preserve semantic tokens, the shared Icon registry, `cn()`, typed props, ref forwarding, and CVA variants.
- Use only existing gradient, glass, dark-section, radius, shadow, motion, and status tokens.
- Keep the timeline aligned on mobile and desktop, with non-shrinking circular markers and no horizontal overflow.
- Verify the light/dark style-guide views and mobile/desktop layouts in the browser.
