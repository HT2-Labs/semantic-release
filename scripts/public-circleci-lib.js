#!/usr/bin/env node
const release = require('../utils/release');

release({
  "getLastRelease": "@semantic-release/last-release-git-tag",
  "verifyConditions": [
    "condition-circle",
    "@semantic-release/github",
    "@semantic-release/npm"
  ],
  "publish": [
    "@semantic-release/github",
    "@semantic-release/npm"
  ]
});
