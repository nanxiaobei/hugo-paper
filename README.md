# Papel <sup><sup><sub>v0.1</sub></sup></sup>

A simple Hugo theme inspired by the popular iOS note-taking app, Bear.


## First Iteration: Build-time themes

Configure by setting 

```yml
params:
  colorTheme: toothpaste
```

Current default theme: Gotham

## Dark
- [X] Gotham
<img width="1059" alt="Gotham" src="https://user-images.githubusercontent.com/10414043/115945412-517fd280-a481-11eb-9957-ee2ef690b0ed.png">

- [X] Toothpaste
<img width="1059" alt="Toothpaste" src="https://user-images.githubusercontent.com/10414043/115945420-5c3a6780-a481-11eb-9483-598f045ba036.png">

- [X] Dracula
<img width="1059" alt="Dracula" src="https://user-images.githubusercontent.com/10414043/115945428-678d9300-a481-11eb-9a5f-7cd8351b5cbf.png">


## Light
- [ ] Gandalf
- [ ] Red Graphite
- [ ] Duotone Snow


## Install

Inside the folder of your Hugo site, run:

```bash
git submodule add https://github.com/raulcodes/hugo-papel themes/hugo-papel
```

Then change in `config.yml`:

```yml
theme: hugo-papel
```

For more information read the official [guide](https://gohugo.io/getting-started/quick-start/#step-3-add-a-theme) of Hugo.
