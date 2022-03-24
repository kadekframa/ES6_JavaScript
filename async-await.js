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


// NB:  Perlu jadi catatan bahwa await hanya akan mengembalikan nilai jika promise berhasil dilakukan (onFulfilled). Lantas bagaimana jika promise gagal dilakukan (onRejected)?
//      Kita dapat menangani sebuah error atau tolakan dengan menggunakan try..catch.