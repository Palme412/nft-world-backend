require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

const { Collection } = require('../models');

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
        collectionArray.push(res.data.collection);
        response.json({
            collectionArray
        })
        //response.json({ topTenCasesArr, topTenDeathsArr, topTenNewCasesArr })
    }
    catch (error) {
        console.log(error);
    }
});

// router.get('/batchrequest', async (req, res) => {
//     try {
//         let offset = 0;
//         let maxLimit = 300;
//         let firstCollection;    // first Collection retrieved from Batch Request 
//         let lastRetrieved;      // date of last Batch Request 

//         // Batch Request 
//         while (true) {
//             let collectionsArray = [];

//             // Hit API to retrieve collections with limit 300 and offset
//             let apiRes = await axios.get(`https://api.opensea.io/api/v1/collections?offset=0&limit=300`);

//             // Push response.data.collections into collectionsArray
//             collectionsArray.push(response.data.collections);
//             lastRetrieved = Date.now();

//             // Store first collection retrieved
//             // ******* HOW DO YOU STORE THIS WITHOUT UPDATING AFTER FIRST LOOP???
//             firstCollection = collectionsArray[0].name;

//             // Insert collectionsArray into database
//             db.Collection.in

//             if (collectionsArray.length < (maxLimit - 1)) {
//                 break;
//             }

//             offset += 300;
//         }
//     }
// )

module.exports = router;