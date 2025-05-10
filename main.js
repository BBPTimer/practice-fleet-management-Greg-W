// Define the Vehicle Class:
// 
// The constructor should include properties: type, make, model, year,
// and mileage.
// ○
// Use default values for mileage (e.g., 0).
// 2. Add Methods:
// ○
// drive(distance): Increases the vehicle’s mileage by the given
// distance (in kilometers or miles).
// ○
// getDetails(): Returns a formatted string describing the vehicle’s
// details.
// 3. Create and Use Vehicle Objects:
// ○
// Instantiate at least three vehicle objects with diﬀerent properties (e.g.,
// a car, a truck, and a motorcycle).
// ○
// Use the drive method to simulate trips and update mileage.
// ○
// Use the getDetails method to print each vehicle’s updated
// information.


class Vehicle {
    constructor(type, make, model, year) {
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = 0;
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