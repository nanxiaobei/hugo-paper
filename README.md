# oso <sup><sup><sub>v0.1</sub></sup></sup>

A simple Hugo theme inspired by the popular iOS note-taking app, Bear.

Oso strives to be beautiful, fast, and accessible. All without JS! 

## Lighthouse

[My personal blog](raulcodes.com) uses this theme and I aim to consistently score as perfectly as I can on Google's Lighthouse tool.

Report from May 4, 2021:

<img width="547" alt="Lighthouse Report 2021-05-04 at 5 28 05 PM" src="https://user-images.githubusercontent.com/10414043/117078010-b8617f00-acfe-11eb-9e5d-264e572127e1.png">


## Install

Inside the folder of your Hugo site, run:

```bash
git submodule add https://github.com/raulcodes/oso themes/oso
```

Then change in `config.yml`:

```yml
theme: oso
```

## First Iteration: Build-time themes

Configure your site's color theme by setting 

```yml
params:
  colorTheme: toothpaste
```

[Custom Shortcodes](./docs/shortcodes.md)

> Current default theme: Gotham

[Currently Available Themes](./docs/themes.md)


For more information read the official [guide](https://gohugo.io/getting-started/quick-start/#step-3-add-a-theme) of Hugo.
