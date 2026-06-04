import globals from 'globals';

import compat from 'eslint-plugin-compat';

export default [
	{
		files: ['./assets/scripts/**/*.js'],
		languageOptions: {
			globals: {
				...globals.node
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
