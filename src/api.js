let axios = require('axios');

module.exports = {
  post : function(url, params) {
    let headers = {
      'Content-Type' : 'application/json',
      'Authorization' : ''
    };

    return axios.post(url, params, { headers:headers })
  },

  get : function(url, params) {
    let headers = {
      'Content-Type' : 'application/json',
      'Authorization' : ''
    };

    return axios.get(url, params, { headers:headers })
  }
};

