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

ncp.limit = 16;

ncp(
	cwd,
	pwd,
	{
		filter: path => filesToSkip.indexOf(path.split(sep).pop()) === -1
	},
	error => console.log(error || 'Webpack MPA installed')
);
