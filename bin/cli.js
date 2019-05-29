#!/usr/bin/env node

/**
 * Node dependencies
 */
const { join } = require('path');

/**
 * Internal dependencies
 */
const { copyDir } = require('./copy');

const shouldSkip = name => name === 'node_modules' || name === 'bin' || name === '.github';

copyDir(join(__dirname, '../'), process.env.PWD, shouldSkip);

console.log('Webpack MPA is now setup! Run "npm i" or "yarn" to continue');
