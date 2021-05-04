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

> Current default theme: Gotham

# Currently Available Themes


|  | Dark |
| --- | --- |
 [Gotham](https://github.com/whatyouhide/vim-gotham) | <img width="530" alt="Gotham" src="https://user-images.githubusercontent.com/10414043/115945412-517fd280-a481-11eb-9957-ee2ef690b0ed.png"> 
 [Toothpaste](https://github.com/toothpaste-theme/toothpaste) | <img width="530" alt="Toothpaste" src="https://user-images.githubusercontent.com/10414043/115945420-5c3a6780-a481-11eb-9483-598f045ba036.png"> 
 [Dracula](https://draculatheme.com/) | <img width="530" alt="Dracula" src="https://user-images.githubusercontent.com/10414043/115945428-678d9300-a481-11eb-9a5f-7cd8351b5cbf.png"> 

---

|  | Light |
| --- | --- |
 [Gandalf](https://shinyfrog.net/) | <img width="530" alt="Gandalf" src="https://user-images.githubusercontent.com/10414043/116337632-0a0a8680-a7a0-11eb-9956-86739a88488c.png">
 Red Graphite | TODO
 Duotone Snow | TODO


For more information read the official [guide](https://gohugo.io/getting-started/quick-start/#step-3-add-a-theme) of Hugo.
