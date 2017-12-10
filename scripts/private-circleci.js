const semanticRelease = require('semantic-release');
const pullTags = require('../utils/pullTags');

pullTags(() => {
  semanticRelease({
    "getLastRelease": "last-release-git",
    "verifyConditions": [
      "condition-circle",
      "@semantic-release/github"
    ],
    "publish": [
      "@semantic-release/github"
    ]
  });
});
