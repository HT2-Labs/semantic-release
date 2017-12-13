#!/usr/bin/env node
const path = require('path');
const release = require('../utils/release');

release({
  "getLastRelease": path.join(__dirname, '../plugins/getLastRelease'),
  "verifyConditions": [
    "@semantic-release/condition-travis",
    "@semantic-release/github",
    "@semantic-release/npm"
  ],
  "publish": [
    "@semantic-release/github",
    "@semantic-release/npm"
  ]
});
