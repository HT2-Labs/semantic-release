#!/usr/bin/env node
const release = require('../utils/release');

release({
  "verifyConditions": [
    "condition-circle",
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
  "pkgRoot": "dist",
  "assets": ["package.json", "license", "readme.md"],
});
