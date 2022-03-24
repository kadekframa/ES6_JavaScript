// Promise berantai dengan mengguanak async await.

// Jika sebelumnya kita melakukan chainning promsise (promise berantai) dengan method .then() seperti ini:
function reserveACoffee(type, miligrams){
    getSeeds(type, miligrams)
    .then(makeCoffee)
    .then(servingToTable)
    .then(resolvedValue => {
        console.info(resolvedValue);
    })
    .catch(rejectedReason => {
        console.info(rejectedReason);
    });
}

reserveACoffee("liberica", 80);


// Dengan pendekatan async/await, kita dapat melakukannya dengan cara seperti ini:
async function reserveACoffee(type, miligrams){
    try {
        const seeds = await getSeeds(type, miligrams);
        const coffee = await makeCoffee(seeds);
        const result = await servingToTable(coffee);
        console.info(result);
    } catch (rejectionReason) {
        console.info(rejectionReason);
    }
}

reserveACoffee("Arabica", 90);


/*
    Output: Pesanan kopi sudah selesai!
*/