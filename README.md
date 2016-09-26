# Music Hunter Website

## Installation

### Node
You can go to the [oficial web page](https://nodejs.org) and download it or you can use [nvm](https://github.com/creationix/nvm).

### NPM
The node package manager (`npm`) comes with node, dont worrie.

### Project
```
$ git clone git@github.com:SteedMx/music-hunter.git
$ cd music-hunter
$ npm install
```

## Build
You need to have installed [gulp](http://gulpjs.com/) globally in your machine.

### Development (debug)
```
$ gulp [default]
```

Gulp will run the next tasks:
- `debug:html`: will compile all `.pug` files from `src` directory into `public` directory as `index.html`.
- `debug:images`: will move all images from `src/images` directory to `public/images` directory.
- `debug:css`: will compile all the `.stylus` files ffom `src/styles` into `public/css` directory as `main.css`.
- `debug:javascript`: will bundle all javascript files from `src/javascript` into `public/javascript` directory as `app.js`.
- `server`: will start a server at `localhost:8080` that will serve `public` directory
- `watch`: will watch all `src` files, if some file changes it will re-run the corresponding task.

### Production
```
$ gulp build
```

Gulp will run the next tasks:
- `dist:html`: will compile all `.pug` files from `src` directory into `public` directory as `index.html`.
- `dist:images`: will move all images from `src/images` directory to `public/images` directory.
- `dist:css`: will compile all the `.stylus` files ffom `src/styles` into `public/css` directory as `main.css`.
- `dist:javascript`: will bundle all javascript files from `src/javascript` into `public/javascript` directory as `app.js`.

### Github
```
$ gulp github
```

Gulp will run the next tasks:
- `gh:html`: will compile all `.pug` files from `src` directory into `docs` directory as `index.html`.
- `gh:images`: will move all images from `src/images` directory to `docs/images` directory.
- `gh:css`: will compile all the `.stylus` files ffom `src/styles` into `docs/css` directory as `main.css`.
- `gh:javascript`: will bundle all javascript files from `src/javascript` into `docs/javascript` directory as `app.js`.

## Licence

MIT
