const mongoose = require('mongoose');

const marketSchema = new mongoose.Schema({
    name: String,
    blockchain: String,
    collections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Collection' }],
});

const Market = mongoose.model("Market", marketSchema);



module.exports = Market;