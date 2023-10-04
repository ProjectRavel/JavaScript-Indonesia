// Constructor = a special method of a class,
//               accepts arguments and assigns properties

class students{
    constructor(name,age,iq){
       this.name = name
       this.age  = age
       this.iq   = iq
    }
    study(){
        console.log (`${name} studying`)
    }
    

}

let student1 = new students("Spongebob", 30, 150)

console.log (student1.name)
console.log (student1.age)
console.log (student1.iq)