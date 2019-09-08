'use strict';

function showUsageMessage() {
  return `
Usage: tile <path to file>

Example:
  $ tile cat.jpg

For help, run the following command:
  $ tile [-h | --help]
`;
}

module.exports = { showUsageMessage };
