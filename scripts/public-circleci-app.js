#!/usr/bin/env node
const release = require('../utils/release');
const package = require('../utils/package');

release({
  "getLastRelease": "last-release-git",
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
      "name": package.name
    }
  ]
});
