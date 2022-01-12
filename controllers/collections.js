require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('../models/collection');



router.get('/', (req, res) => {

    db.find().sort({ seven_day_sales: -1 })
        .then(collections => {
            res.json({ collections })
        }).catch(err => res.status(500).json({ error: err }))
});

router.post('/assets', (req, res) => {
    let newSlug = Object.keys(req.body);
    axios.get(`https://api.opensea.io/api/v1/assets?order_by=sale_date&order_direction=desc&offset=0&limit=10&collection=${newSlug}`)
        .then(response => {
            let assetsArray = response.data.assets.map((a, idx) => {
                let { name, image_url, permalink, last_sale, collection_image_url, trait_type, trait_value } = a;
                let obj = {};
                obj.index = idx;
                obj.name = a.name;
                obj.image_url = a.image_url;
                obj.permalink = a.permalink;
                obj.last_sale = a.last_sale;
                obj.collection_image_url = a.collection_image_url;
                obj.trait_type = a.traits.map(t => { return t.trait_type });
                obj.trait_value = a.traits.map(t => { return t.value });

                return obj;
            });
            res.json({ assetsArray });
        })
        .catch(err => {
            console.log('ERROR RETRIEVING ASSETS', err);
        })
});


module.exports = router;