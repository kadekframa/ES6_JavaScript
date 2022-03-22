// Promise Berantai pada ES6.

const state = {
    isCoffeeMakerReady: true,
    seedStocks: {
        arabica: 250,
        robusta: 60,
        liberica: 80
    }
}

const getSeeds = (type, miligrams) => {
    return new Promise((resolve, reject) => {
        if(state.seedStocks[type] >= miligrams){
            state.seedStocks[type] -= miligrams;
            resolve("Biji Kopi Didapatkan");
        }else{
            reject("Maaf Stock Kopi Habis!");
        }
    });
}

const makeCoffee = seeds => {
    return new Promise((resolve, reject) => {
        if(state.isCoffeeMakerReady){
            resolve("Kopi berhasil dibuat!");
        }else{
            reject("Maaf Mesin Tidak Dapat Digunakan");
        }
    });
}

const servingToTable = coffee => {
    return new Promise(resolve => {
        resolve("Pesanan Kopi Sudah Selesai");
    });
}

function reserveACoffee(type, miligrams) {
    getSeeds(type, miligrams)
    .then(makeCoffee)
    .then(servingToTable)
    .then(resolvedValue => {
      console.log(resolvedValue);
    })
    .catch(rejectedReason => {
      console.log(rejectedReason);
    })
}


reserveACoffee("liberica", 80);




