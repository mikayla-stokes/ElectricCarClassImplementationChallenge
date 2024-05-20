//Constructor that initializes make and speed (current speed in km/h)
class Car {
    constructor (make,speed) {
        this.make=make;
        this.speed=speed;
    }
//accelerate method
    accelerate () {
        this.speed += 10;
        console.log(`New speed:${this.speed} km/h`);
    }
//brake method
    brake () {
        this.speed -= 5;
        console.log(`New speed:${this.speed} km/h`);
    }
}

class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge;
    }
chargeBattery(chargeTo) {
        this.charge = chargeTo;
        console.log(`Battery charged to: ${this.charge}%`);
    }
accelerate() {
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h with a charge of ${this.charge}%`);
    }
}

// Create EV object using the provided test data
const ev1 = new EV('Tesla', 120, 23);

// Experiment with calling the accelerate, brake, and chargeBattery methods
ev1.accelerate();  // Tesla going at 140 km/h, with a charge of 22%
ev1.accelerate();  // Tesla going at 160 km/h, with a charge of 21%
ev1.accelerate();  // Tesla going at 180 km/h, with a charge of 20%
ev1.accelerate();  // Tesla going at 200 km/h, with a charge of 19%
ev1.accelerate();  // Tesla going at 220 km/h, with a charge of 18%

ev1.brake();       // New speed: 215 km/h
ev1.chargeBattery(50);  // Battery charged to: 50%
ev1.accelerate();  // Tesla going at 235 km/h, with a charge of 49%
