
// Reguler Function.
function sayHello(greet){
    console(`${greet}!`);
}

// Function sebagai expression. (atau disebut dengan anonymous function).
const sayName = function (name){
    console.info(`Nama saya ${name}`);
}


// Arrow function.
const saygreet = greet => console.info(`${greet}`);                 // arrow function disimpan ke dalam variable.
const sayNamanya = name => console.info(`Nama saya ${name}`);


// NB:  Arrow function itu memiliki sifat yang sama seperti anonymous function yaitu bersifat expression.
//      Arrow function hanya dapat dibuat dengan cara: disimpan ke dalam variable, disimpan sebagai parameter, dan disimpan sebagai value dari property object.


// Contoh arrow function disimpan sebagai parameter.
["Dimas", "Widdy", "Buchori"].forEach(nama => console.info(`Nama saya adalah ${nama}`));

// Constoh arrow function sebagai value dari property object.
const user = {
    introduce: namay => console.info(`Nama saya ${namay}`),
}