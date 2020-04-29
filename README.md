![Webpack MPA Logo](https://raw.githubusercontent.com/scriptex/webpack-mpa/master/webpack-mpa.svg?sanitize=true)

[![GitHub release](https://img.shields.io/github/release/scriptex/webpack-mpa.svg)](https://github.com/scriptex/webpack-mpa/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/webpack-mpa.svg)](https://github.com/scriptex/webpack-mpa/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/webpack-mpa.svg)](https://github.com/scriptex/webpack-mpa/commits/master)
[![Build Status](https://travis-ci.org/scriptex/webpack-mpa.svg?branch=master)](https://travis-ci.org/scriptex/webpack-mpa)
[![Build Status](https://circleci.com/gh/scriptex/webpack-mpa.svg?style=svg)](https://circleci.com/gh/scriptex/webpack-mpa)
[![npm](https://img.shields.io/npm/dt/webpack-mpa.svg)](https://www.npmjs.com/package/webpack-mpa)
[![npm](https://img.shields.io/npm/v/webpack-mpa.svg)](https://www.npmjs.com/package/webpack-mpa)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/webpack-mpa/README.md)](https://github.com/scriptex/webpack-mpa/)

# Webpack-MPA

Opinionated multiple page application setup with Webpack using SASS, PostCSS, ES2017, PNG & SVG Sprites and more.

This boilerplate is suitable for static web applications, WordPress websites, etc.

## Dependencies

In order to use this setup you need to have installed the following dependencies:

1.  Node - min v8.9.4 - LTS recommended
2.  NPM - min v5.6.0
    or
3.  Yarn - min v1.3.2
4.  Bash terminal (Default on OSX/Linux, GitBash or similar on Windows)

## Default setup

The default setup uses PHP files, but you can easily switch to a file format of your choice.

Also, you can always switch to another file/folder structure if the current one does not suit you.

Just keep in mind that the styles should be located in `assets/styles` and the scripts should be located in `assets/scripts`.

## Zero config and fast installation

Navigate to your new project's folder and execute the following command:

```sh
npx webpack-mpa && npm i && npm start
```

This will install Webpack-MPA in your project folder and you will be able to start right away.

## Download

You can download this setup [directly](https://github.com/scriptex/webpack-mpa/archive/master.zip) and extract it.

or use NPM or Yarn to install it:

```sh
npm i webpack-mpa
```

or

```sh
yarn add webpack-mpa
```

Then navigate to the `webpack-mpa` folder and proceed with the rest of the instructions.

## Global installation

It is possible to use the CLI tool included in Webpack MPA. In order to do this you must install Webpack MPA globally:

```sh
npm i webpack-mpa -g
```

or

```sh
yarn global add webpack-mpa
```

The `wmpa` binary is now available for you to use.

Go to your new project folder and execute

```sh
wmpa
```

Your new project is setup!

## Install dependencies

```sh
yarn
```

or

```sh
npm i
```

## Develop

```sh
yarn start
```

or

```sh
npm start
```

## Build

```sh
yarn build
```

or

```sh
npm run build
```

## Details

1.  [SCSS](http://sass-lang.com/) stylesheets preprocessing

    -   SCSS entry point is `main.scss` file located in `assets/styles`
    -   The whole stylesheets file/folder structure is up to you
    -   [ITSCSS](https://github.com/scriptex/itscss) boilerplate used as a starting point.
    -   Glob import in SCSS thanks to [node-sass-magic-importer](https://github.com/maoberlehner/node-sass-magic-importer)

2.  [PostCSS](https://github.com/postcss/postcss) stylesheets postprocessing including:

    -   [easy importing](https://github.com/TrySound/postcss-easy-import) of non-sass files
    -   [url rebase](https://github.com/postcss/postcss-url) - locates and copies assets from `node_modules`
    -   [postcss-utilities](https://github.com/ismamz/postcss-utilities) - allows usage of utility mixins such as `clearfix`
    -   [flexbox bugs](https://github.com/luisrudge/postcss-flexbugs-fixes) - fixes common flexbox issues on Internet Explorer
    -   [css minification](http://cssnano.co/) - minifies the bundles stylesheet
    -   [automatic vendor prefixes](https://github.com/postcss/autoprefixer)

    > "Write your CSS rules without vendor prefixes (in fact, forget about them entirely)"

3.  PNG Sprite generating using [Webpack SpriteSmith](https://github.com/mixtur/webpack-spritesmith)
    The default setup includes retina sprite support which means that you should provide a retina version of each png icon.

    If you do not wish to use the retina sprite, comment the `@include retina-sprites($retina-groups);` statement in `main.scss` file.

    In order to use the PNG sprite, you need to do so by adding the relevant icons in your markup:

    ```html
    <i class="ico-home"></i>
    ```

    The class name corresponds to the name of the PNG file.

4.  Latest EcmaScript support

    -   Usage of the latest features in EcmaScript
    -   Using [Babel](https://github.com/babel/babel) to transpile to ES5
    -   Minification of the bundled file
    -   Source maps

5.  Automatic browser reload using [BrowserSync](https://browsersync.io/)

    -   The setup assumes that you have a web server installed.
    -   If you wish to use a proxy in browsersync you can do it using the `--url` CLI argument like this:

    ```sh
    yarn start --url=http://your.app
    ```

    or

    ```sh
    npm start -- --url=http://your.app
    ```

    If you do not have a web server installed, then the files can be served via the browser-sync built-in server. In order to use this you need to pass a new CLI argument `--server` like this.

    ```sh
    yarn start --server
    ```

    or

    ```sh
    npm start -- --server
    ```

6)  Images optimization using [Optisize](https://github.com/three11/optisize)

7)  SVG Sprite generating using [spritesh](https://www.npmjs.com/package/spritesh)

    All svg files located in `assets/images/svg` are merged into a single `sprite.svg` file in `dist` directory.

    This action is performed each time the `start` command is invoked.

    In order to use the SVG sprite you first need to include it in your markup. You can do so in several ways:

    -   If you're using PHP files, include it in each of your PHP files: `<?php include_once('assets/dist/sprite.svg'); ?>`
    -   If you're using HTML files, paste the content of the SVG sprite in each of your HTML files.
    -   If you're using another templating method (posthtml include, handlebars, ejs, etc) you need to do so according to its documentation.

    It is preferred to include the SVG sprite right after your opening `<body>` tag

    In order to add an SVG icon in your markup, you can do so by using the SVG `<use>` tag:

    ```html
    <svg class="svg-home">
    	<use xlink:href="#svg-home"></use>
    </svg>
    ```

8)  All front-end assets are stored in an auto-generated `dist` folder.

## Assets

The `assets` folder contains several folders:

-   `images` - contains several folders too:
    -   `favicon` - contains [all icons variations](https://github.com/audreyr/favicon-cheat-sheet)
    -   `sprite` - contains png sprite's parts
    -   `svg` - contains svg sprite's parts
    -   `temp` - contains content images
-   `scripts` - contains the JS modules
-   `styles` - contains the SASS stylesheets

**Each `start` command regenerates the contents of the `dist` folder.**

## Supported Browsers

This setup uses [Browserslist](https://github.com/browserslist/browserslist) to target browsers.

The default list of supported browsers is listed in the `package.json` file:

```json
{
	"browserslist": ["> 1%", "last 2 versions"]
}
```

This means that supported browsers vary based on current usage data and current browser versions.

In general, this setup supports the two most recent versions of all browsers.

## Scripts

There are several scripts defined in the `package.json` file:

```json
{
	"build": "webpack --env.NODE_ENV=production",
	"start": "webpack --watch --env.NODE_ENV=development",
	"optisize": "optisize --src=\"./assets/images\"",
	"html": "php index.php > index.html",
	"critical": "critical index.html > assets/dist/critical.css",
	"rm-html": "rm index.html",
	"pwa": "create-pwa --icon=\"./assets/images/favicon/icon.png\"",
	"prod": "yarn build && yarn html && yarn critical && yarn rm-html"
}
```

Here is a bit more about what each script does:

1.  `build`: Builds the production version of the javascript and css bundles, regenerates PNG and SVG sprites.
2.  `start`: Starts the development sequence, regenerates PNG and SVG sprites, opens your default browser and watches for changes.
3.  `optisize`: Optimizes your PNG, JPG and GIF images.
4.  `html`: Converts your `index.php` file to `index.html`.
5.  `critical`: Using the `index.html` extracts the critical css and generates a `critical.css` file in the `assets/dist` folder which is then inlined in the `index.php` file.
6.  `rm-html`: Deletes the `index.html` file.
7.  `pwa`: Generates boilerplate files for a PWA. More info [here](https://github.com/scriptex/create-pwa).
8.  `prod`: Runs 1, 4, 5, 6. (In this exact order).

In order to use the ability to generate critical CSS you must have the `php` binary exposed in your bash terminal.
More about PHP's commandline usage can be found [here](http://php.net/manual/en/features.commandline.php).

## Public vs. private projects

This starter boilerplate is licensed under the MIT open source license and is publicly available.

If you intend to use it to create a private and closed source project, please make sure to delete the `license` field in the `package.json` file and add `"private": true` in the same file.

This will make sure that you don't accidentally use an open source license for your private/closed source project.

## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Fwebpack-mpa&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)

## LICENSE

MIT
