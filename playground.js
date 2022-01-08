const { Collection } = require("./models");


Collection.insertOne({
    name: "Doodles",
    floor_price: 9.3,
    supply: 9999,
    seven_day_sales: 1143,
    thirty_day_sales: 3251,
    slug: "Doodles-Official",
    description: "A community-driven collectibles project featuring art by Burnt Toast. Doodles come in a joyful range of colors, traits and sizes with a collection size of 10,000. Each Doodle allows its owner to vote for experiences and activations paid for by the Doodles Community Treasury."
})
    .then((newCollection) => {
        console.log(newCollection);
    })
    .catch((error) => {
        console.log(error);
    })
