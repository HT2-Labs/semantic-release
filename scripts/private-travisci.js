#!/usr/bin/env node
const path = require('path');
const release = require('../utils/release');

release({
  "getLastRelease": "@semantic-release/git",
  "verifyConditions": [
    "@semantic-release/condition-travis",
    "@semantic-release/github"
  ],
  "publish": [
    "@semantic-release/github"
  ]
});
