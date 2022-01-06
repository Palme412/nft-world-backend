const axios = require('axios');

axios.get('https://api.opensea.io/api/v1/collections?offset=0&limit=10')
    .then(response => {
        console.log(response.data);
    }).catch(error => {
        console.log("error", error);
    });