<div align="center">
<h1>Paper <sup><sup><sub>6</sub></sup></sup></h1>

Demo → [hugo-paper.vercel.app](https://hugo-paper.vercel.app/)

<hr />

A simple, clean, flexible Hugo theme.

⚡️ Fast | 📸 Fluent | 🫙 Smooth

</div>

---

## Links

Product Hunt: [producthunt.com/posts/hugo-paper-6](https://www.producthunt.com/posts/hugo-paper-6)

Hugo themes: [themes.gohugo.io/hugo-paper](https://themes.gohugo.io/hugo-paper/)

## Overview

![](https://raw.githubusercontent.com/nanxiaobei/hugo-paper/main/images/screenshot.png)
![](https://raw.githubusercontent.com/nanxiaobei/hugo-paper/main/images/screenshot_dark.png)
![](https://raw.githubusercontent.com/nanxiaobei/hugo-paper/main/images/screenshot_mobile.png)

## Install

Inside the folder of your Hugo project, run:

```bash
git submodule add https://github.com/nanxiaobei/hugo-paper themes/paper
```

Open `config.toml`, change `theme` to `"paper"`:

```toml
theme = "paper"
```

For more information, please read the [official guide](https://gohugo.io/getting-started/quick-start/#step-3-add-a-theme) of Hugo.

## Options

Available options to `config.toml`:

```toml
disqusShortname = 'YOUR_DISQUS_SHORTNAME'   # add disqus comments

[params]
  # color theme
  theme = 'linen'                 # linen, gray, light

  # header social icons
  twitter = 'YOUR_TWITTER_ID'     # twitter.com/YOUR_TWITTER_ID
  github = 'YOUR_GITHUB_ID'       # github.com/YOUR_GITHUB_ID
  instagram = 'YOUR_INSTAGRAM_ID' # instagram.com/YOUR_INSTAGRAM_ID
  rss = true                      # show rss icon with link

  # home page profile
  avatar = 'GRAVATAR_EMAIL'       # Gravatar email or image url(e.g. "https://deno.land/logo.svg")
  name = 'YOUR_NAME'
  bio = 'YOUR_BIO'

  # misc
  disableHLJS = true              # disable requesting highlight.js
  monoDarkIcon = true             # show monochrome dark mode icon
```

## License

[MIT License](https://github.com/nanxiaobei/hugo-paper/blob/main/LICENSE) (c) [nanxiaobei](https://lee.so/)

## FUTAKE

Try [**FUTAKE**](https://sotake.com/f) in WeChat. A mini app for your inspiration moments. 🌈

![](https://s3.bmp.ovh/imgs/2022/07/21/452dd47aeb790abd.png)
