'use strict';

const fs = require('fs');
const commandExists = require('command-exists');
const path = require('path');

const { createImageTiles } = require('./createImageTiles');
const { showDependencyMessage } = require('./showDependencyMessage');
const { showUsageMessage } = require('./showUsageMessage');

const validFiles = ['.jpg', '.jpeg', '.png'];

function execute(filePath) {
  const command = 'convert';
  return new Promise((resolve, reject) => {
    // Only proceed when ImageMagick (especially `convert` command) has been installed
    commandExists(command).then(() => {
      if (filePath) {
        if (fs.existsSync(filePath)) {
          if (validFiles.includes(path.extname(filePath))) {
            console.log('Creating tiles ...');

            createImageTiles(filePath)
              .then(() => {
                resolve('Tiles created in current directory.');
              })
              .catch((error) => {
                reject(`Fail to create tiles: ${error.message}`);
              });
          } else {
            reject('Supported files only [.jpg, .jpeg, .png]');
          }
        } else {
          reject('Image source not supported or not found');
        }
      } else {
        // If no arguments supplied, display usage message
        // Consider it as displaying useful (and valid) message
        resolve(showUsageMessage());
      }
    }).catch(() => {
      reject(showDependencyMessage());
    });
  });
}

module.exports = { execute };
