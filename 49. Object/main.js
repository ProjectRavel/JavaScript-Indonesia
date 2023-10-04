// Object =  A Group of properties and methods
//           Properties = What an object has
//           methods = What an object can do
//           use . to access properties/methods

const car = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive : function(){
        console.log("You Drive that car")
    }
}

const car2 = {
    model:"Lamborghini",
    color:"black",
    year:2019,

    drive2 : function(){
        console.log(`You drive the ${this.model}`)
    }
}

console.log(car2.model)
console.log(car2.color)
console.log(car2.year)

car2.drive()
car2.brake()