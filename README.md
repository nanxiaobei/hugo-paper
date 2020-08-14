# Paper <sup><sup><sub>v4.9 (Dark Mode)</sub></sup></sup>

A simple, clean, flexible Hugo theme.

☄️ Fast | ☁️ Fluent | 🌙 Smooth

---

## Overview

Demo: https://nanxiaobei.github.io/hugo-paper/

<p>
<kbd>
  <img src="https://raw.githubusercontent.com/nanxiaobei/hugo-paper/master/images/screenshot.png" alt="Paper">
</kbd>
</p>

<p>
<kbd>
  <img src="https://raw.githubusercontent.com/nanxiaobei/hugo-paper/master/images/screenshot_dark.png" alt="Paper Dark Mode">
</kbd>
</p>

Hugo themes: https://themes.gohugo.io/hugo-paper/

## Install

Inside the folder of your Hugo site, run:

```bash
git clone https://github.com/nanxiaobei/hugo-paper themes/paper
```

Then change in `config.toml`:

```toml
theme = "paper"
```

For more information read the official [guide](https://gohugo.io/getting-started/quick-start/#step-3-add-a-theme) of Hugo.

### Available features:

##### Shortcodes

 - Collapse: `{{< collapse summary="Text that's shown when content is collapsed" content="the content that's being hidden" openByDefault=true >}}`

#### config.toml
```toml
copyright = "[any markdown](//link-to-licence/copyright)" # Defaults to plain copyright, but not on RSS feeds. 'CC BY 4.0' adds machine-readable data and links to the licence as well.

[Params]
nolatestspecial = true # Don't make the latest post on the homepage large.
# Having a file like _index.md disables title and subtitle automatically, displaying the file at the top of the homepage.
showtitle = false # Show the page's title on the homepage.
hidesubtitle = true # Don't show the page's subtitle on the homepage.
```

## Dark Mode

It's automatic, according to the natural time of day and night.
