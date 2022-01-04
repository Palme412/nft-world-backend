const mongoose = require('mongoose');

const marketSchema = new mongoose.Schema({
    name: String,
    blockchain: String,
    collections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Collection' }],
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }]
});

const Market = mongoose.model("Market", marketSchema);



module.exports = Market;