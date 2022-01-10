# Retrieve Collections Method
This is our strategy to retrieve all OpenSea NFT collections and store in database in order to sort collections by total sales volume in last 7 days. 

## Method
1.Use while loop and if statement to retrieve collections hitting API and store in database until the last collection is reached. Keep track of first collection by storing in a variable called `firstCollection` .  Keep track of full batch request date by storing in a variable called `lastRetrieved = Date.now()`

```js
let offset = 0;
let maxLimit = 300;
let firstCollection;    // first Collection retrieved from Batch Request 
let lastRetrieved;      // date of last Batch Request 

// Batch Request 
while (true) {
    let collectionsArray = [];
    
    // Hit API to retrieve collections with limit 300 and offset
    // Push response.data.collections into collectionsArray
    // ******************
    // { code here }
    // ******************
    lastRetrieved = Date.now();

    firstCollection = collectionsArray[0].name;

    // Insert collectionsArray into database
    // ******************
    // { code here }
    // ******************
    
    if (collectionsArray.length < (maxLimit - 1)) {
        break;
    }

    offset += 300;
}
```

2. The database will be full of duplicate collections so create a filter function to remove duplicates.

```js

```

3. Update database of collections: Set a time limit so after that limit exceeds, run the batch request again until `firstCollection` is reached. 

```js
if ((Date.now() - lastRetrieved) > timeLimit)
{
    // Run Batch Request. If response.data.collections includes firstCollection, stop loop

    while (true) {
    let collectionsArray = [];
    
    // Hit API to retrieve collections with limit 300 and offset
    // Push response.data.collections into collectionsArray
    // ******************
    // { code here }
    // ******************
    lastRetrieved = Date.now();

    firstCollection = collectionsArray[0].name;

    // Insert collectionsArray into database
    // ******************
    // { code here }
    // ******************
    
    // If statement to check if firstCollection is included in response.data.collections
    // If true, break!
    // ******************
    // { code here }
    // ******************

    offset += 300;
    }
}
```