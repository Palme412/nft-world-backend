const axios = require('axios');

axios.get('https://api.opensea.io/api/v1/collections?offset=0&limit=10')
    .then(response => {
        // console.log("Data starts here", response.data);
        // console.log(response.data.collections.stats)
        console.log("Each,",
            response.data.collection.name,
            response.data.collection.stats.floor_price,
            response.data.collection.stats.total_supply,
            response.data.collection.stats.seven_day_sales,
            response.data.collection.stats.thirty_day_sales,
            response.data.collection.slug,
            response.data.collection.description
        );
    }).catch(error => {
        console.log("error", error);
    });