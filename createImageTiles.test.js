const imageTiler = require('image-tiler');
imageTiler.tile = jest.fn();

const { createImageTiles } = require('./createImageTiles');

describe('createImageTiles', () => {
  it('should call execute `tile` function from `image-tiler`', () => {
    createImageTiles('abc.jpg');
    expect(imageTiler.tile).toHaveBeenCalledTimes(1);
    expect(imageTiler.tile).toHaveBeenCalledWith(
      'abc.jpg',
      './',
      '{z}/{x}_{y}.jpg'
    );
  });
});

