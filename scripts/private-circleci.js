#!/usr/bin/env node
const path = require('path');
const release = require('../utils/release');

release({
  "verifyConditions": [
    "condition-circle",
    "@semantic-release/github"
  ],
  "publish": [
    "@semantic-release/github"
  ]
});
