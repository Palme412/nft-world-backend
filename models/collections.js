const mongoose = require('mongoose');

const collectionsSchema = new mongoose.Schema({
    name: String,
    floor_price: Number,
    supply: Number,
    sales_volume: Number,
    market_id: Number,
    category_id: Number
});

const Collection = mongoose.model("Collection", collectionsSchema);




module.exports = Collection;