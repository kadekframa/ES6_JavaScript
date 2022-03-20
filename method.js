// Untuk menambahkan method pada class, kita cukup menuliskannya pada body class.

class Car{
    constructor(manufacture, color){        // contoh dari constructor javascript.
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }

    startEngine(){                          // Method.
        console.info("Mesin dinyalakan:");
        this.enginesActive = true;
    }

    info(){                                 // Method.
        console.info(`Manufacture: ${this.manufacture}`);
        console.info(`Color: ${this.color}`);
        console.info(`Engines: ${this.enginesActive}`);
    }
}

const kadekCar = new Car("Honda", "Black"); // membuat objek baru (disebut instance objek) dengan class Car.
document.writeln(kadekCar.manufacture);     // memanggil nilai dari property objek kadekCar.

document.writeln("<br>");

// Melalui objek class kita juga dapat mengubah nilai properti seperti ini.
kadekCar.color = "White";   // mengubah nilai properti dengan menggunakan objek kadekCar.
document.writeln(`Warna mobil Kadek berubah menjadi: ${kadekCar.color}`);