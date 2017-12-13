const semver = require('semver');
const getSortedTags = require('../utils/getSemverTags');

module.exports = async (pluginConfig, { logger }) => {
  const tags = await getSortedTags();

  if (tags.length !== 0) {
    const tag = tags[tags.length - 1];
    const version = semver.valid(semver.clean(tag));
    logger.log('Found git tag version %s.', tag);
    return { gitHead: tag, version };
  } else {
    logger.log('No git tag version found.');
    return {};
  }
};
