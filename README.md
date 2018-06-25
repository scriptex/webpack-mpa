[![GitHub stars](https://img.shields.io/github/stars/scriptex/webpack-mpa.svg?style=social&label=Stars)](https://github.com/scriptex/webpack-mpa)
[![GitHub forks](https://img.shields.io/github/forks/scriptex/webpack-mpa.svg?style=social&label=Fork)](https://github.com/scriptex/webpack-mpa/network#fork-destination-box)
[![GitHub release](https://img.shields.io/github/release/scriptex/webpack-mpa.svg)](https://github.com/scriptex/webpack-mpa/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/webpack-mpa.svg)](https://github.com/scriptex/webpack-mpa/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/webpack-mpa.svg)](https://github.com/scriptex/webpack-mpa/commits/master)
[![Build Status](https://travis-ci.org/scriptex/webpack-mpa.svg?branch=master)](https://travis-ci.org/scriptex/webpack-mpa)
[![npm](https://img.shields.io/npm/dt/webpack-mpa.svg)](https://www.npmjs.com/package/webpack-mpa)
[![npm](https://img.shields.io/npm/v/webpack-mpa.svg)](https://www.npmjs.com/package/webpack-mpa)
[![license](https://img.shields.io/github/license/scriptex/webpack-mpa.svg)](https://github.com/scriptex/webpack-mpa)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/webpack-mpa/README.md)](https://github.com/scriptex/webpack-mpa/)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/scriptex/webpack-mpa/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/scriptex/webpack-mpa/graphs/commit-activity)
[![Greenkeeper badge](https://badges.greenkeeper.io/scriptex/webpack-mpa.svg)](https://greenkeeper.io/)

[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://github.com/scriptex/)

# Webpack-MPA

Opinionated multiple page application setup with Webpack using SASS, PostCSS, ES2017, PNG & SVG Sprites and more.

This boilerplate is suitable for static web applications, WordPress websites, etc.

## Dependencies

In order to use this setup you need to have installed the following dependencies:

1. Node - min v8.9.4
2. NPM - min v5.6.0
   or
3. Yarn - min v1.3.2
4. Bash terminal (Default on OSX/Linux, GitBash or similar on Windows)

## Default setup

The default setup uses PHP files, but you can easily switch to a file format of your choice.

Also, you can always switch to another file/folder structure if the current one does not suit you.

Just keep in mind that the styles should be located in `assets/styles` and the scripts should be located in `assets/scripts`.

## Download

You can download this setup [directly](https://github.com/scriptex/webpack-mpa/archive/master.zip) and extract it.

or use NPM or Yarn to install it:

```console
npm i webpack-mpa
```

or

```console
yarn add webpack-mpa
```

Then navigate to the `webpack-mpa` folder and proceed with the rest of the instructions.

## Install

```console
yarn
```

or

```console
npm i
```

## Develop

```console
yarn start
```

or

```console
npm start
```

## Build

```console
yarn build
```

or

```console
npm run build
```

## Details

1. [SASS](http://sass-lang.com/) stylesheets preprocessing

    * The SASS file/folder structure utilizes the ITCSS pattern as shown and explained [here](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
    * Glob import in SASS thanks to [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer)

2. [PostCSS](https://github.com/postcss/postcss) stylesheets postprocessing including:

    * [easy importing](https://github.com/TrySound/postcss-easy-import) of non-sass files
    * [url rebase](https://github.com/postcss/postcss-url) - locates and copies assets from `node_modules`
    * [postcss-utilities](https://github.com/ismamz/postcss-utilities) - allows usage of utility mixins such as `clearfix`
    * [flexbox bugs](https://github.com/luisrudge/postcss-flexbugs-fixes) - fixes common flexbox issues on Internet Explorer
    * [css minification](http://cssnano.co/) - minifies the bundles stylesheet
    * [automatic vendor prefixes](https://github.com/postcss/autoprefixer)

        > "Write your CSS rules without vendor prefixes (in fact, forget about them entirely)"

3. PNG Sprite generating using [Webpack SpriteSmith](https://github.com/mixtur/webpack-spritesmith)
   The default setup includes retina sprite support which means that you should provide a retina version of each png icon.

    If you do not wish to use the retina sprite, comment the `@include retina-sprites($retina-groups);` statement in `main.scss` file.

4. Latest EcmaScript support

    * Usage of the latest features in EcmaScript
    * Using [Babel](https://github.com/babel/babel) to transpile to ES5
    * Minification of the bundled file
    * Source maps

5. Automatic browser reload using [BrowserSync](https://browsersync.io/)

    * The setup assumes that you have a web server installed. If you do not, then the files will be served via the browser-sync built-in server.
    * If you wish to use a proxy in browsersync you can do it using the `url` CLI argument like this:

    ```console
    yarn start --env.url=http://your.app
    ```

    or

    ```console
    npm start -- --env.url=http://your.app
    ```

6. Images optimization using [Imagemin](https://github.com/Klathmon/imagemin-webpack-plugin)

7. SVG Sprite generating using [spritesh](https://www.npmjs.com/package/spritesh)

    All svg files located in `assets/images/svg` are merged into a single `sprite.svg` file in `dist` directory.

    This action is performed each time the `start` command is invoked.

8. All front-end assets are stored in an auto-generated `dist` folder.

## Assets

The `assets` folder contains several folders:

* `images` - contains several folders too:
    * `favicon` - contains [all icons variations](https://github.com/audreyr/favicon-cheat-sheet)
    * `sprite` - contains png sprite's parts
    * `svg` - contains svg sprite's parts
    * `temp` - contains content images
* `scripts` - contains the JS modules
* `styles` - contains the SASS stylesheets

**Each `start` command regenerates the contents of the `dist` folder.**

## Supported Browsers

This setup uses [Browserslist](https://github.com/browserslist/browserslist) to target browsers.

The default list of supported browsers is listed in the `package.json` file:

```
"browserslist": ["> 1%", "last 2 versions"]
```

This means that supported browsers vary based on current usage data and current browser versions.

In general, this setup supports the two most recent versions of all browsers.

## LICENSE

MIT
