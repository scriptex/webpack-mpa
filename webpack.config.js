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
	imagesSrc: './assets/images/',
	cleanUp: [
		'./assets/scripts/',
		'./assets/styles/',
		'./assets/images/sprite.png',
		'./sprite.png'
	]
};

const sourceMap = {
	sourceMap: true
};

const postcssConfig = {
	plugins: [
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
};

const extractTextConfig = {
	filename: paths.stylesBuild,
	allChunks: true
};

const spritesmithConfig = {
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
};

const cleanConfig = {
	verbose: false
};

const uglifyJSconfig = {
	...sourceMap
};

const imageminConfig = {
	test: paths.imagesSrc,
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
	entry: [paths.stylesSrc, paths.scriptsSrc],
	output: {
		filename: paths.scriptsBuild
	},
	resolve: {
		modules: [
			paths.resolveModules,
			paths.resolveScripts,
			paths.resolveIcons
		]
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
				test: /sprite\.png$/,
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
		new ExtractTextPlugin(extractTextConfig),
		new SpritesmithPlugin(spritesmithConfig),
		new CleanWebpackPlugin(paths.cleanUp, cleanConfig)
	],
	cache: true,
	bail: false,
	devtool: 'source-map'
};

module.exports = env => {
	if (env.NODE_ENV === 'development') {
		if (env.DEV_URL) {
			browserSyncConfig.host = url.parse(env.DEV_URL).hostname;
			browserSyncConfig.proxy = env.DEV_URL;
		}

		config.plugins.push(new BrowserSyncPlugin(browserSyncConfig));
	}

	if (env.NODE_ENV === 'production') {
		config.plugins.push(
			new UglifyJSPlugin(uglifyJSconfig),
			new ImageminWebpackPlugin(imageminConfig)
		);
	}

	return config;
};
