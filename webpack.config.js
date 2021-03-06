// @ts-nocheck

const { exec } = require('child_process');
const { parse } = require('url');
const { resolve } = require('path');
const { readdirSync } = require('fs');

const { argv } = require('yargs');
const magicImporter = require('node-sass-magic-importer');
const { ProvidePlugin } = require('webpack');
const SpritesmithPlugin = require('webpack-spritesmith');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin-next');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { url, server, mode } = argv;
const sourceMap = {
	sourceMap: mode === 'development'
};

if (server) {
	exec('php index.php > index.html');
}

const postcssOptions = {
	plugins: [
		require('postcss-easy-import'),
		require('postcss-url')({
			url: 'rebase'
		}),
		require('postcss-utilities'),
		require('postcss-flexbugs-fixes'),
		require('autoprefixer')()
	],
	...sourceMap
};

const babelConfig = [
	{
		loader: 'babel-loader',
		options: {
			cacheDirectory: true,
			comments: false,
			presets: ['@babel/env']
		}
	}
];

const browserSyncConfig = {
	host: 'localhost',
	port: 3000,
	open: 'external',
	/* eslint-disable no-mixed-spaces-and-tabs */
	files: [
		server
			? {
					match: ['*.php'],
					fn(_, file) {
						const name = file.replace(/.php$/, '');

						exec(`php ${file} > ${name}.html`);
					}
			  }
			: '**/*.php',
		'**/*.html',
		'./assets/dist/app.css',
		'./assets/dist/app.js'
	],
	/* eslint-enable */
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
};

const extractTextConfig = {
	filename: 'dist/app.css'
};

const spritesmithConfig = {
	src: {
		cwd: resolve(__dirname, 'assets/images/sprite'),
		glob: '*.png'
	},
	target: {
		image: resolve(__dirname, './assets/dist/sprite.png'),
		css: resolve(__dirname, './assets/styles/_sprite.scss')
	},
	apiOptions: {
		cssImageRef: '../dist/sprite.png'
	},
	retina: '@2x'
};

const cleanConfig = {
	verbose: false,
	exclude: ['sprite.svg'],
	allowExternal: true
};

const shellScripts = [];
const svgs = readdirSync('./assets/images/svg').filter(svg => svg[0] !== '.');

if (svgs.length) {
	shellScripts.push('svgo -f assets/images/svg');
	shellScripts.push('spritesh -q -i assets/images/svg -o ./assets/dist/sprite.svg -p svg-');
}

module.exports = () => {
	const isDevelopment = mode === 'development';
	const isProduction = mode === 'production';

	if (isProduction) {
		postcssOptions.plugins.push(require('postcss-merge-rules'), require('cssnano')());
	}

	if (isDevelopment) {
		postcssOptions.plugins.push(
			require('postcss-watch-folder')({
				folder: './assets/styles',
				main: './assets/styles/main.scss'
			})
		);
	}

	const config = {
		mode: mode,
		entry: ['./assets/styles/main.scss', './assets/scripts/main.js'],
		output: {
			path: resolve(__dirname, './assets'),
			filename: 'dist/app.js'
		},
		resolve: {
			modules: ['node_modules', './assets/scripts', './assets/images/sprite']
		},
		module: {
			rules: [
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader
						},
						{
							loader: 'css-loader',
							options: sourceMap
						},
						{
							loader: 'postcss-loader',
							options: { postcssOptions }
						},
						{
							loader: 'sass-loader',
							options: {
								sassOptions: {
									importer: magicImporter()
								},
								...sourceMap
							}
						}
					]
				},
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: babelConfig
				},
				{
					test: /\.(jpe?g|gif|png|svg|woff2?|ttf|eot|wav|mp3|mp4)(\?.*$|$)/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[hash].[ext]',
								context: '',
								publicPath: './',
								outputPath: './dist/'
							}
						}
					]
				}
			]
		},
		plugins: [
			new ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
				'window.jQuery': 'jquery'
			}),
			new MiniCssExtractPlugin(extractTextConfig),
			new SpritesmithPlugin(spritesmithConfig),
			new CleanWebpackPlugin(['../assets/dist/'], cleanConfig),
			new WebpackShellPlugin({
				onBuildStart: {
					scripts: shellScripts
				}
			})
		],
		externals: {
			jquery: 'jQuery'
		},
		cache: true,
		bail: false,
		devtool: isDevelopment ? 'source-map' : false,
		stats: 'errors-only'
	};

	if (isDevelopment) {
		if (url) {
			browserSyncConfig.host = parse(url).hostname;
			browserSyncConfig.proxy = url;
		}

		if (server) {
			delete browserSyncConfig.host;
			delete browserSyncConfig.proxy;

			browserSyncConfig.server = true;
		}

		config.plugins.push(
			new BrowserSyncPlugin(browserSyncConfig, {
				reload: false
			})
		);
	}

	return config;
};
