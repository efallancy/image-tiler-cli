const { showUsageMessage } = require('./showUsageMessage');

describe('showUsageMessage', () => {
  it('should show CLI usage message', () => {
    const expectedResult = `
Usage: tile <path to file>

Example:
  $ tile cat.jpg

For help, run the following command:
  $ tile [-h | --help]
`;

    expect(showUsageMessage()).toEqual(expectedResult);
  });
});

