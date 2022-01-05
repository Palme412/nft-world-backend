const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    name: String,
    floor_price: Number,
    supply: Number,
    seven_day_sales: Number,
    thirty_day_sales: Number,
    slug: String,
    description: String,
    asset: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Asset' }]
});

const Collection = mongoose.model("Collection", collectionSchema);




module.exports = Collection;