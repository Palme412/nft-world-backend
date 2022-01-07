const axios = require('axios');

axios.get('https://api.opensea.io/api/v1/asset/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1/')
    .then(response => {
        // console.log("Data starts here", response.data);
        console.log("Each,", response.data.name,
            response.data.image_url,
            response.data.permalink,
            response.data.last_sale.total_price,
            response.data.collection.image_url,
            response.data.traits[0].trait_type,
            response.data.traits[0].value,
            response.data.traits[1].trait_type,
            response.data.traits[1].value,
            response.data.traits[2].trait_type,
            response.data.traits[2].value,
            response.data.traits[3].trait_type,
            response.data.traits[3].value
        );
    }).catch(error => {
        console.log("error", error);
    });