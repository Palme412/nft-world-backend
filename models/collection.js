const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    name: String,
    floor_price: Number,
    supply: Number,
    sales_volume: Number
});

const Collection = mongoose.model("Collection", collectionSchema);




module.exports = Collection;