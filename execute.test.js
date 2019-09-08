const fs = require('fs');

const { execute } = require('./execute');

const timeout = (seconds) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, seconds * 1000);
});

describe('execute', () => {
  it('should create image tiles', () => {
    execute('./images/cat.jpg');

    timeout(5);

    expect(fs.existsSync('./0/0_0.jpg')).toEqual(true);
  }, 10000);
});
