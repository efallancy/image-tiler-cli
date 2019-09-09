const fs = require('fs');
const rimraf = require('rimraf');

const { execute } = require('./execute');

const zoomLevelFolders = ['0', '1', '2', '3', '4']; 

// Do cleanup
afterAll(() => {
  zoomLevelFolders.forEach((folder) => {
    if (fs.existsSync(`./${folder}`)) {
      rimraf.sync(`./${folder}`);
    }
  }); 
});

describe('Simulate CLI execution', () => {
  it('should generate "pyramid" of tiles in current execution of directory', async () => {
    await execute('./images/cat.jpg');

    // With current test image, it accommodates for 5 zoom level, starting from 0
    zoomLevelFolders.forEach((folder) => {
      expect(fs.existsSync(`./${folder}`)).toBeTruthy();
    });

    // Run random checks
    [
      './0/0_0.jpg',
      './1/1_1.jpg',
      './2/2_2.jpg',
      './3/2_1.jpg',
      './4/10_1.jpg'
    ].forEach((file) => {
      expect(fs.existsSync(file)).toBeTruthy();
    });
  });
});
