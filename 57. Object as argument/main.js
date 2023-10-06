
class Car{
    constructor(model,years,color){
        this.model = model
        this.years = years
        this.color = color
    }
}

const car1 = new Car("Mustang", 1999, "Black")
const car2 = new Car("Nissan", 2001, "Gray")
const car3 = new Car("Lamborghini", 2019, "Red")

Viewcar1()
Viewcar2()
Viewcar3()


function Viewcar1(){
    console.log (car1.model)
    console.log (car1.years)
    console.log (car1.color)
}

function Viewcar2(){
    console.log (car2.model)
    console.log (car2.years)
    console.log (car2.color)
}



function Viewcar3(){
    console.log (car3.model)
    console.log (car3.years)
    console.log (car3.color)
}

