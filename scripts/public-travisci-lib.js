const semanticRelease = require('semantic-release');
const pullTags = require('../utils/pullTags');

pullTags(() => {
  semanticRelease({
    "getLastRelease": "last-release-git",
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
});
