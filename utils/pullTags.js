const git = require('simple-git')(process.cwd());

module.exports = git.pull;
