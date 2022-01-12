# nft-world-backend

This is the backend respository for NFT World. This holds the code necessary for data of the app. It was designed to work with the [frontend respository](https://github.com/kawaharm/nft-world-frontend). 

# About
NFT World is an app for users to see NFT collections ranked by 7 day sales and assets for each collection. 

# Installation 
### Create Local Repo
1. Fork and clone repository and the frontend repository.
2. `npm i` to install dependencies
3. Set up a `.env` file with `REACT_APP_SERVER_URL` set to `https://localhost:8000`

### Set Up Local Database
1. Install MongoDB if not installed 
2. Running the backend repo should create a new database called nft_world 

# Run Locally
1. Run `npm start` in both backend and frontend 
2. View the live version at `https://localhost:3000` in your browser of choice

# Why NFT World?
If you are new to NFT's and want to know what's selling or do have experience and just want to see rankings NFT World is the app for you!

# Code Snippet
### Display assets
```
router.post('/assets', (req, res) => {
    let newSlug = Object.keys(req.body);
    axios.get(`https://api.opensea.io/api/v1/assets?order_by=sale_date&order_direction=desc&offset=0&limit=10&collection=${newSlug}`)
        .then(response => {
            let assetsArray = response.data.assets.map((a, idx) => {
                let { name, image_url, permalink, last_sale, collection_image_url, trait_type, trait_value } = a;
                let obj = {};
                obj.index = idx;
                obj.name = a.name;
                obj.image_url = a.image_url;
                obj.permalink = a.permalink;
                obj.last_sale = a.last_sale;
                obj.collection_image_url = a.collection_image_url;
                obj.trait_type = a.traits.map(t => { return t.trait_type });
                obj.trait_value = a.traits.map(t => { return t.value });

                return obj;
            });
            res.json({ assetsArray });
        })
        .catch(err => {
            console.log('ERROR RETRIEVING ASSETS', err);
        })
});
```