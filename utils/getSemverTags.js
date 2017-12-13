const git = require('simple-git/promise')(process.cwd());
const semver = require('semver');

module.exports = async () => {
  const { all: tags } = await git.tags();
  const semverTags = tags.filter((tag) => {
    return semver.valid(semver.clean(tag));
  }).sort(semver.compare);
  return semverTags;
}
