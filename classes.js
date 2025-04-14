// class automobile{
//     constructor(make, model, year, engine){
//         this.make = make
//         this.model = model
//         this.year = year
//         this.engine = engine
//     }
// }

// //Anything you want to do the moment you create the class should be put into the constructor block
// // The # keyword makes it private, e.g: this.#engine = 'V8'
// let myCar = new automobile ("Mercedes", "Jeep", 2018, "V12")

// //inheritance is used for a class to inherit attributes of a different class
// //The super keyword uses the properties of the inherited class

// class car extends automobile{
//     numberOfWheels;
//     numberOfDoors;

//     constructor(wheels, doors, make, model, year, engine){
//         super(make, model, year, engine)
//         this.numberOfDoors = doors;
//         this.numberOfWheels = wheels;
//     }
// }

// let Jeep = new car (4, 4, "Mercedes", "Jeep", 2018, "V12")

// console.log("My Jeep is a", Jeep)


class car {
    name;
    year;
    model;
    #engine;

    constructor(Name, Year, Model, EngineNumber){
        this.name = Name;
        this.year = Year;
        this.model = Model;
        this.#engine = EngineNumber;

    }

    accelarate(){
        console.log(`${this.name} moves a speed of 290ms`)
    }

    breaking(){
        console.log(`${this.name} breakes very fast`)
    }
    showEngineNo(){
        console.log(`this is the engine no ${this.#engine}`)
    }
}

const myNewCar = new car("ghost", 2025, 'camery', "q4232533")
console.log('my car details are:', myNewCar)

myNewCar.accelarate()
myNewCar.showEngineNo()