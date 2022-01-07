const { Collection } = require("./models");
const { Asset } = require("./models");
const axios = require('axios');

// axios.get('https://api.opensea.io/api/v1/collection/doodles-official')
//     .then(response => {
//         // console.log("Data starts here", response.data);
//         console.log("Each,", response.data.collection.name,
//             response.data.collection.stats.floor_price,
//             response.data.collection.stats.total_supply,
//             response.data.collection.stats.seven_day_sales,
//             response.data.collection.stats.thirty_day_sales,
//             response.data.collection.slug,
//             response.data.collection.description);
//     }).catch(error => {
//         console.log("error", error);
//     });


// Collection.insertMany({
//     name: "CryptoPunks",
//     floor_price: 5,
//     supply: 10000,
//     seven_day_sales: 10,
//     thirty_day_sales: 1000,
//     slug: "slug",
//     description: "Created in 2017"
// })
//     .then((newCollection) => {
//         console.log(newCollection);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

Asset.insertMany({
    name: "CryptoPunk #1",
    image_url: 'https://lh3.googleusercontent.com/7bRocEaoBrWYBX3vThkHj4kAV3b3mKG-Kem85xeT-D8oHpvQ19kcoiBd9mIFeNU0GrwZGvj6Oc5NAEGBSsGlrww',
    permalink: 'https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/1',
    last_sale: 600000000000,
    collection_image_url: 'https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s120',
    trait_type: 'type',
    trait_value: 'Male'
})
    .then((newAsset) => {
        console.log(newAsset);
    })
    .catch((error) => {
        console.log(error);
    })