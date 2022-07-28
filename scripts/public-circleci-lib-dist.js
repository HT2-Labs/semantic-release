#!/usr/bin/env node
const release = require('../utils/release');
const fs = require('fs-extra');

async function copyBestPath(bestPaths, targetPath, overwrite = true) {
  if (!overwrite && fs.existsSync(targetPath)) {
    console.log(`Skipping ${bestPaths.join(' ')} as ${targetPath} has targeted file.`);
    return;
  }

  const bestPath = bestPaths.find((potentialBestPath) => {
    return fs.existsSync(potentialBestPath);
  });

  if (bestPath === undefined) {
    console.log(`Could not find a best path for ${targetPath} from ${bestPaths.join(' ')}`);
    return;
  }

  return fs.copy(bestPath, targetPath);
}

const main = async () => {
  try {
    await Promise.all([
      copyBestPath(['./package.json'], './dist/package.json', false),
      copyBestPath(['./readme.md', './README.md'], './dist/README.md'),
      copyBestPath(['./license', './LICENSE'], './dist/LICENSE'),
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
