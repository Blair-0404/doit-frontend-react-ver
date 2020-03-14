let axios = require('axios');

module.exports = {
  post : function(url, payload) {
    let headers = {
      'Content-Type' : 'application/json'
    };

    return axios.post(url, payload, { headers:headers });
  }
};
//
// import axios from "axios";
//
// const api = axios.create({
//   baseURL: "https://api.themoviedb.org/",
//   params: {
//     api_key: "44ebf9cf927b173d893cd89ea3db2e1e",
//     language: "en-US"
//   }
// });
