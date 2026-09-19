# Meme images

Drop `<code>.jpg` (or `.png` / `.webp`) here and `src/components/CodeImage.astro`
picks it up automatically via `import.meta.glob` — no registration step. Astro's
asset pipeline hashes and optimizes it on build.

Anything missing renders an inline SVG placeholder instead (code number + title
on the theme). The site is complete and shippable with zero images here.

**Rights:** this is a public site. Use images you made, commissioned, or that are
explicitly licensed for reuse. Most meme images floating around are someone's
copyrighted photo or screenshot — a Know Your Meme link in the `source` field is
safer than hotlinking the picture.
