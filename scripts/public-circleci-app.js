#!/usr/bin/env node
const path = require('path');
const package = require('../utils/package');
const release = require('../utils/release');

release({
  "verifyConditions": [
    "semantic-release-docker",
    "@semantic-release/github",
    "@semantic-release/npm"
  ],
  "prepare": [
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
