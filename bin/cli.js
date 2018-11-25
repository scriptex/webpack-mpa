#!/usr/bin/env node

/**
 * Node dependencies
 */
const { join } = require('path');

/**
 * Internal dependencies
 */
const { copyDir } = require('./copy');

copyDir(join(__dirname, '../'), process.env.PWD, name => name === 'node_modules' || name === 'bin' || name[0] === '.');

console.log('Webpack MPA is not setup! Run "npm i" or "yarn" to continue');
