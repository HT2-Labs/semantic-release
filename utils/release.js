const semanticRelease = require('semantic-release');
const pullTags = require('./pullTags');

module.exports = async (config) => {
  try {
    await pullTags();
    await semanticRelease(config);
    console.log('Finished release');
  } catch (err) {
    console.error('Release Error', err.message);
  }
};
