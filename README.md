# @emmafallancy/image-tiler-cli

A CLI tool for creating tiles of images and outputing it as "pyramid" of tiles.

It uses [image-tiler](https://npmjs.com/package/image-tiler) under the hood and dependent on [ImageMagick](https://imagemagick.org/).

## Usage

This assumes that [Node.js](https://nodejs.org) has already been installed. To use `@emmafallancy/image-tiler-cli`, simply install it globally by running the command below:

```sh
# NPM
npm install -g @emmafallancy/image-tiler-cli

# yarn - if you're into it
yarn global add @emmafallancy/image-tiler-cli
```

To use it, simply run the following command:

```sh
$ tile <path to image>
```

The tile images shall be output in the current command execution directory formatted as following:

`L/x_y.jpg`

- ***L*** - denotes the zoom level, 0 being outermost zoom
- ***x*** - denotes the X coordinate
- ***y*** - denotes the Y coordinate

X and Y coordinate is defined from left to right, `0_0.jpg` being the starting from top-left corner.

## Running Locally

To run it locally, simply clone this repo and run the following command:

```sh
# Will output usage message
node ./index.js
```

## Caveats

This is currently only being tested in unix based environment (specifically MacOS). Apart from that, it assumes that you have already installed ImageMagick in your machine. Granted if you have not, you could install it by running the command as following:

```sh
# Linux based
sudo apt-get update
sudo apt-get install imagemagick

# Homebrew - Mac OS
brew install imagemagick

# Windows - Refer to https://imagemagick.org/script/download.php
```

_P.S.: Best to run with Node.js LTS (greater than or equal to v10.15.X)_

## License

MIT
