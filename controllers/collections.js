require('dotenv').config();
const express = require('express');
const router = express.Router();

const { Collection } = require('../models');

router.get('/', (req, res) => {
    res.json({
        message: 'The test has passed'
    });
});

// router.get('/collections', (req, res) => {
//     Collection.findAll
// })

module.exports = router;