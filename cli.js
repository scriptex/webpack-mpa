#!/usr/bin/env node

/**
 * Node dependencies
 */
const { join, sep } = require('path');

/**
 * External dependencies
 */
const { ncp } = require('ncp');

/**
 * Get caller's folder
 */
const pwd = process.env.PWD;

/**
 * Get current working folder
 */
const cwd = join(__dirname, './');

/**
 * List of file which should not be copied
 */
const filesToSkip = ['cli.js'];

/**
 * Determine if a file should be skipped
 *
 * @param {string} path
 *
 * @return {boolean}
 */
const shouldSkip = path => {
	const filename = path.split(sep).pop();
	return filesToSkip.indexOf(filename) > -1;
};

/**
 * Filter files which should be skipped
 *
 * @param {string} name
 *
 * @return {boolean}
 */
const filter = name => {
	const isDotFile = name.indexOf(`${sep}.`) > -1;
	const isNodeModule = name.indexOf('node_modules') > -1;

	return !isDotFile && !isNodeModule && !shouldSkip(name);
};

ncp.limit = 16;

ncp(cwd, pwd, { filter }, error => console.log(error || 'Webpack MPA installed'));
