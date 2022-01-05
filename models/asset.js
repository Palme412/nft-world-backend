const mongoose = require('mongoose');

const assetSchema = new mongoose.Schema({
    name: String,
    image_url: String,
    permalink: String,
    last_sale: Number,
    collection_image_url: String,
    trait_type: String,
    trait_value: String,
    collections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Collection' }]
});

const Asset = mongoose.model("Asset", assetSchema);




module.exports = Asset;