#!/usr/bin/env node
const path = require('path');
const release = require('../utils/release');

release({
  "verifyConditions": [
    "@semantic-release/github",
    "@semantic-release/npm"
  ],
  "prepare": [
    "@semantic-release/npm"
  ],
  "publish": [
    "@semantic-release/github",
    "@semantic-release/npm"
  ]
});
