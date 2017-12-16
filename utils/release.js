const semanticRelease = require('semantic-release');
const fetchTags = require('./fetchTags');

module.exports = async (config) => {
  try {
    await fetchTags();
    await semanticRelease(config);
    console.log('Finished release');
  } catch (err) {
    console.error('Release error', err.message);
    console.log(err.stack);
  }
};
