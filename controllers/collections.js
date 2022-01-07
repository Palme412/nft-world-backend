require('dotenv').config();
const express = require('express');
const router = express.Router();

const { Collection } = require('../models');

router.get('/test', (req, res) => {
    res.json({
        message: 'The test has passed'
    });
});