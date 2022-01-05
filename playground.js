const { Collection } = require("./models");

Collection.insertMany({
    name: "CryptoPunks",
    floor_price: 5,
    supply: 10000,
    seven_day_sales: 10,
    thirty_day_sales: 1000,
    slug: "slug",
    description: "Created in 2017"
})
    .then((newCollection) => {
        console.log(newCollection);
    })
    .catch((error) => {
        console.log(error);
    })