// Async Await ES6.

const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if(seeds >= 10){
                resolve("Coffee didapatkan!");
            }else{
                reject("Biji coffee habis!");
            }
        } ,1000);
    });
}

async function makeCoffee() {
    const coffee = await getCoffee();
    console.info(coffee);
}

makeCoffee();


/**
 * Output: Coffee didapatkan!
 */