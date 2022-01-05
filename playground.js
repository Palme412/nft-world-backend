const { Collection } = require("./models");

Collection.insertMany({
    name: CryptoPunks,
    floor_price: 5,
    supply: 10000,
    seven_day_sales: Number,
    thirty_day_sales: Number,
    slug: String,
    description: String
})
    .then((newCollection) => {
        console.log(newCollection);
    })
    .catch((error) => {
        console.log(error);
    })