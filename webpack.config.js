const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = {
  stylesSrc: './assets/src/styles/main.scss',
  stylesBuild: 'assets/styles/app.css',
  scriptsSrc: './assets/src/scripts/main.js',
  scriptsBuild: './assets/scripts/app.js',
  resolveModules: 'node_modules',
  resolveScripts: './assets/scripts',
  resolveIcons: './assets/images/sprite',
  iconsSrc: 'assets/images/sprite',
  iconsTarget: 'assets/images/sprite.png',
  iconsStyle: 'assets/src/styles/_sprite.scss',
  iconsRef: '../../images/sprite.png',
  cleanUp: [
    './assets/scripts/',
    './assets/styles/',
    './assets/images/sprite.png',
    './sprite.png'
  ]
};

const postcssConfig = {
  plugins: () => [
    require('postcss-easy-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-utilities'),
    require('postcss-merge-rules'),
    require('autoprefixer')(),
    require('cssnano')({
      discardComments: {
        removeAll: true
      }
    })
  ],
  sourceMap: true
};

const babelConfig = [
  {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      comments: false,
      presets: ['env', 'stage-2']
    }
  }
];

module.exports = {
  entry: [paths.stylesSrc, paths.scriptsSrc],
  output: {
    filename: paths.scriptsBuild
  },
  resolve: {
    modules: [paths.resolveModules, paths.resolveScripts, paths.resolveIcons]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: postcssConfig
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.png$/,
        loaders: ['file-loader?name=../../[path][name].[ext]']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: babelConfig
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: paths.stylesBuild,
      allChunks: true
    }),
    new SpritesmithPlugin({
      src: {
        cwd: path.resolve(__dirname, paths.iconsSrc),
        glob: '*.png'
      },
      target: {
        image: path.resolve(__dirname, paths.iconsTarget),
        css: path.resolve(__dirname, paths.iconsStyle)
      },
      apiOptions: {
        cssImageRef: paths.iconsRef
      }
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      open: 'external',
      files: [
        '*.php',
        '*.html',
        './assets/styles/app.css',
        './assets/styles/app.js'
      ],
      ghostMode: {
        clicks: false,
        scroll: true,
        forms: {
          submit: true,
          inputs: true,
          toggles: true
        }
      },
      snippetOptions: {
        rule: {
          match: /<\/body>/i,
          fn: (snippet, match) => `${snippet}${match}`
        }
      },
      proxy: 'localhost'
    }),
    new CleanWebpackPlugin(paths.cleanUp, {
      verbose: false
    }),
    new UglifyJSPlugin({
      sourceMap: true
    })
  ],
  cache: true,
  bail: false,
  watch: true,
  devtool: 'source-map'
};
