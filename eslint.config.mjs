import globals from 'globals';

import compat from 'eslint-plugin-compat';

const GLOBALS_BROWSER_FIX = Object.assign({}, globals.browser, {
	AudioWorkletGlobalScope: globals.browser['AudioWorkletGlobalScope ']
});

delete GLOBALS_BROWSER_FIX['AudioWorkletGlobalScope '];

export default [
	{
		files: ['./assets/scripts/**/*.js'],
		languageOptions: {
			globals: {
				...globals.node,
				...GLOBALS_BROWSER_FIX
			},
			parserOptions: {
				ecmaVersion: 2023,
				sourceType: 'module'
			}
		},
		plugins: {
			compat
		},
		rules: {
			'no-console': 'error'
		},
		settings: {
			react: {
				version: 'detect'
			}
		}
	}
];
