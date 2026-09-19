# http.meme

Every HTTP status code, matched to the meme it actually is.

`500` is This Is Fine. `409` is two Spider-Men pointing. `418` is the original
shitpost. 31 codes, one page each.

Static Astro site. No JS ships to the browser.

## Commands

All commands run from the root of the project:

| Command        | Action                                     |
| :------------- | :----------------------------------------- |
| `pnpm install` | Install dependencies                       |
| `pnpm dev`     | Dev server at `localhost:4321`             |
| `pnpm build`   | Build to `./dist/`                         |
| `pnpm preview` | Preview the build before deploying         |

## Adding a code

One entry in `src/data/status.ts`:

```ts
{
  code: 451,
  title: "Unavailable For Legal Reasons",
  memeName: "Not Available In Your Country",
  desc: "The joke.",
  usage: "What it actually means.",
  source: "https://knowyourmeme.com/..."   // optional
}
```

The index grid and the `/status/<code>` page both build themselves from that
array. No route to register.

## Adding an image

Drop `<code>.jpg` (or `.png` / `.webp`) into `src/assets/code/`. That is the
whole step — `CodeImage.astro` finds it with `import.meta.glob`, and Astro
hashes and optimizes it on build.

Codes with no image render an inline SVG placeholder, so the site is complete
and deployable with zero images. See `src/assets/code/README.md` before adding
any — most meme images are someone's copyrighted photo.
