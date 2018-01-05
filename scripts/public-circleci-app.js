#!/usr/bin/env node
const path = require('path');
const release = require('../utils/release');

release({
  "getLastRelease": "@semantic-release/git",
  "verifyConditions": [
    "condition-circle",
    "semantic-release-docker",
    "@semantic-release/github",
    "@semantic-release/npm"
  ],
  "publish": [
    "@semantic-release/github",
    "@semantic-release/npm",
    {
      "path": "semantic-release-docker",
      "name": package.name.replace(/@/g, ''),
    }
  ]
});
