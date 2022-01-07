require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

const { Collection } = require('../models');


axios.get('https://api.opensea.io/api/v1/collection/doodles-official')
    .then(response => {
        // console.log("Data starts here", response.data);
        console.log("Each,", response.data.collection.name,
            response.data.collection.stats.floor_price,
            response.data.collection.stats.total_supply,
            response.data.collection.stats.seven_day_sales,
            response.data.collection.stats.thirty_day_sales,
            response.data.collection.slug,
            response.data.collection.description);
    }).catch(error => {
        console.log("error", error);
    });




router.get('/', (req, res) => {
    res.json({
        message: 'The test has passed'
    });
});


module.exports = router;