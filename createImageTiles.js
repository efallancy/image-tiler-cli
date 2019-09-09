'use strict';

const path = require('path');
const { tile } = require('image-tiler');

// Will return promises
function createImageTiles(image) {
  const fileExt = path.extname(image);

  return tile(image, './', '{z}/{x}_{y}' + fileExt);
}

module.exports = { createImageTiles };
