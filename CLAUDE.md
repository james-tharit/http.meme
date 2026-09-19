# Working agreement

Implementation work goes through `/tdd`: one behavior per cycle, one `tdd-worker`
subagent per behavior, test written and watched failing before the code exists.
Config edits, renames and one-liners are done inline — dispatching a subagent to
change a constant costs more than the change.

Ponytail is the default build posture: reuse before writing, stdlib before
dependencies, shortest working diff — after reading the code the change touches,
never instead. Deliberate shortcuts get a `ponytail:` comment naming the ceiling
and the upgrade path; `/ponytail-debt` harvests them later.

Keep the main context for decisions. Test output, file dumps and dead ends stay
in the subagent that produced them. Localize with `caveman-explore` before
dispatching work; run noisy commands through `caveman shrink -- <cmd>` rather
than reading their output in full.

Prose is caveman-terse: no preamble, no tool-call narration, no restating what a
diff already shows. Technical literals — code, paths, symbols, error strings,
numbers — stay exact.

# Repo context

`http.meme` — Astro 5 static site pairing each HTTP status code with the meme it
resembles. English, meme-canon humor, no politics. Sibling project to
`banmueng.error` (same shape, Thai political theme).

## Commands

pnpm only. `pnpm dev` (localhost:4321), `pnpm build` → `dist/`, `pnpm preview`.
No test runner, no linter. `pnpm astro check` prompts to install `@astrojs/check`
on first run.

## Shape

- `src/data/status.ts` — the single source of truth. `StatusCode[]` of
  `{ code, title, memeName, desc, usage, source? }`. Adding a code is one entry;
  `getStaticPaths()` and the index grid both derive from it.
- `src/components/CodeImage.astro` — the only image path. Resolves
  `src/assets/code/<code>.{jpg,jpeg,png,webp}` via `import.meta.glob` and renders
  `<Image>`; falls back to an inline themed SVG when no file exists.
- `src/pages/index.astro` — grid of all codes.
- `src/pages/status/[code].astro` — detail page: meme name, joke, real meaning,
  optional source link.
- `src/layouts/Layout.astro` — shell plus all global CSS (`:root` tokens, Space
  Grotesk, lime-on-near-black). Page-local styles stay in each `.astro`.

## Decisions worth not re-litigating

- **No `/api/[code]` route.** `banmueng.error` serves images through an endpoint
  that reads from disk with `node:fs`; on a static build that emits
  extensionless files whose Content-Type no ordinary host will get right. Here
  images go through `astro:assets` instead, which hashes, optimizes, and emits a
  real extension. Do not reintroduce the route.
- **`sharp` is a direct dependency.** Astro treats it as optional and pnpm does
  not hoist it, so the build fails the moment a real image exists without it.
  The placeholder-only path does not exercise this — adding the first image is
  what breaks. Keep it in `dependencies`.
- **No React.** `@astrojs/react` is installed-but-unused in the sibling repo; it
  is simply absent here. Nothing on these pages needs client JS.
- Image `src` is never absolute. No hardcoded `localhost` anywhere.
