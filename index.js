#!/usr/bin/env node
const cli = require('./lib/cli');
const unhandled = require('cli-handle-unhandled');

unhandled();

console.log(cli);