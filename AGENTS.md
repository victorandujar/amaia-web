# AGENTS.md — Engineering standards (mandatory)

These rules are **non-negotiable** for every human or AI agent working on this repository.
If a rule here conflicts with a request, stop and ask before breaking it.

## 0. Project

- Marketing website for **Amaïa**, built from the "Amaïa · home" design canvas.
- Pages: Home (`/`), Studio, Rituals, Sobre mí.
- **Fidelity rule:** layout, colors, typography, spacing and copy must match the design exactly.
  Copy is transcribed literally — never rewritten, translated, shortened or "improved".
  If something in the design is ambiguous or missing (e.g. mobile layout, link targets, form behavior), ask; do not invent.

## Commands

| Command                | Purpose                                         |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | Local dev server                                |
| `npm run check`        | Astro + TypeScript diagnostics                  |
| `npm run lint`         | ESLint (also blocks `any`, `style=`, `<style>`) |
| `npm run format`       | Prettier (sorts Tailwind classes)               |
| `npm run format:check` | Prettier in check mode                          |
| `npm run build`        | Type check + production build                   |

Node >= 22.12 (`.nvmrc`). TypeScript uses `astro/tsconfigs/strictest`.

## 1. Mindset

Act as a senior software architect and senior frontend engineer. Priorities, in order:

1. Correctness
2. Simplicity (KISS) — the smallest implementation that correctly solves the problem
3. Readability over cleverness
4. Maintainability
5. Consistency with the existing codebase
6. Scalability only when justified by real requirements
7. Performance without premature optimization
8. Reusability only when it genuinely reduces complexity

Accessibility and type safety are defaults, not extras.
Think before coding: read the existing code, find the right place, reuse existing patterns.

## 2. Principles

- **SOLID**, applied pragmatically:
  - SRP: one clear responsibility per component/module/function. No mixing data fetching, transformation and large rendering in one component.
  - OCP: prefer composition and configuration over growing conditionals.
  - LSP: abstractions respect their contracts; no surprising behavior.
  - ISP: focused props and types; pass only what is needed.
  - DIP: keep domain logic independent from UI/infrastructure when it solves a real coupling problem.
- **DRY:** one source of truth for logic, constants, content and UI patterns. Do not abstract things that are only superficially similar.
- **KISS:** no unnecessary patterns, layers, factories, wrappers, generics or indirection.
- **YAGNI:** build only what is requested. No speculative configuration, providers or plugin systems.

## 3. Stack (strict)

- **Astro** (static by default) · **TypeScript (strict)** · **Tailwind CSS** · semantic HTML.
- Astro components are the default. **No React/Vue/Svelte** without a concrete, approved requirement.
- Islands only for real interactivity, with the lightest directive that works:
  `client:visible` / `client:idle` / `client:media` before `client:load`.
- Never use client JS for what HTML, CSS utilities or Astro can do.
- Do not upgrade, migrate or replace technologies without approval.

## 4. Styling — Tailwind only (strict)

**Forbidden:**

- Component `.css`, `.scss`, `.sass` files, CSS modules, CSS-in-JS, styled-components/Emotion.
- `style="…"` attributes and `<style>` blocks in components.
- Hand-written selectors, overrides, media queries or keyframes.

**The single allowed stylesheet** is `src/styles/global.css`, and it may only contain:

- `@import "tailwindcss";`
- `@theme { … }` design tokens (colors, fonts, font sizes, spacing, radii, breakpoints, animations) taken from the design.
- Tailwind directives (`@utility`, `@custom-variant`) **only** when a design requirement cannot be met otherwise — ask first.

**Rules:**

- Design values live as tokens in `@theme`; components use token utilities (`bg-ink`, `font-display`, `text-hero`), not repeated arbitrary values (`text-[#1a1a1a]`, `mt-[37px]`).
- Arbitrary values are allowed only for genuinely one-off values; if a value repeats, it becomes a token.
- Mobile-first: base classes for small screens, `md:` / `lg:` / `xl:` to scale up.
- Repeated class patterns become a component, not a custom CSS class.
- Conditional classes: template literals or Astro `class:list`. No new class-management libraries unless justified.

## 5. TypeScript

- `strict` mode. **`any` is forbidden.** Use `unknown` and narrow it.
- Type component `Props`, public function signatures, content/config objects and external data.
- Avoid `as` and `!`; if one is required, a comment must explain why it is safe.
- Types live next to the code that owns them; shared domain types go in `*.types.ts` files. No global dumping-ground type files.
- Use inference where it is clear; don't add noisy annotations.

## 6. Architecture

Project structure:

```
src/
├── assets/          # images and brand files, processed by astro:assets
├── components/
│   ├── layout/      # Grid, SiteHeader, SiteFooter
│   └── ui/          # small reusable primitives (Button, SectionLabel, RichText, …)
├── features/<page>/ # one folder per page: its sections, its copy (<page>.content.ts) and the page component
├── i18n/            # locales, routes per locale, shared UI strings
├── layouts/         # BaseLayout.astro (head, fonts, reveal observer)
├── lib/             # cross-cutting modules: links, motion, typography class sets
├── pages/           # thin route files: `/` (es) and `/en/` (en)
└── styles/global.css
```

