const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  axios.get(options.url, options)
    .then((response) => {
      callback(response.data)
    })
    .catch((err) => {
      console.log('ERROR IN getReposByUserName', err)
    })
}

module.exports.getReposByUsername = getReposByUsername;