# Multi Page Application setup using Webpack

Multiple page application setup with Webpack using SASS, PostCSS, ES6+, etc

## Dependencies

1. Node - min v8.9.4
2. NPM - min v5.6.0
   or
3. Yarn - min v1.3.2

The default setup uses php files, but you can easily switch to a file format of your choice.

## Install

`yarn` or `npm i`

## Develop

`yarn start` or `npm start`

## Build

`yarn build` or `npm run build`

## Details

1. [SASS](http://sass-lang.com/) stylesheets preprocessing
   * The SASS file/folder structure utilizes the ITCSS pattern as shown and expained [here](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
2. [PostCSS](https://github.com/postcss/postcss) stylesheet postprocessing including:
   * [easy importing](https://github.com/TrySound/postcss-easy-import) of non-sass files
   * [url rebase](https://github.com/postcss/postcss-url) - locates and copies assets from `node_modules`
   * [postcss-utilities](https://github.com/ismamz/postcss-utilities) usage
   * [flexbox bugs](https://github.com/luisrudge/postcss-flexbugs-fixes) fixing
   * [css minification](http://cssnano.co/)
3. PNG Sprite generating using [Webpack SpriteSmith](https://github.com/mixtur/webpack-spritesmith)
4. Latest EcmaScript support
5. Automatic browser reload using [BrowserSync](https://browsersync.io/)
6. Images optimization using [Imagemin](https://github.com/Klathmon/imagemin-webpack-plugin)
7. SVG Sprite generating using [spritesh](https://www.npmjs.com/package/spritesh)
   The command which generates SVG sprite is `yarn svg` or `npm run svg`.
   The command takes the svg files from `assets/images/svg` and produces a single `sprite.svg` file in `static` directory.

**If you wish to use a proxy in browsersync you can do it using the `url` CLI argument like this:**

```
yarn start --env.url=http://your.app
```

## Assets

The `assets` folder contains several folders:

* `images` - contains several folders too:
  * `favicon` - holds all favicon variations
  * `sprite` - holds png sprite's parts
  * `svg` - holds svg sprite's parts
  * `temp` - holds content images
* `scripts` - contains the JS modules
* `styles` - contains the SASS stylesheets
