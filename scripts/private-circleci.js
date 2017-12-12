#!/usr/bin/env node
const release = require('../utils/release');

release({
  "getLastRelease": "last-release-git",
  "verifyConditions": [
    "condition-circle",
    "@semantic-release/github"
  ],
  "publish": [
    "@semantic-release/github"
  ]
});
