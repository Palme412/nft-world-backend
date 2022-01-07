require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

const { Collection } = require('../models');
const { collection } = require('../models/user');

router.get('/test', (req, res) => {
    res.json({
        message: 'Testing api test controller'
    });
});

// Fetch API for NFT collection (doodle-official) 
router.get('/', async (req, response) => {
    try {
        // Hit API
        let res = await axios.get(`https://api.opensea.io/api/v1/collection/doodles-official`);
        let collectionArray = [];
        collectionArray.push(response.data.collection);
        response.json({
            collectionArray
        })
        //response.json({ topTenCasesArr, topTenDeathsArr, topTenNewCasesArr })
    }
    catch (error) {
        console.log(error);
    }
});

module.exports = router;