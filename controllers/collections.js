require('dotenv').config();
const express = require('express');
const router = express.Router();
const db = require('../models/collection');


router.get('/test', (req, res) => {
    // res.json({
    //     message: 'Testing api test controller',
    // });
    db.find().sort({ seven_day_sales: -1 })
        .then(collections => {
            res.json({ collections })
        }).catch(err => res.status(500).json({ error: err }))

});

router.post('/assets', (req, res) => {
    console.log("Request");
});


module.exports = router;