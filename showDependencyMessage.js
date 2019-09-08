'use strict';

function showDependencyMessage() {
  return `
"tile" requires ImageMagick as its dependency.
To install ImageMagick, please visit:
  https://imagemagick.org/

For MacOS, installation can be done through Homebrew:
  brew install imagemagick

For Linux, run the following command:
  sudo apt-get install imagemagick
`;
}

module.exports = { showDependencyMessage };
