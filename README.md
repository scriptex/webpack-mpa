# Multi Page Application setup using Webpack

Multiple page application setup with Webpack using SASS, PostCSS, ES6+, etc

## Dependencies

1. Node - min v8.9.4
2. NPM - min v5.6.0
   or
3. Yarn - min v1.3.2

## Install

`yarn`

## Develop

`yarn start`

## Build

`yarn dist`

## Details

This setup uses [Webpack](https://webpack.js.org/) as a module bundler and dependency manager.

All modules/dependenices are installed via [Yarn](https://yarnpkg.com/en/.

The setup includes:

1. [SASS](http://sass-lang.com/) stylesheets preprocessing
2. [PostCSS](https://github.com/postcss/postcss) styleshee postprocessing including:

* [easy importing](https://github.com/TrySound/postcss-easy-import) of non-sass files
* [postcss-utilities](https://github.com/ismamz/postcss-utilities) usage
* [flexbox bugs](https://github.com/luisrudge/postcss-flexbugs-fixes) fixing
* [css minification](http://cssnano.co/)

3. Sprite generating using [Webpack SpriteSmith](https://github.com/mixtur/webpack-spritesmith)
4. Latest EcmaScript support
5. Automatic browser reload using [BrowserSync](https://browsersync.io/)
