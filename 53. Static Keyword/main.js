// static = belongs to the class, not the objects
//          properties: useful for cache, fixed=configuration
//          methods: useful for utility functions

class car{
    static numberofcars = 0
    constructor(model){

        this.model = model
        car.numberofcars += 1
    }

    static startrace(){
        console.log("3...2...1...GO!")
    }
}


car.startrace()

