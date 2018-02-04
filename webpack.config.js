const url = require('url');
const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPNGquant = require('imagemin-pngquant');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;

const sourceMap = {
	sourceMap: true
};

const postcssConfig = {
	plugins: [
		require('postcss-easy-import'),
		require('postcss-url')({
			url: 'rebase'
		}),
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
	...sourceMap
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

const browserSyncConfig = {
	host: 'localhost',
	port: 3000,
	open: 'external',
	files: [
		'**/*.php',
		'**/*.html',
		'./assets/static/app.css',
		'./assets/static/app.js'
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
};

const extractTextConfig = {
	filename: 'assets/static/app.css',
	allChunks: true
};

const spritesmithConfig = {
	src: {
		cwd: path.resolve(__dirname, 'assets/images/sprite'),
		glob: '*.png'
	},
	target: {
		image: path.resolve(__dirname, './assets/static/sprite.png'),
		css: path.resolve(__dirname, './assets/styles/_sprite.scss')
	},
	apiOptions: {
		cssImageRef: '../static/sprite.png'
	},
	retina: '@2x'
};

const cleanConfig = {
	verbose: false,
	exclude: ['sprite.svg']
};

const imageminConfig = {
	test: /\.(jpe?g|png|gif|svg)$/i,
	gifsicle: {
		interlaced: true
	},
	svgo: {
		plugins: [
			{ cleanupAttrs: true },
			{ removeDoctype: true },
			{ removeXMLProcInst: true },
			{ removeComments: true },
			{ removeMetadata: true },
			{ removeUselessDefs: true },
			{ removeEditorsNSData: true },
			{ removeEmptyAttrs: true },
			{ removeHiddenElems: false },
			{ removeEmptyText: true },
			{ removeEmptyContainers: true },
			{ cleanupEnableBackground: true },
			{ removeViewBox: true },
			{ cleanupIDs: false },
			{ convertStyleToAttrs: true }
		]
	},
	plugins: [
		imageminMozjpeg({
			quality: 70
		}),
		imageminPNGquant({
			speed: 1,
			quality: 90
		})
	]
};

const config = {
	entry: ['./assets/styles/main.scss', './assets/scripts/main.js'],
	output: {
		filename: './assets/static/app.js'
	},
	resolve: {
		modules: ['node_modules', './assets/scripts', './assets/images/sprite']
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: sourceMap
						},
						{
							loader: 'postcss-loader',
							options: postcssConfig
						},
						{
							loader: 'sass-loader',
							options: sourceMap
						}
					],
					fallback: 'style-loader'
				})
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
							publicPath: '../../',
							outputPath: 'assets/static/'
						}
					}
				]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin(extractTextConfig),
		new SpritesmithPlugin(spritesmithConfig),
		new CleanWebpackPlugin(['./assets/static/'], cleanConfig)
	],
	cache: true,
	bail: false,
	devtool: 'source-map',
	stats: 'errors-only'
};

module.exports = env => {
	if (env.NODE_ENV === 'development') {
		if (env.url) {
			browserSyncConfig.host = url.parse(env.url).hostname;
			browserSyncConfig.proxy = env.url;
		}

		config.plugins.push(
			new BrowserSyncPlugin(browserSyncConfig, {
				reload: false
			})
		);
	}

	if (env.NODE_ENV === 'production') {
		config.plugins.push(
			new UglifyJSPlugin(sourceMap),
			new ImageminWebpackPlugin(imageminConfig)
		);
	}

	return config;
};
