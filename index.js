#!/usr/bin/env node

'use strict';

const program = require('commander');

const { execute } = require('./execute');

let filePath = undefined;

program.name('tile')
  .version('1.0.0')
  .usage('<path to file>')
  .arguments('<file>')
  .action((file) => {
    // Assign argument value
    filePath = file;
  })
  .parse(process.argv);

// Execute action on tiling image
execute(filePath);

