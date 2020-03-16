let axios = require('axios');

module.exports = {
  post : function(url, payload) {
    let headers = {
      'Content-Type' : 'application/json'
    };

    return axios.post(url, payload, { headers:headers });
  }
};


import axios from "axios";

// 유니 피드백 코드
const base_url = 'https://api.themoviedb.org/3';
const api_key = '44ebf9cf927b173d893cd89ea3db2e1e';