# Paper Theme — Implementation Plan

## Overview

Replace the old hugo-paper theme with a new one built from scratch, following
current Hugo best practices (Hugo >= 0.145.0, Tailwind CSS v4, Hugo Modules).

## What's Done (Scaffolding)

The old theme has been fully removed and a clean scaffold is in place:

```
hugo-paper/
├── archetypes/default.md           # Front matter template for new content
├── assets/css/
│   ├── main.css                    # Tailwind v4 entry point with theme variables
│   ├── custom.css                  # Override hook for end users
│   └── compiled/.gitkeep           # Build output directory (gitignored)
├── assets/js/.gitkeep              # Future JS assets
├── data/.gitkeep                   # Data files
├── i18n/en.yaml                    # English translations
├── layouts/
│   ├── _default/
│   │   ├── baseof.html             # HTML shell with dark mode script
│   │   ├── single.html             # Single page/post (unstyled)
│   │   ├── list.html               # List/archive with pagination (unstyled)
│   │   └── terms.html              # Taxonomy terms (unstyled)
│   ├── partials/
│   │   ├── head.html               # <head> with Pipes, OG, fingerprinting
│   │   ├── header.html             # Site nav (unstyled)
│   │   └── footer.html             # Footer (unstyled)
│   ├── shortcodes/.gitkeep
│   └── 404.html
├── static/.gitkeep
├── exampleSite/                    # Demo site with sample content
├── hugo.toml                       # buildStats, cachebusters, module mounts
├── go.mod                          # Hugo Module (github.com/raphi011/hugo-paper)
├── theme.toml                      # Theme metadata
├── package.json                    # Tailwind CSS v4.1.18, typography v0.5.19
└── .gitignore                      # node_modules, compiled CSS, hugo_stats.json
```

### Dark / Light Mode (partially wired)

The infrastructure for automatic OS-based theme switching is in place:

- **`baseof.html`** — inline `<script>` reads `prefers-color-scheme` and adds
  `.dark` to `<html>` before first paint (prevents flash of wrong theme).
- **`head.html`** — `<meta name="color-scheme" content="light dark">` and
  dual `<meta name="theme-color">` tags for light/dark.
- **`main.css`** — CSS custom properties defined on `:root` (light) and
  `:root.dark` (dark) for bg, text, border, accent, surface colors.

**Still needed:**

- Add `@custom-variant dark (&:where(.dark, .dark *));` to `main.css` so
  Tailwind's `dark:` utilities are driven by the `.dark` class rather than
  the media query (since we toggle via JS).
- Add a `matchMedia` change listener in `baseof.html` so the `.dark` class
  updates live when the user changes their OS preference without reloading.

## What's Left (Implementation)

### 1. Tailwind Dark Mode Variant

In `assets/css/main.css`, add after the `@plugin` line:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

This tells Tailwind v4 to activate `dark:` utilities via the `.dark` class
on `<html>` instead of the default `prefers-color-scheme` media query.

### 2. Syntax Highlighting (Chroma)

Use Hugo's built-in Chroma highlighter with **CSS classes** (not inline
styles) so we can swap light/dark styles.

**Configuration** — add to `hugo.toml`:

```toml
[markup.highlight]
  noClasses = false
  lineNos = false
  guessSyntax = false
```

**Generate stylesheets** (requires Hugo CLI):

```bash
hugo gen chromastyles --style=github > assets/css/syntax-light.css
hugo gen chromastyles --style=github-dark > assets/css/syntax-dark.css
```

**Load in `head.html`** — include both files, scoping the dark one:

- Light styles: loaded normally
- Dark styles: wrapped in `:root.dark { ... }` or scoped via
  `.dark .chroma { ... }` selectors

This gives fully static, zero-JS syntax highlighting that respects the
current color scheme.

### 3. Visual Design & Layout

All templates are currently unstyled skeletons. The actual design work:

- **Typography** — apply `@tailwindcss/typography` prose classes to content
  areas, configure prose colors for light/dark via `dark:prose-invert`.
- **Layout** — define max-width, spacing, responsive breakpoints.
- **Header/Nav** — style navigation, mobile menu if needed.
- **Post list** — card or minimal list design for archives.
- **Single post** — article header (title, date, author), content area,
  post navigation (prev/next), tags.
- **Footer** — copyright, social links, theme attribution.
- **404 page** — styled error page.

### 4. Additional Features (optional, to be decided)

- Social media icons (SVGs in `static/`)
- Comment system integration (Giscus, Disqus)
- KaTeX math support (conditional loading)
- Mermaid diagram support (conditional loading)
- RSS feed customization
- Additional i18n translations
- Table of contents partial
- Reading time estimate
- Open Graph images

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `@tailwindcss/cli` | ^4.1.18 | Tailwind CSS build |
| `@tailwindcss/typography` | ^0.5.19 | Prose styling for rendered content |
| Hugo | >= 0.145.0 | Static site generator |

## Build Commands

```bash
npm install                  # Install dependencies
npm run build:css            # One-time CSS build
npm run dev:css              # Watch mode for development
hugo server --source exampleSite --themesDir ../..  # Preview example site
```
