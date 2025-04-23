class Human {
    constructor(name) {
        this.name = name;
    }

    running() {
        console.log(this.name + " is running");
    }

    sleep() {
        throw new Error("sleep() must be implemented by subclass");
    }
}

class Martins extends Human {
    sleep() {
        console.log(this.name + " is sleeping");
    }
}

const martins = new Martins("Martins");
martins.running();
martins.sleep();
