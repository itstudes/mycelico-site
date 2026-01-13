# AGENTS.md — AI Coding Guide (Mycelico Website)

This file instructs AI coding tools (Copilot, Cursor, Windsurf, Claude Code, Aider, etc.) how to work in this repository.
Follow these rules exactly. If anything is unclear, ask before making broad or structural changes.

---

## Project overview

- Website for **Mycelico**, a bootstrapped South African company providing plant pathogen testing services for agricultural clients.
- Primary goal: deliver a clean, fast, trustworthy, **SEO-optimised** marketing website that attracts organic traffic.
- Changes should be **minimal, consistent, and intentional**.
- Prefer clarity, correctness, and maintainability over clever abstractions.

---

## Tech stack

- **Next.js v15** (App Router) — `src/app`
- **React v19**
- **TypeScript v5.7**
- **Tailwind CSS v4 (beta)**
- **Motion v12 (beta)**
- **Radix UI**
- UI style originates from a Tremor Blocks template  
  *(Note: Tremor components are **not** used directly in this project.)*

Deployment target: **Vercel**

---

## Local development (Windows)

Preferred terminal: **Windows Terminal** (recommended) or **PowerShell**.  
If script execution is blocked, run the terminal as **Administrator**.

### One-time: allow local scripts in PowerShell

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
````

---

### Install pnpm (via Corepack)

```powershell
corepack enable
corepack prepare pnpm@latest --activate
pnpm -v
```

---

### Install dependencies

```powershell
pnpm install
```

---

### One-time: approve builds (required on Windows)

```powershell
pnpm approve-builds
```

Select **all**, then press **Enter**.

---

### Run the development server

```powershell
pnpm run dev
```

The site should be available at:

```
http://localhost:3000
```

---

## Repo scripts (source of truth)

Use these scripts exactly:

* Development: `pnpm run dev`
* Linting: `pnpm run lint`
* Production build: `pnpm run build`
* Start production server: `pnpm run start`

Before completing meaningful work, ensure:

```bash
pnpm run lint
pnpm run build
```

---

## Formatting & linting rules

### Prettier (required)

This repository uses Prettier with `prettier-plugin-tailwindcss`.

Key configuration:

* `printWidth`: 80
* `singleQuote`: false
* `trailingComma`: all
* `semi`: false
* `endOfLine`: lf
* `tailwindFunctions`: `tv`, `cx`

**Rules for AI tools:**

* Do **not** reformat unrelated files.
* Limit formatting changes to files you modify.
* Preserve Tailwind class ordering (handled by the plugin).
* Prefer `tv(...)` and `cx(...)` where existing code uses them.
* Do **not** introduce alternative class-merging utilities.

---

### ESLint (required)

Linting is handled by `next lint`.

**Rules:**

* Fix any lint errors you introduce.
* Do not disable rules with `eslint-disable` unless absolutely necessary and clearly justified.

---

## Project structure & conventions

* App Router: `src/app`
* Shared / reusable components: `src/components`

**Guidelines:**

* Place reusable components in `src/components`.
* Avoid introducing new top-level folders without approval.
* Route-specific components may live alongside their route only if they are truly not reusable.
* Follow existing naming and file organization patterns.

---

## App Router & rendering guidance

* Prefer **Server Components** by default.
* Use **Client Components** only when necessary.

Add `"use client"` only when a component:

* uses React hooks (`useState`, `useEffect`, etc.),
* relies on browser-only APIs,
* uses Radix interactive primitives,
* uses Motion animations requiring client runtime.

Keep client-side boundaries as small as possible.

---

## TypeScript expectations

* TypeScript-first everywhere.
* Use explicit types at public boundaries (props, helpers, data transforms).
* Avoid `any`. If unavoidable, localize it and explain with a short comment.
* Use `unknown` + proper narrowing for untrusted data.

---

## SEO & discoverability (high priority)

SEO is a **first-class concern** for this project. All changes should consider search visibility, especially for the **South African market**.

### General SEO rules

* Prefer **semantic HTML** (`header`, `nav`, `main`, `section`, `article`, `footer`).
* Use a **single `<h1>` per page**, describing the primary topic clearly.
* Use logical heading hierarchy (`h2` → `h3`).
* Avoid vague headings like “Welcome” or “Our Services” without context.

### Metadata

* Use Next.js metadata APIs (`metadata`, `generateMetadata`) where appropriate.
* Each page should have:

  * meaningful `title`,
  * descriptive `meta description`,
  * sensible Open Graph metadata if applicable.
* Titles and descriptions should:

  * be human-readable,
  * include relevant keywords naturally,
  * avoid keyword stuffing.

### Content & keywords

* Optimise for **South African terminology and spelling** (e.g. “labour”, “licence” where applicable).
* Prefer plain, descriptive language that a real customer would search for.
* Avoid fluff and marketing hype; search engines reward clarity and specificity.
* Where appropriate, include geographic context (e.g. “South Africa”, “local laboratories”, “agricultural testing in SA”).

---

## AI bot access & scraping

* The site should be **friendly to AI crawlers and search engines**.
* Do **not** add copy, headers, meta tags, or legal text that explicitly blocks AI indexing or scraping.
* Avoid `noindex`, `nofollow`, or restrictive `robots` rules unless explicitly requested.
* Copyright and legal wording should:

  * protect the business,
  * **not** discourage indexing, summarisation, or discovery by search engines or AI tools.

---

## UI / UX guidelines

