// Promise pada JavaScript.
// Promisi merupakan subuah objek yang digunakan untuk membuat sebuah perhitungan (kode) ditangguhkan dan berjalan secara asyncronus.

// const coffee = new Promise();       // membuat object promise. untuk membuat objek promise, kita gunakan kata kunci new dan diikuti dengan constructor dari Promise.

// const executorFunction = (resolve, reject) => {
//     const isCoffeeMakerReady = true;
//     if(isCoffeeMakerReady){
//         resolve("Kopi Berhasil Dibuat");
//     }else{
//         reject("Mesin Kopi Tidak bisa Digunakan!");
//     }
// }

// const handlerSuccess = resolvedValue => {
//     console.info(resolvedValue);
// }

// const makeCoffee = new Promise(executorFunction);
// makeCoffee.then(handlerSuccess);    // Untuk menangani nilai yang dikirimkan oleh resolve() ketika promise onFulfilled, kita gunakan method .then() pada objek promise yang kita buat.
                                    // Lalu di dalam method .then() kita berikan parameter berupa function yang berguna sebagai handle callback.

// Namun bagaimana jika objek promise menghasilkan kondisi rejected? Bagaimana cara menangani nilai yagn dikirimkan oleh reject() ?
/*  Kita dapat menyimpan kedua handle callback baik onFulfilled atau onRejected pada parameter method .then(),
    yang perlu kita perhatikan adalah pastikan handle callback untuk onFulfilled disimpan pada parameter pertama
    seperti ini:
*/

const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if(isCoffeeMakerReady){
        resolve("Kopi Berhasil Dibuat");
    }else{
        reject("Mesin Kopi Tidak bisa Digunakan!");
    }
}

const handlerSuccess = resolvedValue => {
    console.info(resolvedValue);
}

const handlerRejected = rejectionReason => {
    console.info(rejectionReason);
}


// const makeCoffee = new Promise(executorFunction);
// makeCoffee.then(handlerSuccess, handlerRejected);       // penempatan paramter onFulfilled dan onRejected sebagai parameter pada .then(). Dengan begitu kita dapat menangani object Promise meskipun dalam kondisi rejected.


/*  Menerapkan prinsip separation of concerns untuk menulis kode dengan baik. Separation of concerns artinya pemisahan permasalahan.
    Pemisahan permasalahan ini berarti mengorganisasikan kode ke dalam bagian-bagian yang berbeda berdasarkan tugas tertentu.
    Hal ini akan memudahkan kita kelak mencari kode yang salah jika aplikasi tidak bekerja dengan baik.
    Dalam penerapan prinsip ini kita dapat menggunakan method .catch() yang hanya dapat menerima satu parameter function yang digunakan untuk rejected handler.
    Method .catch() ini akan terpanggil bilamana objek promise memiliki kondisi onRejected.
*/

const makeCoffee = new Promise(executorFunction);
makeCoffee
    .then(handlerSuccess)
    .catch(handlerRejected);                // method catch() untuk menerima parameter rejected handler.


// NB: Dengan menerapkan method .catch(), kita dapat menerapkan prinsip separation of concerns.