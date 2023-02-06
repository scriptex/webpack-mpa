<div align="center">
	<img src="https://raw.githubusercontent.com/scriptex/webpack-mpa/master/webpack-mpa.svg" alt="Webpack MPA Logo" />
	<br /><br />
	<img src="https://raw.githubusercontent.com/scriptex/webpack-mpa/master/readme.svg" alt="Zero config and fast installation: Run `npx webpack-mpa && npm i && npm start` in your terminal." />
	<br /><br />
</div>

[![Travis CI](https://travis-ci.com/scriptex/webpack-mpa.svg?branch=master)](https://travis-ci.com/scriptex/webpack-mpa)
[![Github Build](https://github.com/scriptex/webpack-mpa/workflows/Build/badge.svg)](https://github.com/scriptex/webpack-mpa/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/webpack-mpa/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/webpack-mpa&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-webpack-mpa-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/webpack-mpa/badge)](https://www.codefactor.io/repository/github/scriptex/webpack-mpa)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/webpack-mpa/README.md?pixel)](https://github.com/scriptex/webpack-mpa/)

# Webpack-MPA

> Opinionated multiple page application setup with Webpack using SASS, PostCSS, ES2017, PNG & SVG Sprites and more.

This boilerplate is suitable for static web applications, WordPress websites, etc.

## Visitor stats

![GitHub stars](https://img.shields.io/github/stars/scriptex/webpack-mpa?style=social)
![GitHub forks](https://img.shields.io/github/forks/scriptex/webpack-mpa?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/scriptex/webpack-mpa?style=social)
![GitHub followers](https://img.shields.io/github/followers/scriptex?style=social)

## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/scriptex/webpack-mpa)
![GitHub repo size](https://img.shields.io/github/repo-size/scriptex/webpack-mpa?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/scriptex/webpack-mpa?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/scriptex/webpack-mpa?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/webpack-mpa?style=plastic)

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

    -   The setup assumes that you have a web server (MAMP, XAMPP, etc) installed.
    -   If you wish to use a proxy in browsersync you can do it using the `url` CLI argument like this:

    ```sh
    yarn start --env url=http://your.app
    ```

    or

    ```sh
    npm start --env url=http://your.app
    ```

    If you do not have a web server installed, then the files can be served via the browser-sync built-in server. In order to use this you need to pass a new CLI argument `server` like this.

    ```sh
    yarn start --env server
    ```

    or

    ```sh
    npm start --env server
    ```

6)  SVG Sprite generating using [spritesh](https://www.npmjs.com/package/spritesh)

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

7)  All front-end assets are stored in an auto-generated `dist` folder.

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
	"build": "webpack --mode=production",
	"start": "webpack --watch --mode=development",
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
3.  `html`: Converts your `index.php` file to `index.html`.
4.  `critical`: Using the `index.html` extracts the critical css and generates a `critical.css` file in the `assets/dist` folder which is then inlined in the `index.php` file.
5.  `rm-html`: Deletes the `index.html` file.
6.  `pwa`: Generates boilerplate files for a PWA. More info [here](https://github.com/scriptex/create-pwa).
7.  `prod`: Runs 1, 4, 5, 6. (In this exact order).

In order to use the ability to generate critical CSS you must have the `php` binary exposed in your bash terminal.
More about PHP's commandline usage can be found [here](http://php.net/manual/en/features.commandline.php).

## Public vs. private projects

This starter boilerplate is licensed under the MIT open source license and is publicly available.

If you intend to use it to create a private and closed source project, please make sure to delete the `license` field in the `package.json` file and add `"private": true` in the same file.

This will make sure that you don't accidentally use an open source license for your private/closed source project.

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
	<img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
	<img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
	<img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
	<img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
	<img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>
