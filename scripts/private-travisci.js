#!/usr/bin/env node
const release = require('../utils/release');

release({
  "getLastRelease": "last-release-git",
  "verifyConditions": [
    "@semantic-release/condition-travis",
    "@semantic-release/github"
  ],
  "publish": [
    "@semantic-release/github"
  ]
});
