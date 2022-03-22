// Promise pada JavaScript.
// Promisi merupakan subuah objek yang digunakan untuk membuat sebuah perhitungan (kode) ditangguhkan dan berjalan secara asyncronus.

// const coffee = new Promise();       // membuat object promise. untuk membuat objek promise, kita gunakan kata kunci new dan diikuti dengan constructor dari Promise.

const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = false;
    if(isCoffeeMakerReady){
        resolve("Kopi Berhasil Dibuat");
    }else{
        reject("Mesin Kopi Tidak bisa Digunakan!");
    }
}

const makeCoffee = new Promise(executorFunction);
console.info(makeCoffee);