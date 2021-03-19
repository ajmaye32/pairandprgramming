class car {
    constructor(make, model, year, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    driveToWork() {
        console.log(`Old Mileage: ${this.mileage}`)
        this.mileage += 33;
        console.log(`New Milage: ${this.mileage}`)
    }


    driveAroundTheWorld() {
        console.log(`Old Mileage: ${this.mileage}`)
        this.mileage += 24000;
        console.log(`New Milage: ${this.mileage}`)
    }

    runErrands() {
        console.log(`Old Mileage: ${this.mileage}`)
        this.mileage += 30;
        console.log(`New Milage: ${this.mileage}`)
    }
}

let c1 = new car("honda", "Civic", "2019", 662);
c1.driveAroundTheWorld();

c1.runErrands();

c1.driveToWork();

