const semanticRelease = require('semantic-release');

module.exports = async (config) => {
  try {
    await semanticRelease(config);
    console.log('Finished release');
  } catch (err) {
    console.error('Release error', err.message);
    console.log(err.stack);
  }
};
