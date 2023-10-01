//array.foreach() = mengalami fungsi panggilan balik yang disediakan
// satu kali untuk setiap elemen array

let students = ["spongebob", "patrick","squidward"]
students.forEach(capatilize)
students.forEach(print) 

function capatilize(element,index,array){
    array[index] = element[0].toUpperCase() + element.substring(1)
}

function print(element){
    console.log(element)
}