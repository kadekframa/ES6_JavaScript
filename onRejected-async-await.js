// Menangani onRejected menggunakan async await.

// Dalam penggunaan async await, biasakan untuk menggunakan try..catch.


const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 4;
        setTimeout(() => {
            if(seeds >= 10){
                resolve("Coffee didapatkan!");
            }else{
                reject("Biji coffee habis!");
            }
        },3000);
    });
}

async function makeCoffee(){
    try {
        const coffee  = await getCoffee();
        console.info(coffee);
    } catch (rejectionReason) {
        console.info(rejectionReason);
    }
}


makeCoffee();



/*
    Output: Biji kopi habis!
*/