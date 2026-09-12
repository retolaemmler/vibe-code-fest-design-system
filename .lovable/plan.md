# Sponsor card component

## What will be built

- Add a reusable `SponsorCard` that presents a sponsor logo with a stable, responsive logo area.
- Provide two named variants: `default` for the standard bordered card and `highlight` for prominent sponsors with brand emphasis and elevated shadow.
- Support accessible logo alt text, optional sponsor name, optional website linking, forwarded refs, and layout-only `className` merging.
- Copy the supplied ATOLL logo unchanged into the design-system logo assets and use it in the preview examples.
- Export the component through the library barrel and show both variants on the landing preview and style guide.

## Technical details

- Build variants with `cva()` and use only existing semantic color, radius, and elevation tokens.
- Use a semantic anchor when `href` is provided, including keyboard focus and hover states; otherwise render a non-interactive card.
- Keep the uploaded logo proportional with `object-contain` so it is never cropped or stretched.
- Add component usage, example, and anti-pattern guidance to the design-system schema enrichment.
- Verify type safety and responsive rendering for both variants.
