let axios = require('axios');

module.exports = {
  post : function(url, payload) {
    let headers = {
      'Content-Type' : 'application/json'
    };

    return axios.post(url, payload, { headers:headers });
  }
};

