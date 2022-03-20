
class Car{
    constructor(manufacture, color){        // contoh dari constructor javascript.
        this.manufacture = manufacture;
        this.color = color;
        this.enginesActive = false;
    }
}

const kadekCar = new Car("Honda", "Black"); // membuat objek baru (disebut instance objek) dengan class Car.
document.writeln(kadekCar.manufacture);     // memanggil nilai dari property objek kadekCar.