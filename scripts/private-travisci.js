#!/usr/bin/env node
const release = require('../utils/release');

release({
  "getLastRelease": "@semantic-release/last-release-git-tag",
  "verifyConditions": [
    "@semantic-release/condition-travis",
    "@semantic-release/github"
  ],
  "publish": [
    "@semantic-release/github"
  ]
});
