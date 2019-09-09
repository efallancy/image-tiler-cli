const imageTiles = require('./createImageTiles');
imageTiles.createImageTiles = jest.fn().mockReturnValue(Promise.resolve());

const usageMessage = require('./showUsageMessage');
usageMessage.showUsageMessage = jest.fn();

const { execute } = require('./execute');

describe('execute', () => {
  it('should call to create image tiles', async () => {
    await execute('./images/cat.jpg'); 
    expect(imageTiles.createImageTiles).toHaveBeenCalledTimes(1);
  });

  it('should call to show usage message when no arguments supplied', async () => {
    await execute();
    expect(usageMessage.showUsageMessage).toHaveBeenCalledTimes(1);
  })
});