- **i18n:** Spanish is the default locale (no prefix), English lives under `/en/`. Every copy lives in a typed `Localized<T>` object; components never hardcode text.
- **Links** whose destination is still open live in `src/lib/links.ts` only.
- **Motion:** use the `reveal` / `materia` class sets from `src/lib/motion.ts` together with the `data-reveal` attribute. Never write keyframes or custom CSS for animations.

- **Pages orchestrate**; they don't contain large markup or logic.
- **Layouts** own shared structure (head, metadata, header, footer). Never duplicate them.
- **Components:** one responsibility, typed props, semantic HTML, reasonably small. No wrappers that only forward props.
- Shared data (navigation links, social links, contact) lives in one typed module — single source of truth.
- Descriptive, domain-oriented names. Forbidden folder/file names: `misc`, `stuff`, `helpers`, `manager`, `common`, `data`, `base`, `general`.
- Naming: components `PascalCase.astro`; functions/variables `camelCase`; types `PascalCase`; constants follow their role.
- No circular dependencies; dependencies flow pages → layouts/components → lib/content.

## 7. Code quality

- Functions: single responsibility, short, early returns, descriptive names (`formatDate`, not `process`).
- Errors: never swallow them; no empty `catch`; never expose internal details to users.
- State: local first; no global state unless several independent components truly need it.
- Comments explain _why_, never _what_.
- No dead code, unused imports/variables/dependencies, `console.log` left behind or commented-out code.

## 8. Performance

- Static output by default; ship as little JS as possible.
- Images through `astro:assets` (`<Image>` / `<Picture>`), with explicit dimensions, modern formats and `loading="lazy"` below the fold. The hero/LCP image is eager with `fetchpriority="high"`.
- Fonts self-hosted, subset, `font-display: swap`, preload only the critical ones.
- No dependency for trivial functionality.

## 9. Accessibility (WCAG 2.2 AA)

- Semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1` per page, no skipped heading levels.
- `<a href>` for navigation, `<button>` for actions. Never interactive `div`/`span`.
- Meaningful `alt` text; `alt=""` for decorative images. Decorative SVG gets `aria-hidden="true"`.
- Visible `focus-visible` styles on every interactive element; full keyboard navigation.
- Text contrast ≥ 4.5:1 (3:1 for large text).
- Respect `prefers-reduced-motion` (`motion-safe:` / `motion-reduce:` utilities).
- Correct `lang` on `<html>`; labelled form controls; ARIA only when native semantics are insufficient.

## 10. Security

- No secrets in the repo; environment variables only, never exposed to the client unless `PUBLIC_`.
- No `set:html` with untrusted content. Validate any external input on the server.
- External links that open in a new tab use `rel="noopener noreferrer"`.

## 11. Dependencies

Before adding one, check: does the project or Astro already do it? Is a few lines enough? Maintenance, bundle size, security?
Justify every new dependency in the PR description.

## 12. Git workflow (mandatory)

```
main  ← production, release PRs from dev only
 └── dev  ← integration; base for all feature branches
      └── feature/<kebab-case-name>
```

- Every task starts from the latest `dev`:
  `git checkout dev && git pull origin dev && git checkout -b feature/<name>`
- Never commit directly to `main` or `dev`. Never branch from `main`.
- One feature per branch; no unrelated changes.
- Conventional commits: `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`, `test:`.
- PRs: `feature/* → dev` only. Release: `dev → main`.
- PR description: what changed, key decisions, breaking changes, checks run.
- Agents never merge PRs, force-push, `reset --hard`, delete branches or discard changes without explicit authorization.
- Agents push branches or open PRs only when explicitly asked.
- Before any git operation: check current branch, working tree and existing changes.

## 13. Workflow for every task

1. **Understand:** read the relevant files, conventions, current branch and working tree.
2. **Evaluate:** simplest correct implementation, what to reuse, impact on a11y and performance. For complex tasks, share a short plan first.
3. **Branch:** confirm you are on the right `feature/*` branch.
4. **Implement:** the smallest clean solution; no unrelated refactors.
5. **Review:** simplest solution? every abstraction justified? duplication? any custom CSS or inline style? any `any`? accessible? unrelated files touched?
6. **Validate:** run the scripts that exist (`npm run check`, `npm run lint`, `npm run format:check`, `npm run build`, `npm test`). Fix what you introduced; report pre-existing or environment failures separately. Never claim a check passed without running it.
7. **Report:** what was done, main files, decisions, checks executed with results, open issues, branch used.

## 14. Definition of done

- Matches the design and copy exactly.
- Follows this document: Astro-first, strict TypeScript, Tailwind-only styling, no custom CSS or inline styles.
- Accessible, performant, no unused code or dependencies.
- `check`, `lint` and `build` pass, and the results have actually been run and reported.
- Work lives on a `feature/*` branch targeting `dev`.