* Maintain a professional, clean, and restrained design.
* Current theme: **light theme only**.
* Do **not** introduce dark mode or theme toggles unless explicitly requested.
* Avoid adding `dark:` Tailwind classes.

Design priorities:

* **Clarity**: what the company does and who it serves.
* **Credibility**: scientific/process explanations without exaggeration.
* **Conversion**: clear calls to action.

### Color Palette & Styling

The website uses a natural, organic color palette that reflects the agricultural and biological nature of the business:

**Primary Brand Color:**
* Lime Green (#6b8c37, #7a9c38, #668729) - Used for primary CTAs, accents, and interactive elements
* Darker variants (#476a32, #3d572c) - For hover states and emphasis

**Supporting Colors:**
* Sage greens - Neutral backgrounds and subtle accents
* Lavender - Secondary accents for variety
* Sky blues - Highlights and informational elements
* Cream/beige tones - Base backgrounds and warmth

**Color Usage Guidelines:**
* Primary CTAs (buttons, links): Lime green (`bg-lime-600`, `hover:bg-lime-700`)
* Secondary actions: Sage with borders (`border-sage-300 bg-white`)
* Text: Dark sage for body (`text-sage-900`, `text-sage-700`)
* Backgrounds: Cream (`bg-cream-50`) for page, white for cards
* Selection: Lime green backgrounds (`selection:bg-lime-100 selection:text-lime-800`)

### Typography

**Primary Font:** Raleway (Google Fonts)
* Weights used: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
* Body text: 300 (Light) for readability
* Headings: 600-700 for impact
* Letter spacing: Tight on headings (-0.02em to -0.03em)

**Font Guidelines:**
* Headings (h1-h6): Raleway Semi-Bold (600) or Bold (700)
* Body text: Raleway Light (300)
* Buttons/CTAs: Raleway Medium (500) or Semi-Bold (600)
* Use `font-semibold` for emphasis, not `font-bold` in body text

### Visual Assets & Imagery

**Logo Usage:**
* `/public/logo-full.png` - Full logo with text (navbar, footer)
* `/public/logo.png` - Icon/mark only (pricing page, decorative elements, mobile)

**Image Style:**
* Aerial agriculture photography - Fields, crops, farmland from above
* Cellular/microscopy imagery - Pathogens, cells, laboratory visuals
* Natural, organic feel - Avoid overly polished or stock-photo aesthetic
* Muted, desaturated tones that complement the pastel color palette

**Image Filters/Effects (when applicable):**
* Slight desaturation (85-90%) to maintain consistency with pastel theme
* Warm color cast (+5-10 temperature) to align with cream/beige tones
* Soft vignette for focus
* Avoid high contrast - keep images soft and approachable

### Component Styling Patterns

**Cards:**
* White background (`bg-white`)
* Subtle border (`border border-sage-200`)
* Light shadow (`shadow-sm`)
* Hover effect (`hover:shadow-md transition-shadow`)
* Rounded corners (`rounded-lg`)

**Buttons:**
* Primary: `bg-lime-600 hover:bg-lime-700 text-white shadow-sm`
* Secondary: `border border-sage-300 bg-white text-sage-900 hover:bg-sage-50 shadow-sm`
* Always include subtle shadows for depth
* Use `transition-colors` for smooth hover states

**Icons & Decorative Elements:**
* Colored backgrounds: `bg-lime-100`, `bg-sage-100`, `bg-lavender-100`, `bg-sky-100`
* Icon colors match background theme (`text-lime-600`, `text-sage-600`, etc.)
* Circular containers: `rounded-full p-3` or `p-4`

### Accessibility

* Use semantic HTML.
* Ensure form inputs have labels.
* Buttons must explicitly define `type` where appropriate.
* Icon-only buttons must have accessible names.

---

## Content & copywriting assistance

AI may assist with wording and content.

Rules:

* Tone: clear, grounded, professional, non-hypey.
* Do not invent scientific claims, certifications, or regulatory assertions.
* If a claim requires validation (e.g. turnaround time, compliance, accuracy), ask for confirmation or keep it generic.
* Prefer content that builds **trust and authority** over marketing language.

---

## Images & vector assets

AI may assist by generating prompts or SVG assets.

Rules:

* Prefer SVG for icons and diagrams.
* Keep visuals minimal, professional, and biology/agriculture-aligned.
* Avoid adding large raster images unless explicitly requested.
* Ensure all assets are commercially usable or original.

---

## Environment variables & secrets

* Use `.env.local` for configuration and secrets.
* Never commit secrets.
* If new environment variables are introduced:

  * provide safe defaults where possible,
  * document them in the README.

---

## Dependency & tooling guardrails

* Do not upgrade core dependencies (Next.js, React, Tailwind, etc.) unless explicitly requested.
* Do not add new libraries without approval.
* Do not change tooling (package manager must remain **pnpm**).

---

## Vercel deployment notes

* Assume default Vercel configuration for Next.js.
* `pnpm run build` must succeed locally for any routing or page-level changes.
* Avoid Node-only runtime assumptions that are incompatible with Vercel.

---

## What NOT to do

* Do not commit credentials, tokens, API keys, or private URLs.
* Do not restructure the project without explicit request.
* Do not perform broad refactors or drive-by formatting changes.
* Do not remove pages or components unless asked.
* Do not switch package managers.

---

## Definition of done

A task is complete when:

* The site runs locally (`pnpm run dev`)
* Linting passes (`pnpm run lint`)
* Build passes (`pnpm run build`)
* SEO considerations have been respected
* UI is consistent with existing design
* No secrets or sensitive data are committed