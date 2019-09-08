'use strict';

const fs = require('fs');
const commandExists = require('command-exists');
const path = require('path');

const { createImageTiles } = require('./createImageTiles');
const { showDependencyMessage } = require('./showDependencyMessage');
const { showUsageMessage } = require('./showUsageMessage');

const validFiles = ['.jpg', '.jpeg', '.png'];

function execute(filePath) {

  // Only proceed when ImageMagick (especially `convert` command) has been installed
  commandExists('convert').then(() => {
    if (filePath) {
      if (fs.existsSync(filePath)) {
        if (validFiles.includes(path.extname(filePath))) {
          console.log('Creating tiles ...');

          createImageTiles(filePath)
            .then(() => {
              console.log('Tiles created in current directory.')
            })
            .catch((error) => {
              console.error('Fail to create tiles:', error.message);
              process.exit(1);
            });
        } else {
          console.error('Supported files only [.jpg, .jpeg, .png]');
          process.exit(1);
        }
      } else {
        console.error('Image source not supported or not found');
        process.exit(1);
      }
    } else {
      // If no arguments supplied, display usage message
      console.log(showUsageMessage());
    }
  }).catch((err) => {
    console.log(showDependencyMessage());
    process.exit(1);
  });
}

module.exports = { execute };
