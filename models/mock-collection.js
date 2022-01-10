const mongoose = require('mongoose');

const mockCollectionSchema = new mongoose.Schema({
    name: String,
    floor_price: Number,
    supply: Number,
    seven_day_sales: Number,
    thirty_day_sales: Number,
    slug: String,
    description: String,
    asset: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Asset' }]
});

const mockCollection = mongoose.model("mockCollection", mockCollectionSchema);


module.exports = mockCollection;