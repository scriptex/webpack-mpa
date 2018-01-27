# Multi Page Application setup using Webpack

Multiple page application setup with Webpack using SASS, PostCSS, ES6+, etc

## Dependencies

1. Node - min v8.9.4
2. NPM - min v5.6.0
   or
3. Yarn - min v1.3.2

The default setup uses php files, but you can easily switch to a file format of your choice.

## Install

`yarn`

## Develop

`yarn start`

## Build

`yarn build`

## Details

This setup uses [Webpack](https://webpack.js.org/) as a module bundler and [Yarn](https://yarnpkg.com/en/) as a dependency manager.

The setup includes:

1. [SASS](http://sass-lang.com/) stylesheets preprocessing
    * The SASS file/folder structure utilizes the ITCSS pattern as shown and expained [here](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
    * Wildcard imports in SASS thanks to [Node SASS Magic Importer](https://github.com/maoberlehner/node-sass-magic-importer)
2. [PostCSS](https://github.com/postcss/postcss) stylesheet postprocessing including:
    * [easy importing](https://github.com/TrySound/postcss-easy-import) of non-sass files
    * [postcss-utilities](https://github.com/ismamz/postcss-utilities) usage
    * [flexbox bugs](https://github.com/luisrudge/postcss-flexbugs-fixes) fixing
    * [css minification](http://cssnano.co/)
3. PNG Sprite generating using [Webpack SpriteSmith](https://github.com/mixtur/webpack-spritesmith)
4. Latest EcmaScript support
5. Automatic browser reload using [BrowserSync](https://browsersync.io/)
6. Images optimization using [Imagemin](https://github.com/Klathmon/imagemin-webpack-plugin)

If you wish to use a proxy in browsersync you can do it using the `DEV_URL` CLI argument like this:

```
yarn start --env.DEV_URL=http://your-proxy.app
```

### TODO

1. Add SVG sprite generating
