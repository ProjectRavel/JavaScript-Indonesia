// This = reference to a particular object
//        the object depends on the immediate context

const car = {

    model:"Mustang",
    color:"red",
    year:2023,

    drive : function(){
        console.log(`You Drive that ${this.model} car`)
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

car.drive()
car2.drive2()