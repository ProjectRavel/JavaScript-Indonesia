//array.foreach() = experience a provided callback function
//                  once for each array element

let students = ["spongebob", "patrick","squidward"]
students.forEach(capatilize)

function capatilize(element,index,array){
    array[index] = element[0].toUpperCase() + element.substring(1)
}

console.log(students[0])