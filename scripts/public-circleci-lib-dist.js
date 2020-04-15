#!/usr/bin/env node
const release = require('../utils/release');
const fs = require('fs-extra');

const main = async () => {
  try {
    await Promise.all([
      fs.copy('./package.json', './dist/package.json'),
      fs.copy('./readme.md', './dist/readme.md'),
      fs.copy('./license', './dist/license'),
    ]);
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
