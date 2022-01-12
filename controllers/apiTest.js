require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

const { mockCollection } = require('../models');

router.get('/test', (req, res) => {
    res.json({
        message: 'Testing api test controller'
    });
});

router.get('/', async (req, response) => {
    try {
        let res = await axios.get(`https://api.opensea.io/api/v1/collection/doodles-official`);

        let newCollection = await mockCollection.insertOne({
            name: res.data.collection.name,
            floor_price: res.data.collection.floor_price,
            seven_day_sales: res.data.collection.seven_day_sales,
            thirty_day_sales: res.data.collection.thirty_day_sales,
            slug: res.data.collection.slug,
            description: res.data.collection.description,
        })
        newCollection.save();
        response.json({ newCollection });
    }
    catch (error) {
        console.log('ERROR:', error);
    }
});



// router.get('/batchrequest', async (req, res) => {
//     try {
//         let offset = 0;
//         let maxLimit = 300;
//         let firstCollection;
//         let lastRetrieved;

//         while (true) {
//             let collectionsArray;


//             // Hit API to retrieve collections with limit 300 and offset
//             let apiRes = await axios.get(`https://api.opensea.io/api/v1/collections?offset=${offset}&limit=300`);

//             // Push response.data.collections into collectionsArray
//             collectionsArray = apiRes.data.collections;
//             lastRetrieved = Date.now();

//             // Store first collection retrieved
//             // ******* HOW DO YOU STORE THIS WITHOUT UPDATING AFTER FIRST LOOP???
//             if (offset === 0) {
//                 firstCollection = collectionsArray[0].name;
//             }

//             // Insert collectionsArray into database
//             mockCollection.insert

//             let apiRes = await axios.get(`https://api.opensea.io/api/v1/collections?offset=0&limit=300`);

//             collectionsArray.push(response.data.collections);
//             lastRetrieved = Date.now();

//             firstCollection = collectionsArray[0].name;

//             db.Collection.in


//             if (collectionsArray.length < maxLimit) {
//                 break;
//             }

//             offset += 300;
//         }
//     }
//     catch (error) {
//         console.log(error);
//     }
// });

module.exports = router;