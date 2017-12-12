#!/usr/bin/env node
const release = require('../utils/release');

release({
  "getLastRelease": "last-release-git",
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
