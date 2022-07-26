#!/usr/bin/env node
const release = require('../utils/release');
const fs = require('fs-extra');

async function getDistFiles() {
  const distfiles = [];

  // Don't override the dist/package.json if it's already bundled.
  if (!fs.existsSync('./dist/package.json')) {
    distfiles.push(fs.copy('./package.json', './dist/package.json'));
  }

  if (fs.existsSync('./readme.md')) {
    distfiles.push(fs.copy('./readme.md', './dist/readme.md'));
  } else if (fs.existsSync('./README.md')) {
    distfiles.push(fs.copy('./README.md', './dist/README.md'));
  } else {
    console.log('No readme/README found.');
  }

  if (fs.existsSync('./license')) {
    distfiles.push(fs.copy('./license', './dist/license'));
  } else if (fs.existsSync('./LICENSE')) {
    distfiles.push(fs.copy('./LICENSE', './dist/LICENSE'));
  } else {
    console.log('No license/LICENSE found.');
  }

  return distfiles;
}

const main = async () => {
  try {
    await Promise.all(await getDistFiles());
    await release({
      "verifyConditions": [
        "@semantic-release/github",
        "@semantic-release/npm"
      ],
      "prepare": [
        "@semantic-release/npm"
      ],
      "publish": [
        "@semantic-release/github",
        "@semantic-release/npm"
      ],
      "pkgRoot": "dist"
    });
  } catch (err) {
    console.error('Release error', err.message);
    console.log(err.stack);
  }
};

main();
