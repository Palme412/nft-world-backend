const axios = require('axios');

axios.get('https://api.opensea.io/api/v1/collections?offset=0&limit=10')
    .then(response => {
        console.log("Data starts here", response.data);
        console.log("Each,",
            response.data.collections.name,
            response.data.collections.stats.floor_price,
            response.data.collections.stats.total_supply,
            response.data.collections.stats.seven_day_sales,
            response.data.collections.stats.thirty_day_sales,
            response.data.collections.slug,
            response.data.collections.description
        );
    }).catch(error => {
        console.log("error", error);
    });