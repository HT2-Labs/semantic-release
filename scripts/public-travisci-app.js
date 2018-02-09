#!/usr/bin/env node
const path = require('path');
const package = require('../utils/package');
const release = require('../utils/release');

release({
  "verifyConditions": [
    "semantic-release-docker",
    "@semantic-release/condition-travis",
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
