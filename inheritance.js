// Inehritance pada JavaScript.

class Vehicle{                                  // Class parent.
    constructor(licensePlate, manufacture){
        this.licensePlate = licensePlate;
        this.manufacture = manufacture;
        this.engineActive = false;
    }

    startEngine(){
        console.info(`Mesin kendaraan ${this.licensePlate} dinyalakan!`);
    }

    info(){
        console.info(`Nomor Kendaraan: ${this.licensePlate}`);
        console.info(`Manufacture: ${this.manufacture}`);
        console.info(`Mesin: ${this.engineActive ? "Active": "Inactive"}`);
    }

    parking(){
        console.info(`Kendaraan ${this.licensePlate} parkir`);
    }
}


class Car extends Vehicle{                              // Class child.
    constructor(licensePlate, manufacture, wheels){
        super(licensePlate, manufacture);
        this.wheels = wheels;
    }

    droveOff(){
        console.info(`Kendaraan ${this.licensePlate} melaju!`);
    }

    operDoor(){
        console.info(`Membuka pintu !`);
    }

    info(){
        super.info();                                       // kata kunci "super" disini berfungsi untuk mengakses method info() yang ada pada class parent yaitu class Vehicle.
        console.info(`Jumlah roda: ${this.wheels}`);
    }
}


const car = new Car("h121S", "Honda", 4);
car.startEngine()                                           // object car dapat mengakses method startEngine() yang diwariskan dari parent class.

const johnCar = new Car("DK5124 LS", "Mitsubishi", 4);
johnCar.startEngine();
johnCar.info();