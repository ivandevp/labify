#!/usr/bin/env node
'use strict';

/*
 * Module dependencies
 */
const program = require('commander');
const options = require('./lib/options');

program
	.version('0.0.1')
	.command('new <template>')
	.description('Creates what described on the option.')
	.action(options.new);

program.parse(process.argv);

if (program.args.length === 0) program.help();