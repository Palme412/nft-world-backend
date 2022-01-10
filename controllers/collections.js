require('dotenv').config();
const express = require('express');
const router = express.Router();
const db = require('../models/collection');


router.get('/test', (req, res) => {
    // res.json({
    //     message: 'Testing api test controller',
    // });
    db.find().then(collections => {
        res.json({ collections })
    }).catch(err => res.status(500).json({ error: err }))
});



module.exports = router;