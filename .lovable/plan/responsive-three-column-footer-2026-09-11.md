# Responsive three-column footer

## What will change
- Rework the shared Footer into a structured layout with brand information on the left, three link columns in the middle, and a newsletter action on the right.
- Give each link column a heading and exactly two links in the showcase examples.
- Use the existing gradient Button for the newsletter action and the existing Link component for navigation.
- Preserve the current footer surface variants and allow consumers to provide their own brand, column labels, links, newsletter label, and destination/action.

## Responsive behavior
- Mobile: stack brand, link columns, and newsletter action vertically; keep the three link groups in a compact responsive grid.
- Tablet: keep link groups together without squeezing labels or controls.
- Desktop: use stable grid tracks for left brand, center links, and right newsletter action.
- Ensure text containers can shrink safely and the button remains fully visible.

## Documentation and verification
- Update the landing showcase and `/style-guide` footer examples to demonstrate the complete pattern.
- Keep the barrel export current and update the Footer catalog enrichment for the expanded API.
- Verify type safety and inspect the footer at mobile, tablet, and desktop widths, including focus and overflow behavior.
