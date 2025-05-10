class Vehicle {
    constructor(type, make, model, year, mileage = 0) {
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    drive(distance) {
        this.mileage += distance;
    }

    getDetails () {
        return `Type: ${this.type}, Details: ${this.year} ${this.make} ${this.model}, Mileage: ${this.mileage}`;
    }
}

const civic = new Vehicle("Car", "Honda", "Civic", 2012);
const crv = new Vehicle("SUV", "Honda", "CRV", 2016);
const vespa = new Vehicle("Moped", "Vespa", "Primavera", 2025);

//Drive to work
civic.drive(5);
console.log(civic.getDetails());

//Drive to Denver
crv.drive(614);
console.log(crv.getDetails());

//Drive to beach
vespa.drive(1);
console.log(vespa.getDetails());