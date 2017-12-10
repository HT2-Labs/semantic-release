const semanticRelease = require('semantic-release');
const pullTags = require('../utils/pullTags');
const config = require('../utils/config');

pullTags(() => {
  semanticRelease({
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
});
