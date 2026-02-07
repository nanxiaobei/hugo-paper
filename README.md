# Paper

A clean, minimal Hugo theme.

## Requirements

- Hugo >= 0.145.0 (extended edition recommended)
- Node.js >= 18 (for Tailwind CSS build)

## Installation

### As a Hugo Module (recommended)

Add the theme to your site's `hugo.toml`:

```toml
[module]
  [[module.imports]]
    path = "github.com/raphi011/hugo-paper"
```

Then run:

```bash
hugo mod get -u
```

### As a Git Submodule

```bash
git submodule add https://github.com/raphi011/hugo-paper themes/paper
```

Set the theme in your site's `hugo.toml`:

```toml
theme = "paper"
```

## Development

Install dependencies:

```bash
npm install
```

Build CSS:

```bash
npm run build:css
```

Watch CSS during development:

```bash
npm run dev:css
```

Run the example site:

```bash
hugo server --source exampleSite --themesDir ../..
```

## Configuration

See `exampleSite/hugo.toml` for a complete configuration example.

## License

[MIT](LICENSE)
